import { LOGIN_USER } from "../mutations/user";
import {MutationTuple, useMutation} from "@apollo/client";
import { ApiClient } from "../config/api-client";
import {ACCESS_TOKEN, CONNECTED_INSTANCE, PHONE_NUMBER} from "../../constants";

export const useAuth = <T, >(): MutationTuple<T, any> => {

    const connected = JSON.parse(localStorage.getItem(CONNECTED_INSTANCE) as string);

    return useMutation<any>(LOGIN_USER, {
            client: ApiClient,
            variables: {
                input: {}
            },
            context: {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem(connected.refreshToken ?? "") ?? ""
                }
            }
        },
    );
}