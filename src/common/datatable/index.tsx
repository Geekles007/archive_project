import {memo} from "react"
import {
    TableContainer, Table, DataTableCustomRenderProps, DenormalizedRow,
    DataTableCustomSelectionData,
    DataTableCustomSelectionProps,
    DataTableRow, DataTableSize
} from "carbon-components-react";
import * as React from "react";
import ToolbarUI from './components/toolbar';
import HeadersUI, {Header} from './components/headers';
import BodyUI from './components/body';
import Paginator, {OnChangeProps} from "./components/paginator";
import {CustomProps} from "../custom-options-menu";
import {ToolbarAction} from "./components/toolbar/components/toolbar-content";
import {BatchAction} from "./components/toolbar/components/batch-actions";
import {CarbonIconType} from "@carbon/icons-react";
import {CustomDatatable} from "./datatable-style/default";
import {ShapeOf} from "carbon-components-react/typings/shared";
import * as _ from "lodash";

export type DatatableProps<T> = {
    data?: T[];
    headers?: Header[];
    key?: string;
    title?: React.ReactNode;
    description?: string;
    newAvailable?: () => void; // enable new button table
    perPage?: number;
    pageNumber?: number;
    pageSizes?: number[];
    totalItems?: number;
    batchActions?: BatchAction[];
    toolbarAction?: ToolbarAction[];
    refresh?: () => void;
    print?: () => void | { label: string, key: string }[];
    additionals?: JSX.Element[];
    add?: () => void | boolean;
    paginatorChange: (e: OnChangeProps) => void,
    actions?: CustomProps[],
    titleNew?: string,
    noToolbar?: boolean,
    noPaginator?: boolean,
    noSelection?: boolean,
    isExpanded?: boolean,
    isSortable?: boolean,
    type?: string,
    expandedMenus?: CustomProps[],
    itemsPerPageText?: string,
    itemText?: (min: number, max: number) => void,
    backwardText?: string,
    forwardText?: string,
    pageNumberText?: string,
    addons?: JSX.Element,
    mainButtonIcon?: CarbonIconType,
    showDetails?: (row: DenormalizedRow) => void,
    expandedBody?: (
        type?: string,
        data?: Readonly<any>,
        noSelection?: boolean,
        parent?: DenormalizedRow,
        getSelectionProps?: <E extends object = {}>(
            data?: ShapeOf<DataTableCustomSelectionData, E>
        ) => ShapeOf<DataTableCustomSelectionProps<DataTableRow>, E> | ShapeOf<DataTableCustomSelectionProps<never>, E>,
        menus?: any[]
    ) => JSX.Element | undefined;
    selectedRow?: string;
    orderBy?: {
        attributeName: string,
        orderOption: "asc" | "desc"
    },
    searchInput?: JSX.Element;
    size?: DataTableSize;
    onSelect?: (e: boolean, selectedRow: DenormalizedRow) => void;
    excludeClickOn?: Map<string, string>;
}

const DatatableUI: React.FC<DatatableProps<any>> = ({
                                                        expandedBody,
                                                        title,
                                                        data = [],
                                                        headers = [],
                                                        perPage = 10,
                                                        pageNumber = 1,
                                                        batchActions,
                                                        pageSizes,
                                                        totalItems,
                                                        refresh,
                                                        print,
                                                        size = "normal",
                                                        key,
                                                        add,
                                                        paginatorChange,
                                                        actions,
                                                        description,
                                                        titleNew,
                                                        additionals,
                                                        noToolbar = false,
                                                        noPaginator = false,
                                                        noSelection = false,
                                                        isExpanded,
                                                        isSortable = true,
                                                        type,
                                                        expandedMenus,
                                                        addons,
                                                        mainButtonIcon,
                                                        showDetails,
                                                        selectedRow,
                                                        orderBy,
                                                        searchInput,
                                                        onSelect,
                                                        excludeClickOn
                                                    }) => {

    return (
        <>
            <CustomDatatable key={key}
                             rows={_.orderBy(data, [orderBy?.attributeName ?? ""], [orderBy?.orderOption ?? "asc"])}
                             headers={headers} isSortable={isSortable} render={({
                                                                                    rows,
                                                                                    headers,
                                                                                    getHeaderProps,
                                                                                    getRowProps,
                                                                                    getSelectionProps,
                                                                                    getBatchActionProps,
                                                                                    onInputChange,
                                                                                    selectedRows,
                                                                                }: DataTableCustomRenderProps) => (
                <TableContainer title={title} description={description} stickyHeader={true}>
                    <ToolbarUI noToolbar={noToolbar} icon={mainButtonIcon} additionals={additionals}
                               selectedRows={selectedRows} data={data} searchInput={searchInput}
                               titleNew={titleNew} add={add} actions={batchActions}
                               batchActionsProps={getBatchActionProps()} inputChange={onInputChange}
                               refresh={refresh} print={print}/>
                    <Table size={size} overflowMenuOnHover={true}>
                        <HeadersUI isExpanded={isExpanded} noSelection={noSelection} withMenu={actions}
                                   headers={headers} tableSelectAllProps={getSelectionProps()}
                                   getHeaderProps={getHeaderProps}/>
                        <BodyUI excludeClickOn={excludeClickOn} expandedBody={expandedBody} expandedMenus={expandedMenus} type={type}
                                noSelection={noSelection} menus={actions} getRowProps={getRowProps}
                                getSelectionProps={getSelectionProps} rows={rows} isExpanded={isExpanded}
                                addons={addons} onSelect={onSelect} selectedRows={selectedRows} showDetails={showDetails}
                                selectedRow={selectedRow}/>
                    </Table>
                </TableContainer>
            )} />
            {
                !noPaginator ?
                    <Paginator onChange={paginatorChange} perPage={perPage} pageNumber={pageNumber}
                               pageSizes={pageSizes} totalItems={totalItems}/> : <></>
            }
        </>
    );

}

export default memo(DatatableUI)
