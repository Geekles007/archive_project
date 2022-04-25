import {memo, useCallback, useEffect, useState} from "react";
import * as React from "react";
import styled from "styled-components";
import {useLazyQuery, WatchQueryFetchPolicy} from "@apollo/client";
import {IConnection} from "../../../../models/IConnection";
import {IRole} from "../../../../models/IRole";
import {RETRIEVE_ROLES, SEARCH_ROLES} from "../../../../services/queries/role";
import {ApiClient} from "../../../../services/config/api-client";
import {debounce} from "lodash";
import ToolbarContentUI from "../../../../common/datatable/components/toolbar/components/toolbar-content";
import {Search} from "carbon-components-react";
import ListSwitcher from "../../../../common/list-switcher";
import RolesViewer from "../roles-viewer";
import {gray70, gray80, gray90} from "@carbon/colors";
import {useTranslation} from "react-i18next";

interface RolesHandlerProps {

}

const RolesHandlerWrapper = styled.div`
  .search {
    background-color: ${gray90};
  }
`;

const RolesHandler = ({}: RolesHandlerProps) => {

    const [input, setInput] = useState<string | undefined>();
    const [policy, setPolicy] = useState<WatchQueryFetchPolicy>("no-cache");
    const {t} = useTranslation("translation", {useSuspense: false})

    const [executeSearch, {data, fetchMore, loading, refetch}] = useLazyQuery<IConnection<IRole>>(
        input && input !== "" ? SEARCH_ROLES : RETRIEVE_ROLES,{
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
        <RolesHandlerWrapper>
            <ToolbarContentUI
                searchInput={<Search
                    labelText={""}
                    id="search-role"
                    className={"search"}
                    placeHolderText={t("searchText")}
                    onChange={onChangeHandler}
                />} refresh={refreshComponent} />
            <ListSwitcher refetch={refetch} loading={loading} retrieveAttributes={"retrieveRoles"} count={10} fetchMore={fetchMore}
                          data={data} render={(refresher: string, data: any) => <RolesViewer key={refresher} data={data} refetch={refetch} />}/>
        </RolesHandlerWrapper>
    )
}

export default memo<RolesHandlerProps>(RolesHandler);