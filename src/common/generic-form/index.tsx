import {memo, useEffect} from "react";
import * as React from "react";
import FormGenerator, {FormGeneratorProps} from "./components/form-generator";
import customUseForm from "./repositories/custom-use-form";
import * as Yup from "yup";
import Lazy from "yup/lib/Lazy";

interface BaseModel {
    id?: string;
}

export interface GenericFormUIProps<T extends BaseModel> {
    formOptions: FormGeneratorProps<T>,
    dataToEdit?: T,
    schema: Yup.AnyObjectSchema | Lazy<any, any>,
    description?: string;
}

const GenericFormUI = <V extends BaseModel>({formOptions, dataToEdit, schema, description}: GenericFormUIProps<V>) => {

    const form = customUseForm<V>({schema: schema});
    const options: FormGeneratorProps<V> = {
        ...formOptions,
        dataToEdit: dataToEdit,
        useForm: form,
        description: description
    }

    return (
        <>
            <FormGenerator<V> {
                ...options
            } />
        </>
    );

}

export default memo(GenericFormUI);