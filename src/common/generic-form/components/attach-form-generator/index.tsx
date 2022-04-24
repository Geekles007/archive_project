import {memo, useEffect, useState} from "react";
import * as React from "react"
import {observer} from "mobx-react";
import {useTranslation} from "react-i18next";
import {BaseMutationOptions, useMutation} from "@apollo/client";
import {DocumentNode} from "graphql";
import AttachFormGeneratorController from './controller';
import {Form, ModalBody, ModalFooter} from "carbon-components-react";
import {InputProps} from "../../model/InputProps";
import InputBuilder from "../input-builder";
import RequestAlert from "../../../request-alert";
import {BaseProps} from "../../model/BaseProps";
import ModalActionsUI from "../../../modal-actions";
import * as Yup from "yup";
import Lazy from "yup/lib/Lazy";
import customUseForm from "../../repositories/custom-use-form";
import {ISuccess} from "../../../../models/ISuccess";
import DialogStore from "../../../../stores/DialogStore";

export interface AttachFormGeneratorProps<T extends BaseProps> {
    node: DocumentNode,
    variables: BaseMutationOptions,
    dataToEdit?: T,
    schema: Yup.AnyObjectSchema | Lazy<any, any>,
    inputs: InputProps<T>[],
    description?: string;
    loop?: boolean;
    refresh?: any;
    listKey: string;
    firstKey: string;
    secondKey: string;
}

const AttachFormGenerator = <V extends BaseProps>({
                                                      node,
                                                      variables,
                                                      dataToEdit,
                                                      firstKey,
                                                      secondKey,
                                                      refresh,
                                                      loop = true,
                                                      listKey,
                                                      inputs,
                                                      schema,
                                                      description
                                                  }: AttachFormGeneratorProps<V>) => {

    const [formData, setFormData] = useState<V | null>(dataToEdit ?? null)
    const {t} = useTranslation('translation', {useSuspense: false});
    const [succeed, setSucceed] = React.useState<ISuccess>({message: "operation-succeed"});
    const [action, {loading, error}] = useMutation(node, variables);
    const ctrl = new AttachFormGeneratorController<V>();
    const form = customUseForm<V>({schema: schema});

    useEffect(() => {
        return function cleanup() {
            form?.reset();
            DialogStore.closeFromOutside();
            DialogStore.clear();
        }
    }, []);

    const onSubmit = async (data: any,) => {
        loop ? (data && data[listKey] ? data[listKey] as string[] : []).map((item: string) => {
            action({
                variables: {
                    input: {
                        [firstKey]: item,
                        [secondKey]: dataToEdit?.id ?? ""
                    }
                },
            }).then(results => {
                setSucceed({
                    state: true,
                    message: "operation-succeed"
                });
                form?.reset();
                setTimeout(() => {
                    setSucceed({
                        state: false,
                        message: "operation-succeed"
                    });
                    DialogStore.closeFromOutside();
                    setFormData(null)
                }, 1000)
            }).catch(error => {
                console.debug(error);
            })
        }) : action({
            variables: {
                input: {
                    [firstKey]: data[listKey],
                    [secondKey]: dataToEdit?.id ?? ""
                }
            },
        }).then(results => {
            setSucceed({
                state: true,
                message: "operation-succeed"
            });
            form?.reset();
            setTimeout(() => {
                setSucceed({
                    state: false,
                    message: "operation-succeed"
                });
                DialogStore.closeFromOutside();
                setFormData(null)
            }, 1000)
        }).catch(error => {
            console.debug(error);
        })
        if(refresh) {
            refresh();
        }
    }

    const onReset = () => {
        form?.reset();
        DialogStore.closeFromOutside()
    }

    return (
        <>
            <Form onSubmit={form?.handleSubmit(onSubmit, ctrl.onErrors)}>
                <RequestAlert error={error} success={succeed} loading={loading}/>
                <ModalBody>
                    <p className="bx--modal-header__heading">{t(description ?? "")}</p>
                    <br/>
                    {
                        inputs?.map((item: InputProps<V>) => {
                            return InputBuilder<V>({input: item, form: form});
                        })
                    }
                </ModalBody>
                <ModalFooter>
                    <ModalActionsUI reset={onReset} loading={loading} succeed={succeed}/>
                </ModalFooter>
            </Form>
        </>
    );

}

export default observer(AttachFormGenerator);
