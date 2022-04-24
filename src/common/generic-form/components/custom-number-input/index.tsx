import {memo} from "react";
import * as React from "react";
import {InputProps} from "../../model/InputProps";
import {BaseProps} from "../../model/BaseProps";
import {NumberInput} from "carbon-components-react";
import {GenericFormProps} from "../../model/GenericFormProps";

interface CustomNumberInputProps<T extends BaseProps> {
    input: InputProps<T>,
    former?: GenericFormProps
}

const CustomNumberInput = <V extends BaseProps>({input, former}: CustomNumberInputProps<V>) => {

    former?.register({name: input.name}, )

    return (
        <>
            <NumberInput
                helperText={input.helperText}
                id={input.id as string}
                value={parseInt((input.defaultValue ?? 1) as string)}
                onChange={((event: any) => {
                    former?.setValue(input.name, event?.target?.value ?? 1);
                })}
                name={input.name}
                invalidText={input.invalidText}
                label={input.labelText}
                placeholder={input.placeholder}
                max={input.max}
                min={input.min}
                step={input.step}
                invalid={input?.invalid ? former?.errors[input?.invalid] !== undefined : false }
            />
        </>
    );

}

export default memo(CustomNumberInput);