import {memo, useEffect, useState} from 'react';
import * as React from "react";
import {ISuccess} from "../../models/ISuccess";
import {useTranslation} from "react-i18next";
import {useMutation} from "@apollo/client";
import DialogStore from "../../stores/DialogStore";
import {Button, InlineLoading, ModalBody, ModalFooter} from "carbon-components-react";
import {useAuth} from "../../services/dao/auth";
import {IConnected} from "../login/children/login-form/model/IConnected";
import {ACCESS_TOKEN, CONNECTED_INSTANCE, PHONE_NUMBER} from "../../constants";
import {LOGOUT_USER} from "../../services/mutations/user";

interface TokenRefresherProps {

}

const TokenRefresher = ({}: TokenRefresherProps) => {

    const [succeed, setSucceed] = useState<ISuccess>({message: "operation-succeed"});
    const {t} = useTranslation('translation', {useSuspense: false});
    const [action, {loading, data, error}] = useAuth();
    const [logoutUser] = useMutation(LOGOUT_USER);

    useEffect(() => {
        return function cleanup() {
            DialogStore.clear();
        }
    }, []);

    const submitLogout = () => {
        logoutUser().then((result) => {
            if (result.data) {
                localStorage.clear();
                DialogStore.closeFromOutside();
                window.location.reload();
            }
        }).catch(error => {
            console.debug(error);
        })
    }

    const onRefresh = async () => {
        const connected = await JSON.parse(localStorage.getItem(CONNECTED_INSTANCE) as string ?? "");
        await localStorage.setItem(ACCESS_TOKEN, connected?.refreshToken ?? "");
        action().then((result: any) => {
            setSucceed({
                state: true,
                message: "Operation done successfully."
            });
            const currentUser: IConnected = {
                accessToken: result.data?.loginAgent?.accessToken,
                refreshToken: result.data?.loginAgent?.refreshToken,
                expiredIn: result.data?.loginAgent?.expiredIn ?? 0,
            };
            localStorage.setItem(ACCESS_TOKEN, currentUser.accessToken);
            localStorage.setItem(PHONE_NUMBER, localStorage.getItem(PHONE_NUMBER) ?? "");
            localStorage.setItem(CONNECTED_INSTANCE, JSON.stringify({
                ...currentUser,
                phoneNumber: localStorage.getItem(PHONE_NUMBER) ?? ""
            }));
            setTimeout(() => {
                setSucceed({
                    state: false,
                    message: "Operation done successfully."
                });
                window.location.reload();
            }, 1000)
            DialogStore.closeFromOutside();
        }).catch(error => {
            console.debug(error);
        });
    }

    return (
        <>
            <ModalBody className="rs-modal-body">
                <span>{t("Are you always there or you want to logout?")}</span>
            </ModalBody>

            <ModalFooter>
                <Button
                    kind="danger--ghost"
                    type="button"
                    onClick={submitLogout}>
                    {t('No, just logout')}
                </Button>
                {
                    loading || succeed.state ?
                        <InlineLoading
                            style={{marginLeft: '1rem'}}
                            description={loading ? t('Loading...') : t('Done')}
                            status={succeed.state ? 'finished' : 'active'}
                            aria-live={"polite"}
                        /> : (
                            <Button
                                kind="primary"
                                type="button"
                                onClick={onRefresh}>
                                {t('Yes, stay connected')}
                            </Button>
                        )
                }
            </ModalFooter>
        </>
    )

}

export default memo(TokenRefresher);
