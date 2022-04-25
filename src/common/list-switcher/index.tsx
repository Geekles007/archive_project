
import {memo} from 'react';
import * as React from "react";
import {DataTableSkeleton, InlineLoading} from "carbon-components-react";
import {useTranslation} from "react-i18next";
import ListScroller from "../list-scroller";
import EmptyStateUI from "../empty-state";

interface ListSwitcherProps {
    fetchMore: any;
    retrieveAttributes?: any;
    count: number;
    data: any;
    refetch: any;
    loading: boolean;
    render: (refresher: string, data: any) => JSX.Element;
}

const ListSwitcher = ({fetchMore, retrieveAttributes, count, data, refetch, loading, render}: ListSwitcherProps) => {

    const {t} = useTranslation("translation", {useSuspense: false});

    if (loading) return <InlineLoading description={"loadingText"} />;
    if (!data) return <EmptyStateUI title={t("nothingFoundText")} action={refetch ? () => refetch() : undefined} actionTitle={t("refreshText")} />;

    const income = data?.[retrieveAttributes]?.edges.map((input: any) => input.node) ?? [];

    return (
        <>
            <ListScroller
                refetch={refetch}
                fetchMore={fetchMore}
                retrieveAttributes={retrieveAttributes}
                data={income}
                render={render}
                count={count}/>
        </>
    );

}

export default memo(ListSwitcher);
