
import {ApolloClient, DocumentNode} from "@apollo/client";
import {GenericFormProps} from "./GenericFormProps";

interface BaseModel {
    id?: string;
}

export interface InputProps<T extends BaseModel> {
    type?: string;
    helperText?: string;
    id?: string;
    defaultValue?: any;
    name: string;
    invalidText?: string;
    labelText: string;
    placeholder?: string;
    invalid?: string;
    documentNode?: DocumentNode;
    objectProperty?: string;
    form?: GenericFormProps,
    client?: ApolloClient<any>;
    min?: number;
    max?: number;
    step?: number;
    more?: string;
    columns?: number;
    variables?: any;
    defineDefaultValue?: (arg: any) => any;
    customElement?: (form: any) => any;
}