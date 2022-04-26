import {memo, useCallback, useEffect, useState} from "react";
import * as React from "react";
import styled from "styled-components";
import {useLazyQuery, WatchQueryFetchPolicy} from "@apollo/client";
import {IConnection} from "../../../../models/IConnection";
import {IUser} from "../../../../models/IUser";
import {RETRIEVE_USERS, SEARCH_USERS} from "../../../../services/queries/user";
import {ApiClient} from "../../../../services/config/api-client";
import {debounce} from "lodash";
import ToolbarContentUI from "../../../../common/datatable/components/toolbar/components/toolbar-content";
import {Search} from "carbon-components-react";
import ListSwitcher from "../../../../common/list-switcher";
import UsersViewer from "../users-viewer";
import {gray90} from "@carbon/colors";
import {useTranslation} from "react-i18next";

interface UsersHandlerProps {

}

const UsersHandlerWrapper = styled.div`
  .search {
    background-color: ${gray90};
  }
`;

const UsersHandler = ({}: UsersHandlerProps) => {

    const [input, setInput] = useState<string | undefined>();
    const [policy, setPolicy] = useState<WatchQueryFetchPolicy>("no-cache");
    const {t} = useTranslation("translation", {useSuspense: false});

    const [executeSearch, {data, fetchMore, loading, refetch}] = useLazyQuery<IConnection<IUser>>(
        input && input !== "" ? SEARCH_USERS : RETRIEVE_USERS,{
            client: ApiClient,
            fetchPolicy: "no-cache",
            variables: {
                first: 30
            }
        }
    );

    useEffect(() => {
        executeSearch()
    }, []);

    const refreshComponent = useCallback(async () => {
        await setPolicy("cache-and-network");
        if (refetch) {
            refetch();
        }
        setPolicy("no-cache");
    }, [setPolicy]);

    const onChangeHandler = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event?.target?.value;
        setInput(value);
        handleFilter(value);
    }, [input]);

    const handleFilter = debounce((val) => {
        if (val && val.length > 0) {
            executeSearch({
                variables: {
                    first: 30,
                    input: val
                }
            })
        }
    }, 300);

    return (
        <UsersHandlerWrapper>
            <ToolbarContentUI
                searchInput={<Search
                    labelText={""}
                    id="search-1"
                    className={"search"}
                    placeHolderText="поиска"
                    onChange={onChangeHandler}
                />} refresh={refreshComponent} add={() => {}} titleNew={t("addNew")} />
            <ListSwitcher refetch={refetch} loading={loading} retrieveAttributes={"retrieveUsers"} count={10} fetchMore={fetchMore}
                          data={data} render={(refresher: string, data: any) => <UsersViewer key={refresher} data={data} refetch={refetch} />}/>
        </UsersHandlerWrapper>
    );


}

export default memo<UsersHandlerProps>(UsersHandler);
