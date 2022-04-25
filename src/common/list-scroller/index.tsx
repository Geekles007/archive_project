import React, {memo} from "react";
import styled from "styled-components";
import ListInfiniteScroll from "../ListInfiniteScroll";
import useInfiniteScroll from "../use-infinite-scroll";

const ListScrollerWrapper = styled.div`

`;

interface ListScrollerProps {
    fetchMore: any;
    retrieveAttributes?: any;
    count: number;
    data: Array<any>;
    refetch: any;
    render: (refresher: string, data: any) => JSX.Element;
}

const ListScroller = ({fetchMore, count, data, refetch, retrieveAttributes, render}: ListScrollerProps) => {

    const {
        hasMore,
        loading,
        loadMore,
        refresher,
        income
    } = useInfiniteScroll({
        fetchMore: fetchMore,
        retrieveAttributes: retrieveAttributes,
        count: count,
        data: data
    });

    return (
        <ListInfiniteScroll hasMoreData={hasMore}
                            isLoading={loading}
                            onBottomHit={loadMore}
                            loadOnMount={false}>
            {render(refresher, income)}
        </ListInfiniteScroll>
    );

}

export default memo(ListScroller);
