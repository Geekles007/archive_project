import {memo, RefObject} from "react";
import * as React from "react";
import {
    DataTableCustomRenderProps,
    TableToolbar,
    TableBatchActionsProps,
    TableToolbarContentProps,
    DenormalizedRow
} from "carbon-components-react";
import {CarbonIconType, Delete32} from "@carbon/icons-react";
import BatchActionsUI, {BatchAction} from "./components/batch-actions";
import ToolbarContent from "./components/toolbar-content";

type ToolbarUIProps = {
    batchActionsProps: TableBatchActionsProps,
    inputChange: (event: React.SyntheticEvent<HTMLInputElement, Event>) => void,
    actions: BatchAction[] | undefined,
    refresh?: () => void,
    print?: () => void | {label: string, key: string}[],
    selectedRows: any,
    add?: () => void | boolean,
    titleNew?: string,
    additionals?: JSX.Element[],
    icon?: CarbonIconType,
    data: any[],
    searchInput?: JSX.Element;
    noToolbar: boolean;
}

const ToolbarUI = ({
                       batchActionsProps,
                       inputChange,
                       actions,
                       refresh,
                       print,
                       additionals,
                       selectedRows,
                       add,
                       titleNew,
                       icon,
                       data,
                       searchInput,
                       noToolbar
                   }: ToolbarUIProps) => {

    const printButtonRef: RefObject<any> = React.createRef();

    return (
        <TableToolbar>
            <BatchActionsUI printButtonRef={printButtonRef} selectedRows={selectedRows} actions={actions} tableBatchActionsProps={batchActionsProps}/>
            {
                !noToolbar ?
                    <ToolbarContent printButtonRef={printButtonRef} data={data} mainButtonIcon={icon} additionals={additionals} add={add} titleNew={titleNew}
                                    refresh={refresh} print={print} onInputChange={inputChange} searchInput={searchInput}
                                    tableBatchActionsProps={batchActionsProps} selectedRows={selectedRows}/> : <></>
            }
        </TableToolbar>
    );
}

export default memo(ToolbarUI);
