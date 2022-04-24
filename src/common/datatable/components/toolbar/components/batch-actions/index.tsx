import {memo, RefObject} from "react"
import * as React from 'react';
import { TableBatchActions, TableBatchAction, TableBatchActionsProps, DenormalizedRow } from "carbon-components-react";
import {CarbonIconType, Delete32} from "@carbon/icons-react";
import {v4 as uuidv4} from "uuid";
import {useTranslation} from "react-i18next";

type BatchActionsUIProps = {
    tableBatchActionsProps: TableBatchActionsProps,
    actions: BatchAction[] | undefined,
    selectedRows: readonly DenormalizedRow[],
    printButtonRef: RefObject<any>

}

export type BatchAction = {
    icon: CarbonIconType;
    title: string;
    func: (selectedRows: readonly DenormalizedRow[], ref?: RefObject<any>) => void;
}

const BatchActionsUI: React.FC<BatchActionsUIProps> = ({tableBatchActionsProps, actions, selectedRows, printButtonRef}) => {

    const {shouldShowBatchActions} = tableBatchActionsProps;
    const {t} = useTranslation("translation", {useSuspense: false})

    return (
        <TableBatchActions {...tableBatchActionsProps}>
            {
                actions?.map((item: BatchAction) => {
                    return (
                        <TableBatchAction
                            key={uuidv4()}
                            tabIndex={shouldShowBatchActions ? 0 : -1}
                            renderIcon={item.icon}
                            onClick={() => item.func(selectedRows, printButtonRef)}
                        >
                            {t(item.title as string)}
                        </TableBatchAction>
                    )
                })
            }
        </TableBatchActions>
    );

}

export default memo(BatchActionsUI);
