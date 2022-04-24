import {memo, useEffect, useMemo, useState} from "react";
import * as React from 'react';
import {first} from "lodash";
import {ApolloClient, useQuery} from "@apollo/client";
import {DocumentNode} from "graphql";

interface BaseQueryModel {
    id?: string;
}

interface GenericQueryAllProps {
    node: DocumentNode;
    count?: number;
    client?: ApolloClient<any>,
    variables?: any
}

const GenericQueryAll = <T extends BaseQueryModel>({node, count = 100, client, variables}: GenericQueryAllProps) => {

    const obj = Object.assign({
        first: count
    }, variables);

    const outcome = useQuery(node, {
        client: client,
        variables: obj
    })
    const values = useMemo(() => new Map<string, any>(), [])

    const _key = first(Object.keys(outcome.data ?? {}));

    if (_key) {
        if ((outcome.data as any)[_key]?.edges){
            (outcome.data as any)[_key]?.edges?.forEach((item: any) => {
                item?.node?.id && values.set(item.node?.id, item?.node)
            });
        }
        else
            return {values: (outcome.data as any)[_key], outcome};
    }

    return {values, outcome};

}

export default (GenericQueryAll);