import * as yup from "yup";
import {FetchResult, MutationFunctionOptions, OperationVariables} from "@apollo/client";
import {LoginAuthProps} from "../model/LoginAuthProps";


class LoginAuthController {
    private login!: (options?: (MutationFunctionOptions<any, OperationVariables> | undefined)) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;

    private readonly LOGIN_FIELDS: LoginAuthProps = {
        login: 'login',
        password: 'password',
    };

    get fields() {
        return this.LOGIN_FIELDS;
    }

    get MySchema() {
        return yup.object().shape({
            login: yup.string(),
            password: yup.string().min(4)
        });
    }

    setLogin = (f: (options?: (MutationFunctionOptions<any, OperationVariables> | undefined)) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>) => {
        this.login = f;
    }

    onSubmit = (data: Partial<LoginAuthProps>) => {
        const input = {
            login: data.login,
        }
        return this.login({
            variables: input,
        })
    }

    onErrors = (data: any) => {
        if (data)
            console.log(JSON.stringify(data));
    }

}


export default new LoginAuthController();
