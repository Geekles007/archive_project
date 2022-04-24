import {memo, useEffect} from "react";
import {InputProps} from "../../model/InputProps";
import * as React from "react";
import {useTranslation} from "react-i18next";
import {Column, TextArea} from "carbon-components-react";
import {GenericFormProps} from "../../model/GenericFormProps";
import {BaseProps} from "../../model/BaseProps";
import FromControlObject from "../combo-box";
import CustomNumberInput from "../custom-number-input";
import MultiSelector from "../mutiselect";
import CheckboxUI from "../checkbox";
import { CustomInput } from "../../../../style/CustomInput";
import {TYPEINPUT} from "../../constants";
import KeyBuilder from "../../../../utils/KeyBuilder";
import TimePickerUI from "../time-picker";

const InputBuilder = <V extends BaseProps>({input, form}: { input: InputProps<V>, form?: GenericFormProps }) => {

    const {t} = useTranslation("translation", {useSuspense: false});

    input = {
        ...input,
        helperText: t(input.helperText as string),
        invalidText: t(input.invalidText as string),
        labelText: t(input.labelText as string),
        placeholder: t(input.placeholder as string),
    }

    switch (input.type) {
        case TYPEINPUT.text:
            return (<Column className={"bx--col-padding"} lg={input.columns ?? 12} key={input.id + input.name}>
                <CustomInput
                    helperText={input.helperText}
                    id={input.id ?? KeyBuilder.build}
                    ref={form?.register}
                    defaultValue={input.defaultValue as string ?? null}
                    name={input.name}
                    invalidText={input.invalidText}
                    labelText={input.labelText}
                    placeholder={input.placeholder}
                    invalid={input?.invalid ? form?.errors[input?.invalid] !== undefined : false}
                />
            </Column>)
        case TYPEINPUT.textarea:
            return (<Column className={"bx--col-padding"} lg={input.columns ?? 12} key={input.id + input.name}>
                <TextArea
                    helperText={input.helperText}
                    id={input.id}
                    ref={form?.register}
                    defaultValue={input.defaultValue as string}
                    name={input.name}
                    invalidText={input.invalidText}
                    labelText={input.labelText}
                    placeholder={input.placeholder}
                    invalid={input?.invalid ? form?.errors[input?.invalid] !== undefined : false}
                />
            </Column>)
        case TYPEINPUT.time:
            return (<Column className={"bx--col-padding"} lg={input.columns ?? 12} key={input.id + input.name}>
                <TimePickerUI
                    helperText={input.helperText}
                    id={input.id}
                    defaultValue={input.defaultValue as string}
                    name={input.name}
                    invalidText={input.invalidText}
                    labelText={input.labelText}
                    placeholder={input.placeholder}
                    invalid={input?.invalidText}
                    form={form}
                />
            </Column>)
        case TYPEINPUT.comboBox:
            return (<Column className={"bx--col-padding"} lg={input.columns ?? 12} key={input.id + input.name}>
                <FromControlObject
                    helperText={input.helperText}
                    id={input.id}
                    defaultValue={input.defaultValue}
                    name={input.name}
                    invalidText={input.invalidText}
                    labelText={input.labelText}
                    placeholder={input.placeholder}
                    documentNode={input.documentNode}
                    client={input.client}
                    more={input.more}
                    variables={input.variables}
                    objectProperty={input.objectProperty}
                    form={form}
                />
            </Column>)
        case TYPEINPUT.multiselect:
            return (<Column className={"bx--col-padding"} lg={input.columns ?? 12} key={input.id + input.name}>
                <MultiSelector
                    helperText={input.helperText}
                    id={input.id}
                    defaultValue={input.defaultValue}
                    name={input.name}
                    invalidText={input.invalidText}
                    labelText={input.labelText}
                    placeholder={input.placeholder}
                    documentNode={input.documentNode}
                    client={input.client}
                    objectProperty={input.objectProperty}
                    form={form}
                />
            </Column>)
        case TYPEINPUT.number:
            return (<Column className={"bx--col-padding"} lg={input.columns ?? 12} key={input.id + input.name}>
                <CustomNumberInput
                    input={input}
                    former={form}
                />
            </Column>)
        case TYPEINPUT.checkbox:
            return (<Column className={"bx--col-padding"} lg={input.columns ?? 12} key={input.id + input.name}>
                <CheckboxUI
                    name={input.name}
                    labelText={input.labelText}
                    form={form}
                    id={input.id ?? KeyBuilder.build}
                    defaultValue={input.defaultValue}
                />
            </Column>)
        case TYPEINPUT.custom:
            return (<Column className={"bx--col-padding"} lg={input.columns ?? 12} key={input.id + input.name}>{input?.customElement?.(form) ?? <></>}</Column>);
    }

}

export default InputBuilder;
