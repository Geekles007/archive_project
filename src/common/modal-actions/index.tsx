import {Button, InlineLoading} from "carbon-components-react";
import * as React from 'react';
import {useTranslation} from "react-i18next";
import {memo} from "react";
import {ISuccess} from "../../models/ISuccess";

interface ModalActionsUIProps {
    reset?: () => void;
    loading: boolean;
    succeed: ISuccess;
}

const ModalActionsUI: React.FC<ModalActionsUIProps> = ({loading, reset, succeed}) => {
    const {t} = useTranslation('translation', {useSuspense: false})

    return (
        <>
            <Button
                kind="danger--ghost"
                size={"field"}
                onClick={reset}
                disabled={loading}
                type="reset">
                {t("Cancel")}
            </Button>
            {
                loading || succeed.state ?
                    <InlineLoading
                        style={{ marginLeft: '1rem' }}
                        description={loading ? t("Loading...") : t("Done.")}
                        status={succeed.state ? 'finished' : 'active'}
                        aria-live={"polite"}
                    /> : (
                        <Button
                            kind="primary"
                            size={"field"}
                            type="submit">
                            {t("Save")}
                        </Button>
                    )
            }
        </>
    );

}

export default memo(ModalActionsUI);
