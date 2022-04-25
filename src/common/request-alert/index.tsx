import {memo, useEffect, useState} from "react";
import * as React from 'react';
import { InlineNotification, InlineLoading } from "carbon-components-react";
import { useTranslation } from "react-i18next";
import ApolloErrorInterceptor from "../../services/ApolloErrorInterceptor";
import {v4 as uuidv4} from "uuid";
import {ISuccess} from "../../models/ISuccess";

const RequestAlert: React.FC<{
    loading?: boolean,
    error: any,
    success?: ISuccess
}> = ({loading, error, success}) => {
    const {t} = useTranslation("translation", {useSuspense: false});
    let answer: JSX.Element | boolean | null = null;
    const [errors, setErrors] = useState<ApolloErrorInterceptor>();

    useEffect(() => {
        if(error) {
            setErrors(new ApolloErrorInterceptor(error.graphQLErrors));
        }
    }, [error])

    if(loading) {
        answer = (
            <div>
                <InlineLoading description={t('loadingText')} />
            </div>
        )
    }

    if(errors) {
        answer = errors && errors.message.length > 0 && <>{errors.message.map((msg: string, i: number) => {
            return <InlineNotification
                kind={"error"}
                key={uuidv4()}
                subtitle={<span>{msg}</span>}
                title={'Ошибка'}/>
        })}</>;
    }

    if(success?.state) {
        answer = (
            <div>
                <InlineNotification
                    kind="success"
                    subtitle={<span>
                    {t(success?.message)}
                </span>}
                    title=""
                />
            </div>
        )
    }

    return <>
        {answer}
    </>
}

export default memo(RequestAlert);
