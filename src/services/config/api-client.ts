import {USAGE} from "../../models/Environment";
import Client from "./client";

const ApiClient = (new Client(USAGE.URI_APP)).getClient;

export {
    ApiClient
}