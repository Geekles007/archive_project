import {memo, useState} from "react";
import * as React from 'react';
import {useTranslation} from "react-i18next";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import LoginAuthController from "./controller";
import {LoginPanel} from "./auth-style";
import LoginAuthForm from "./components/LoginAuthForm";
import ErrorBoundary from "../../../../common/error-boundary";
import {FormProps} from "../../../../models/FormProps";

interface LoginUIProps {

}

export const VIEW = {
    code: "code",
    number: "number"
}

const LoginModule: React.FC<LoginUIProps> = ({}) => {

    const {t} = useTranslation("translation", {useSuspense: false});
    const [view, setView] = useState(VIEW.number);
    const {register, handleSubmit, errors, setValue} = useForm<FormProps>({
        resolver: yupResolver(LoginAuthController.MySchema)
    });

    return <LoginPanel>
        <h3>{t('Login to your account.')}</h3>
        <hr />
        <ErrorBoundary>
            <LoginAuthForm register={register} setValue={setValue} handleSubmit={handleSubmit} setView={setView} errors={errors}/>
        </ErrorBoundary>
    </LoginPanel>;
};

export default memo(LoginModule);
