import {gql} from "@apollo/client";
import {USER_FIELDS} from "../fragments/USER_FRAGMENT";

export const LOGIN_USER = gql`
    mutation LOGIN_USER($input: UserInput!) {
        loginUser (input: $input) {
            accessToken
            refreshToken
            verified
            expiredIn
        }
    }
`;

export const CREATE_EDIT_USER = gql`
    ${USER_FIELDS}
    mutation CREATE_USER($input: UserInput!, $photo: Upload) {
        createOrEditUser(input: $input, photo: $photo) {
            ...UserFields
        }
    }
`;

export const LOGOUT_USER = gql`
    mutation LOGOUT_USER {
        logoutUser
    }
`;
