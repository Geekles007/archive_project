import {ChangeEvent, memo} from "react";
import * as React from 'react';
import {Checkbox, Toggle} from "carbon-components-react";
import {GenericFormProps} from "../../model/GenericFormProps";

interface CheckboxUIProps {
    name: string;
    labelText?: string;
    form?: GenericFormProps;
    id: string;
    defaultValue?: boolean;
}

const CheckboxUI: React.FC<CheckboxUIProps> = ({
                                name,
                                labelText,
                                defaultValue,
                                form,
                                id
                              }) => {

    form?.register({name: name as string}, {required: true});

    return (
        <>
            <Checkbox
                labelText={labelText as string}
                id={id}
                name={name}
                defaultChecked={defaultValue}
                onChange={(async (picked: ChangeEvent<HTMLInputElement>) => {
                    form?.setValue(name, picked);
;               })}
            />
        </>
    );

}

export default memo(CheckboxUI);