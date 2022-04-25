import {memo, useEffect} from "react";
import * as React from "react";
import styled from "styled-components";
import {IUser} from "../../../../models/IUser";
import UserStore from "../../../../stores/UserStore";
import DatatableUI, {DatatableProps} from "../../../../common/datatable";
import * as _ from "lodash";
import UserController from "./../../controller";
import {useTranslation} from "react-i18next";

interface UsersViewerProps {
    refetch: any;
    data: Array<IUser>;
}

const UsersViewerWrapper = styled.div`
    
`;

const UsersViewer = ({data, refetch}: UsersViewerProps) => {

    const {t} = useTranslation("translation", {useSuspense: false})

    useEffect(() => {
        UserStore.setListFromArray(data);
    }, [data])

    const tableOptions: DatatableProps<any> = {
        data: UserController.getCustomData(_.orderBy(data, ['createdAt'],['desc']), refetch),
        headers: UserController.getHeaders(t),
        paginatorChange: UserController.paginatorChange,
        noPaginator: true,
        noSelection: false,
        noToolbar: true,
        isExpanded: true,
        // expandedBody: UserController.getExpandedRows,
        batchActions: UserController.getBatchActions(refetch),
        actions: UserController.getActions(t, refetch),
        refresh: refetch
    }

    return (
        <>
            <DatatableUI {...tableOptions} />
        </>
    );

}

export default memo<UsersViewerProps>(UsersViewer);