import * as React from 'react';
import {memo, useState} from 'react';
import {OperationVariables} from "@apollo/client/core";
import {DocumentNode} from "graphql";
import {useTranslation} from "react-i18next";
import {ApolloClient, useMutation} from "@apollo/client";
import {Button, InlineLoading, ModalBody, ModalFooter} from "carbon-components-react";
import RequestAlert from "../request-alert";
import {ISuccess} from "../../models/ISuccess";
import DialogStore from "../../stores/DialogStore";

interface BaseModelConfirm {
    id?: string
}

interface IOperationProps {
    variables: OperationVariables,
    node: DocumentNode
}

export interface GenericConfirmationProps {
    text?: string;
    list?: string[];
    variables?: any;
    firstKey?: string;
    secondKey?: string;
    secondId?: string | string[];
    operation: IOperationProps;
    loop?: boolean;
    refresh?: () => void;
    client?: ApolloClient<any>;
    additionals?: any;
    customValue?: (...args: any) => any;
    hasInput?: boolean;
    inputIsAnObject?: boolean;
}

const GenericConfirmation = ({
                                 list,
                                 operation,
                                 text,
                                 loop = true,
                                 variables,
                                 secondKey = "",
                                 secondId,
                                 firstKey = "",
                                 refresh,
                                 hasInput = true,
                                 customValue,
                                 additionals,
                                 inputIsAnObject = false
                             }: GenericConfirmationProps) => {
    const [succeed, setSucceed] = useState<ISuccess>({message: "operation-succeed"});
    const {t} = useTranslation('translation', {useSuspense: false});
    const [action, {loading, data, error}] = useMutation(operation?.node, operation?.variables);

    const onExecute = () => {
        loop ?
            list?.map((item: string) => {
                action({
                    variables: {
                        input: inputIsAnObject ? (typeof variables === "string" ? variables : {
                            [firstKey]: customValue ? customValue(item) : item,
                            [secondKey]: secondId,
                            ...additionals
                        }) : item
                    },
                }).then(results => {
                    setSucceed({
                        state: true,
                        message: "operation-succeed"
                    });
                    if (refresh) {
                        refresh();
                    }
                    setTimeout(() => {
                        setSucceed({
                            state: false,
                            message: "operation-succeed"
                        });
                        DialogStore.closeFromOutside();
                    }, 2000)
                }).catch(error => {
                    console.debug(error);
                });
            })
            : action({
                variables: hasInput ? {
                    input: variables
                } : variables,
            }).then(results => {
                setSucceed({
                    state: true,
                    message: "operation-succeed"
                });
                if (refresh) {
                    refresh();
                }
                setTimeout(() => {
                    setSucceed({
                        state: false,
                        message: "operation-succeed"
                    });
                    DialogStore.closeFromOutside();
                }, 2000)
            }).catch(error => {
                console.debug(error);
            });
    }

    return (
        <>
            <ModalBody className="rs-modal-body" hasScrollingContent={true}>
                <RequestAlert error={error} success={succeed} loading={loading}/>
                <span>{t(text as string)}</span>
            </ModalBody>

            <ModalFooter>
                <Button
                    kind="danger--ghost"
                    type="button"
                    onClick={() => DialogStore.closeFromOutside()}>
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
                                kind="primary"
                                type="button"
                                onClick={onExecute}>
                                {t('Yes')}
                            </Button>
                        )
                }
            </ModalFooter>
        </>
    );

}

export default memo(GenericConfirmation);
