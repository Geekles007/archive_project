import {memo} from "react";
import * as React from 'react';
import {
    TableRow,
    TableBody,
    TableSelectRow,
    TableCell,
    DataTableRow,
    DataTableCustomSelectionData,
    DataTableCustomSelectionProps,
    DataTableCell,
    DenormalizedRow,
    DataTableCustomRowData,
    DataTableCustomRowProps,
    TableExpandRow
} from "carbon-components-react";
import {ShapeOf, ReactAttr} from "carbon-components-react/typings/shared";
import CustomOptionsMenu, {CustomProps} from "../../../custom-options-menu";
import styled from "styled-components";
import {gray70, gray90} from "@carbon/colors";
import {v4 as uuidv4} from "uuid";

type BodyUIProps = {
    rows: ReadonlyArray<DenormalizedRow>,
    getSelectionProps<E extends object = {}>(
        data?: ShapeOf<DataTableCustomSelectionData, E>
    ): ShapeOf<DataTableCustomSelectionProps<DataTableRow>, E> | ShapeOf<DataTableCustomSelectionProps<never>, E>,
    getRowProps<E extends object = ReactAttr<HTMLTableRowElement>>(
        data: ShapeOf<DataTableCustomRowData, E>
    ): ShapeOf<DataTableCustomRowProps, E>,
    selectedRows: readonly DenormalizedRow[],
    menus?: CustomProps[],
    noSelection: boolean,
    isExpanded?: boolean,
    selectedRow?: string;
    type?: string,
    expandedMenus?: CustomProps[],
    addons?: JSX.Element,
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
    onSelect?: (e: any, selectedRow: DenormalizedRow) => void;
    excludeClickOn?: Map<string, string>;
}

const TableBodyWrapper = styled(TableBody)`
  .pointer {
    cursor: pointer !important;
  }

  .selected {
    background-color: ${gray70} !important;
  }
`;

const BodyUI = ({
                    rows,
                    getSelectionProps,
                    getRowProps,
                    menus,
                    noSelection,
                    isExpanded,
                    type = "all",
                    expandedMenus = [],
                    addons,
                    showDetails,
                    selectedRow,
                    expandedBody,
                    onSelect,
                    excludeClickOn,
                    selectedRows
                }: BodyUIProps) => {

    return (
        <>
            <TableBodyWrapper>
                {
                    rows.map((row: DenormalizedRow, i: number) => (
                        !isExpanded ?
                            <TableRow key={i + type + i} >
                                {
                                    !noSelection ?
                                        <TableSelectRow onChange={onSelect ? (e) => onSelect(e, row) : undefined} key={uuidv4() + type + i}
                                                        className={selectedRow === row?.id ? "selected" : ""} {...getSelectionProps({row})} />
                                        : <></>
                                }
                                {row.cells.map((cell: DataTableCell) => (
                                    (showDetails  && (!excludeClickOn?.has(cell.info?.header ?? "") ?? false)) ?
                                        <TableCell className={`pointer ${selectedRow === row?.id ? "selected" : ""}`}
                                                   onClick={() => showDetails(row)}
                                                   key={cell.id}>{cell.value}</TableCell>
                                        :
                                        <TableCell className={`${selectedRow === row?.id ? "selected" : ""}`}
                                                   key={cell.id}>{cell.value}</TableCell>
                                ))}
                                {
                                    menus !== undefined ?
                                        <TableCell
                                            className={`bx--table-column-menu ${selectedRow === row?.id ? "selected" : ""}`}>
                                            {
                                                menus.length > 0 ?
                                                    <CustomOptionsMenu row={row} flipped={true} menus={menus}/> : null
                                            }
                                        </TableCell> : null
                                }
                            </TableRow>
                            :
                            (
                                <React.Fragment key={row.id + type + (new Date()).getFullYear()}>
                                    <TableExpandRow {...getRowProps({row})}>
                                        {
                                            !noSelection ?
                                                <TableSelectRow
                                                                key={uuidv4() + type + i} {...getSelectionProps({row})} />
                                                : <></>
                                        }
                                        {
                                            row.cells.map((cell) => (
                                                (showDetails  && (!excludeClickOn?.has(cell.info?.header ?? "") ?? false)) ?
                                                    <TableCell className={"pointer"} onClick={() => showDetails(row)}
                                                               key={cell.id}>{cell.value}</TableCell>
                                                    :
                                                    <TableCell key={cell.id}>{cell.value}</TableCell>
                                            ))
                                        }
                                        {
                                            menus !== undefined ?
                                                <TableCell className={"bx--table-column-menu"}>
                                                    <CustomOptionsMenu row={row} flipped={true} menus={menus}/>
                                                </TableCell> : null
                                        }
                                    </TableExpandRow>
                                    {row.isExpanded && expandedBody ? (
                                        expandedBody("data", row, noSelection, row, getSelectionProps, expandedMenus)
                                    ) : null}
                                </React.Fragment>

                            )
                    ))
                }
                {addons}
            </TableBodyWrapper>
        </>
    );

}

export default memo(BodyUI);
