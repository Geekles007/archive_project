import {ChangeEvent, memo} from 'react';
import * as React from "react";
import {InputProps} from "../../model/InputProps";
import {BaseProps} from "../../model/BaseProps";
import {SelectItem, TimePicker, TimePickerSelect} from "carbon-components-react";
import KeyBuilder from "../../../../utils/KeyBuilder";
import {DateTime} from "luxon";

const TimePickerUI = <V extends BaseProps>({labelText, invalid, invalidText, form, name, defaultValue}: InputProps<V>) => {

    form?.register({name: name}, {required: false});

    const onChange = (evt: ChangeEvent<HTMLInputElement>) => {
        form?.setValue(name, DateTime.fromISO(evt.target.value ?? "").toISOTime());
    }

    return <>
        <TimePicker
            pattern={"*"}
            id={KeyBuilder.build}
            defaultValue={defaultValue}
            invalid={invalid ? form?.errors[invalid] !== undefined : false}
            invalidText={invalidText}
            labelText={labelText}
            onChange={onChange}>
        </TimePicker>
    </>

}

export default memo(TimePickerUI);