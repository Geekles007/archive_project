import {USER_FIELDS} from "../fragments/USER_FRAGMENT";
import {gql} from "@apollo/client";

export const RETRIEVE_USERS = gql`
    ${USER_FIELDS}
    query RETRIEVE_USERS($first: Int!, $after: ID) {
        retrieveUsers(first: $first, after: $after) {
            edges{
                node {
                    ...UserFields
                }
            }
        }
    }
`;

export const SEARCH_USERS = gql`
    ${USER_FIELDS}
    query SEARCH_USERS($input: String!, $first: Int!, $after: ID) {
        searchUsers(input: $input, first: $first, after: $after) {
            edges{
                node {
                    ...UserFields
                }
            }
        }
    }
`;

export const FIND_USER = gql`
    ${USER_FIELDS}
    query FIND_USER($input: ID!) {
        findUser(input: $input) {
            ...UserFields
        }
    }
`;