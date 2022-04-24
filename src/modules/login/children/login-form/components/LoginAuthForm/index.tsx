import * as React from "react";
import {useEffect} from "react";
import {Button, Tooltip} from "carbon-components-react";
import {ArrowRight32} from "@carbon/icons-react";
import {useTranslation} from "react-i18next";

import {useMutation} from "@apollo/client";
import {observer} from "mobx-react";
import {useHistory} from "react-router-dom";
import RequestAlert from "../../../../../../common/request-alert";
import {LoginAuthProps} from "../../model/LoginAuthProps";
import KeyBuilder from "../../../../../../utils/KeyBuilder";
import {ISuccess} from "../../../../../../models/ISuccess";
import {ApiClient} from "../../../../../../services/config/api-client";
import LoginAuthController from "./../../controller";
import {CustomForm, TopRightLink} from "../../auth-style";
import {FormControl} from "../../../../../../style/FormControl";
import {CustomInput} from "../../../../../../style/CustomInput";
import {LOGIN_USER} from "../../../../../../services/mutations/user";
import {ACCESS_TOKEN, CONNECTED_INSTANCE, PHONE_NUMBER, ROUTES} from "../../../../../../constants";
import {IConnected} from "../../model/IConnected";
import { digestMessage } from "../../../../../../utils/Hashing";

interface LoginAuthFormProps {
    register: any,
    handleSubmit: any,
    errors: any;
    setView: (view: any) => void;
    setValue: any
}

const LoginAuthForm: React.FC<LoginAuthFormProps> = ({register, handleSubmit, errors, setValue}) => {
    const {t} = useTranslation("translation", {useSuspense: false});
    const [succeed, setSucceed] = React.useState<ISuccess>({message: "login-succeed"});
    const history = useHistory();
    const [loginUser, {loading, error}] = useMutation(LOGIN_USER, {
        client: ApiClient,
        context: {
            headers: {
                "X-Method": "login"
            }
        }
    });

    // useEffect(() => {
    //     // @ts-ignore
    //     LoginAuthController.setLogin(loginUser);
    // }, [])

    const onSubmit = (data: Partial<LoginAuthProps>) => {
        digestMessage(data.password || "").then((value: any) => {
            loginUser({
                variables: {
                    input: {
                        username: data?.login ?? "",
                        password: value
                    }
                }
            }).then((result) => {
                console.log(result);

                const currentUser: IConnected = {
                    accessToken: result.data?.loginAgent?.accessToken,
                    refreshToken: result.data?.loginAgent?.refreshToken,
                    expiredIn: result.data?.loginAgent?.expiredIn ?? 0,
                };

                setSucceed({
                    state: true,
                    message: "login-succeed"
                });

                localStorage.setItem(ACCESS_TOKEN, currentUser.accessToken);
                localStorage.setItem(PHONE_NUMBER, data?.login ?? "");
                localStorage.setItem(CONNECTED_INSTANCE, JSON.stringify({
                    ...currentUser,
                    phoneNumber: data?.login ?? ""
                }));

                history.go(0);
            }).catch(error => {
                console.debug(error);
            })
        });
    }

    return <CustomForm onSubmit={handleSubmit(onSubmit, LoginAuthController.onErrors)}>
        <RequestAlert error={error} success={succeed} loading={loading}/>
        <FormControl>
            <CustomInput
                id={KeyBuilder.build}
                ref={register}
                name={"login"}
                invalid={errors.login !== undefined}
                invalidText={t('required-field-text')}
                labelText={
                    <Tooltip
                        direction="right"
                        tabIndex={0}
                        triggerText={t("Login")}
                    >
                        <p>
                            Enter your username correctly please.
                        </p>
                    </Tooltip>
                }
                placeholder={t('Enter your email, phone number or username') as string}/>
        </FormControl>
        <FormControl>
            <TopRightLink to={ROUTES.recovery}>
                {t('Forgot password?')}
            </TopRightLink>
            <CustomInput.PasswordInput
                helperText={t("It should contain at least 4 characters")}
                id={KeyBuilder.build}
                ref={register}
                invalidText={t('Your password is invalid.')}
                invalid={errors.password !== undefined}
                name={"password"}
                labelText={t('Password') as string}
                hidePasswordLabel={t('Hide password')}
                showPasswordLabel={t('Show password')}
                placeholder={t('Enter your password') as string}/>
        </FormControl>
        <Button
            kind="primary"
            tabIndex={0}
            renderIcon={ArrowRight32}
            iconDescription="Next"
            type="submit">
            {t('Login')}
        </Button>
    </CustomForm>
};

export default observer(LoginAuthForm);
