import React, { memo } from "react";
import { Pagination } from "carbon-components-react";

export type OnChangeProps = {
    page: number;
    pageSize: number;
}

const Paginator: React.FC<{
    perPage: number;
    pageNumber: number;
    totalItems?: number;
    pageSizes?: number[];
    onChange: (e: OnChangeProps) => void,
    itemsPerPageText?: string,
    itemText?: (min: number, max: number) => string,
    backwardText?: string,
    forwardText?: string,
    pageNumberText?: string
}> = ({perPage, pageNumber, pageSizes, totalItems, onChange, backwardText, forwardText, pageNumberText, itemText, itemsPerPageText}) => {
    return <div>
        <Pagination
            backwardText={backwardText}
            forwardText={forwardText}
            itemText={itemText}
            itemsPerPageText={itemsPerPageText}
            page={perPage}
            onChange={(e: OnChangeProps) => onChange(e)}
            pageNumberText={pageNumberText}
            pageSize={pageNumber}
            pageSizes={pageSizes || [
                10,
                20,
                30,
                40,
                50
            ]}
            totalItems={totalItems || 103}
        />
    </div>;
}

export default memo(Paginator);