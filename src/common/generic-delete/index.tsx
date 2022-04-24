import {memo, useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import * as React from 'react';
import {useMutation} from "@apollo/client";
import {OperationVariables} from "@apollo/client/core";
import {DocumentNode} from "graphql";
import {Button, InlineLoading, ModalBody, ModalFooter} from "carbon-components-react";
import {ISuccess} from "../../models/ISuccess";
import DialogStore from "../../stores/DialogStore";

interface IOperationProps {
    variables: OperationVariables,
    node: DocumentNode
}

export interface GenericDeleteProps<V extends BaseModelDelete> {
    text?: string;
    list?: V[] | string[];
    refetch?: any;
    operation: IOperationProps;
}

interface BaseModelDelete {
    id?: string
}

const GenericDelete = <T extends BaseModelDelete>({
                                                      list, operation, text, refetch
                                                  }: GenericDeleteProps<T>) => {
    const [succeed, setSucceed] = useState<ISuccess>({message: "operation-succeed"});
    const {t} = useTranslation('translation', {useSuspense: false});
    const [action, {loading, data, error}] = useMutation(operation?.node, {
        notifyOnNetworkStatusChange: true,
        ...operation?.variables
    });

    useEffect(() => {
        return function cleanup() {
            DialogStore.clear();
        }
    }, []);

    const onDelete = () => {
        action({
            variables: {ids: list},
        }).then(results => {
            setSucceed({
                state: true,
                message: "operation-succeed"
            });
            setTimeout(() => {
                setSucceed({
                    state: false,
                    message: "operation-succeed"
                });
                if(refetch) {
                    console.debug("refetch done.")
                    refetch();
                }
            }, 1000)
            DialogStore.closeFromOutside();
        }).catch(error => {
            console.debug(error);
        });
    }

    return (
        <>
            <ModalBody className="rs-modal-body">
                <span>{t(text as string)}</span>
            </ModalBody>

            <ModalFooter>
                <Button
                    kind="secondary"
                    type="button"
                    onClick={DialogStore.closeFromOutside}>
                    {t('No')}
                </Button>
                {
                    loading || succeed.state ?
                        <InlineLoading
                            style={{marginLeft: '1rem'}}
                            description={loading ? t('loading-text') : t('operation-finished')}
                            status={succeed.state ? 'finished' : 'active'}
                            aria-live={"polite"}
                        /> : (
                            <Button
                                kind="danger"
                                type="button"
                                onClick={onDelete}>
                                {t('Yes')}
                            </Button>
                        )
                }
            </ModalFooter>
        </>
    );
}

export default (memo(GenericDelete));
