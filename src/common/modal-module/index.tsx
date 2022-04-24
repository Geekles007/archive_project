import React, {memo} from "react"
import {ModalHeader, ComposedModal, ModalBody} from "carbon-components-react";
import {inject, observer} from "mobx-react";
import {ModalContainer} from './modal-style/default';
import {useTranslation} from "react-i18next";
import DialogStore from "../../stores/DialogStore";

const ModalUI: React.FC<{}> = observer(() => {
    const {t} = useTranslation('translation', {useSuspense: false});

    const closeModal = () => {
        DialogStore.setOpen(false);
        DialogStore.clear();
    }

    return (
        <ModalContainer>
            <ComposedModal size={DialogStore.options.size} open={DialogStore.open} onClose={closeModal}>
                <ModalHeader
                    label={(typeof DialogStore.options.title === "string") ? t(DialogStore.options.title as string) : DialogStore.options.title}/>
                {DialogStore.options.content}
            </ComposedModal>
        </ModalContainer>
    );
})

export default (inject('DialogStore'))(memo(ModalUI));
