import {memo, RefObject} from "react";
import * as React from 'react';
import {
    TableToolbarContent,
    TableToolbarSearch,
    TableToolbarMenu,
    TableToolbarAction,
    Button,
    TableBatchActionsProps,
    DenormalizedRow
} from "carbon-components-react";
import {Add16, Add32, CarbonIconType, Export32, Renew32} from "@carbon/icons-react";
import {v4 as uuidv4} from "uuid";

type ToolbarContentUIProps = {
    tableBatchActionsProps?: TableBatchActionsProps,
    onInputChange?: (event: React.SyntheticEvent<HTMLInputElement, Event>) => void,
    refresh?: () => void,
    print?: () => void | { label: string, key: string }[],
    additionals?: JSX.Element[],
    add?: () => void | boolean,
    titleNew?: string,
    mainButtonIcon?: CarbonIconType,
    selectedRows?: any,
    data?: any[],
    printButtonRef?: RefObject<any>,
    searchInput?: JSX.Element;
}

export type ToolbarAction = {
    title: string;
    action: Function
}

const ToolbarContentUI = ({
                              tableBatchActionsProps,
                              onInputChange,
                              refresh,
                              print,
                              additionals,
                              add,
                              titleNew,
                              mainButtonIcon = Add32,
                              selectedRows,
                              data,
                              printButtonRef,
                              searchInput
                          }: ToolbarContentUIProps) => {

    const printing = () => {
        // @ts-ignore
        printButtonRef?.current.link.click();
        if (print && typeof print === "function") {
            print();
        }
    }

    return (
        <>
            <TableToolbarContent>
                {
                    searchInput ? searchInput :
                        <TableToolbarSearch
                            persistent={true}
                            placeholder={"Фильтр пользователей"}
                            tabIndex={tableBatchActionsProps?.shouldShowBatchActions ? -1 : 0}
                            onChange={onInputChange}
                        />
                }
                {
                    print ?
                        <>
                            {/*<CSVLink*/}
                            {/*    headers={(print && typeof print === "object" ? print : [])}*/}
                            {/*    filename={uuidv4() + ".csv"}*/}
                            {/*    data={selectedRows && selectedRows.length > 0 ? selectedRows : data}*/}
                            {/*    ref={printButtonRef}/>*/}
                            <Button
                                hasIconOnly
                                renderIcon={Export32}
                                tooltipAlignment="center"
                                tooltipPosition="bottom"
                                onClick={printing}
                                kind="ghost"
                                iconDescription="Refresh"
                            />
                        </> : <></>
                }
                {
                    refresh ?
                        <Button
                            hasIconOnly
                            renderIcon={Renew32}
                            tooltipAlignment="center"
                            tooltipPosition="bottom"
                            kind="ghost"
                            onClick={() => refresh()}
                            iconDescription="Export"
                        /> : <></>
                }
                {
                    additionals?.map((additional) => {
                        return (additional);
                    })
                }
                {
                    (add !== undefined) ?
                        <Button
                            hasIconOnly={titleNew === ""}
                            tabIndex={tableBatchActionsProps?.shouldShowBatchActions ? -1 : 0}
                            onClick={add}
                            renderIcon={mainButtonIcon}
                            iconDescription={"Add"}
                            kind="primary"
                        >
                            {titleNew}
                        </Button> : null
                }
            </TableToolbarContent>
        </>
    );

}

export default memo(ToolbarContentUI);