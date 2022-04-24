import { IBase } from "./IBase";

const Debug: IBase = {
    URI_APP: "http://178.128.177.196/graphql",
}

const Production: IBase = {
    URI_APP: "http://178.128.177.196/graphql",
}

const USAGE = Debug;

export {
    Debug,
    Production,
    USAGE
}
