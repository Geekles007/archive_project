import {memo, useCallback, useEffect, useState} from "react";
import * as React from "react";
import styled from "styled-components";
import {useLazyQuery, WatchQueryFetchPolicy} from "@apollo/client";
import {useTranslation} from "react-i18next";
import {IConnection} from "../../../../models/IConnection";
import {IFolder} from "../../../../models/IFolder";
import {ApiClient} from "../../../../services/config/api-client";
import {debounce} from "lodash";
import ListSwitcher from "../../../../common/list-switcher";
import {RETRIEVE_FOLDERS, SEARCH_FOLDERS} from "../../../../services/queries/folder";
import MainDir from "../maindir";
import BreadCrumbs from "../breadcrumbs";
import {Button, Search} from "carbon-components-react";
import {Add16} from "@carbon/icons-react";

interface MainFolderHandlerProps {

}

const MainFolderHandlerWrapper = styled.div`

`;

const MainFolderHandler = ({}: MainFolderHandlerProps) => {

    const [input, setInput] = useState<string | undefined>();
    const [policy, setPolicy] = useState<WatchQueryFetchPolicy>("no-cache");
    const {t} = useTranslation("translation", {useSuspense: false});

    const [executeSearch, {data, fetchMore, loading, refetch}] = useLazyQuery<IConnection<IFolder>>(
        input && input !== "" ? SEARCH_FOLDERS : RETRIEVE_FOLDERS,{
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
        <MainFolderHandlerWrapper>
            <div className="_flex head">
                <h3>{t("fileManagerTitle")}</h3>
                <div className="_flex">
                    <Search
                        labelText={""}
                        id="search-role"
                        className={"search"}
                        placeHolderText={t("searchText")}
                        onChange={onChangeHandler}
                    />
                    <Button kind={"primary"} tooltipPosition={"left"} iconDescription={t("createNewFolderText")} hasIconOnly renderIcon={Add16} />
                </div>
            </div>
            <BreadCrumbs refetch={refetch} />
            <MainDir refetch={refetch} />
            {/*<ListSwitcher refetch={refetch} loading={loading} retrieveAttributes={"retrieveFolders"} count={10} fetchMore={fetchMore}*/}
            {/*              data={data} render={(refresher: string, data: any) => <MainDir key={refresher} data={data} refetch={refetch} />}/>*/}
        </MainFolderHandlerWrapper>
    );

}

export default memo<MainFolderHandlerProps>(MainFolderHandler);