import { memo } from "react"
import * as React from "react";
import {
    TableHead,
    TableRow,
    TableSelectAll,
    TableHeader,
    TableSelectAllProps,
    DataTableHeader,
    DataTableCustomHeaderData,
    DataTableCustomHeaderProps,
    TableExpandHeader
} from "carbon-components-react";
import { ShapeOf, ReactAttr } from "carbon-components-react/typings/shared";
import { CustomProps } from "../../../custom-options-menu";
import {useTranslation} from "react-i18next";

type HeadersUIProps = {
    tableSelectAllProps: TableSelectAllProps,
    getHeaderProps<E extends object = ReactAttr>(
        data: ShapeOf<DataTableCustomHeaderData<DataTableHeader>, E>
    ): ShapeOf<DataTableCustomHeaderProps<DataTableHeader>, E>,
    headers: DataTableHeader[],
    withMenu?: CustomProps[],
    noSelection: boolean,
    isExpanded?: boolean
}

export type Header = {
    header: string;
    key: string;
}

const HeadersUI = ({isExpanded = false, noSelection, tableSelectAllProps, getHeaderProps, headers, withMenu}: HeadersUIProps) => {
    const {t} = useTranslation('translation', {useSuspense: false});

    return (
        <TableHead>
            <TableRow>
                {
                    isExpanded ?
                        <TableExpandHeader />
                        : <></>
                }
                {
                    !noSelection ?
                        <TableSelectAll {...tableSelectAllProps} />
                        : <></>
                }
                {headers.map((header: DataTableHeader) => (
                    <TableHeader {...getHeaderProps({header})} >
                        {t(header.header as string)}
                    </TableHeader>
                ))}
                {
                    withMenu !== undefined ?
                    <TableHeader></TableHeader>
                    : null
                }
            </TableRow>
        </TableHead>
    );

}

export default memo(HeadersUI);