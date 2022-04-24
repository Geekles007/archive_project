import React, {memo} from 'react';
import {Button, InlineLoading, ModalBody, ModalFooter} from "carbon-components-react";
import {useTranslation} from "react-i18next";
import DialogStore from "../../stores/DialogStore";
import {useHistory} from 'react-router-dom';
import {useMutation} from "@apollo/client";
import {LOGOUT_USER} from "../../services/mutations/user";
import {ISuccess} from "../../models/ISuccess";

interface LogoutModuleUIProps {
}

const LogoutModuleUI: React.FC<LogoutModuleUIProps> = ({}) => {
    const [succeed, setSucceed] = React.useState<ISuccess>({message: "goodbye-message"});
    const {t} = useTranslation('translation', {useSuspense: false});
    const history = useHistory();
    const [logoutUser, { loading, error }] = useMutation(LOGOUT_USER);

    const submitLogout = () => {
        logoutUser().then((result) => {
            if(result.data) {
                localStorage.clear();
                DialogStore.setOpen(false);
                window.location.reload();
            }
        }).catch(error => {
            console.debug(error);
        })
    }

    return (
        <>
            <ModalBody className="rs-modal-body">
                <h3>{t('logout-confirmation-message')}</h3>

            </ModalBody>

            <ModalFooter>
                <Button
                    kind="secondary"
                    type="reset"
                    onClick={() => DialogStore.setOpen(false)}>
                    {t('No')}
                </Button>
                {
                    loading || succeed.state ?
                        <InlineLoading
                            style={{ marginLeft: '1rem' }}
                            description={loading ? t('loading-text') : t('goodbye-message')}
                            status={succeed.state ? 'finished' : 'active'}
                            aria-live={"polite"}
                        /> : (
                            <Button
                                kind="primary"
                                type="submit" onClick={submitLogout}>
                                {t('Yes')}
                            </Button>
                        )
                }
            </ModalFooter>
        </>
    );

}

export default memo(LogoutModuleUI);
