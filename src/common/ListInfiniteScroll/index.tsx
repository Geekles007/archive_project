import * as React from "react";
import {memo, useEffect, useRef, useState} from "react";


type ListInfiniteScrollProps = {
    onBottomHit: () => void;
    isLoading: boolean;
    hasMoreData: boolean;
    loadOnMount: boolean;
    children?: React.ReactNode;
    windowToObserve?: string;
};

function isBottom(ref: React.RefObject<HTMLDivElement>) {
    if (!ref.current) {
        return false;
    }

    return ref.current.getBoundingClientRect().bottom <= window.innerHeight;
}

const ListInfiniteScroll: React.FC<ListInfiniteScrollProps> = ({
                                                                   loadOnMount,
                                                                   isLoading,
                                                                   hasMoreData,
                                                                   onBottomHit,
                                                                   windowToObserve,
                                                                   children
                                                               }) => {
    const [initialLoad, setInitialLoad] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (loadOnMount && initialLoad) {
            (async () => {
                await onBottomHit();
                setInitialLoad(false);
            })();
        }
    }, [onBottomHit, loadOnMount, initialLoad]);

    useEffect(() => {
        const onScroll = () => {
            if (!isLoading && hasMoreData && isBottom(contentRef)) {
                onBottomHit();
            }
        };
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, [onBottomHit, isLoading, hasMoreData]);

    useEffect(() => {
        const onScroll = () => {
            if (!isLoading && hasMoreData && isBottom(contentRef)) {
                onBottomHit();
            }
        };
        if (windowToObserve) {
            document.getElementById(windowToObserve)?.addEventListener('scroll', onScroll);
            return () => document.getElementById(windowToObserve)?.removeEventListener('scroll', onScroll);
        }
    }, [onBottomHit, isLoading, hasMoreData, windowToObserve]);

    return <div ref={contentRef}>{children}</div>;
};

export default memo<ListInfiniteScrollProps>(ListInfiniteScroll);
