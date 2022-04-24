export const ACCESS_TOKEN: string = "token";
export const REFRESH_TOKEN: string = "refresh_token";
export const EXPIRED_IN: string = "expired_in";
export const PHONE_NUMBER: string = "phone_number";
export const CONNECTED_INSTANCE: string = "connected";
export const DATE_FORMAT = "ff";
export const RETRIEVES_COUNT: number = 10;
export const uploadUrl = "http://178.128.177.196/files/images/";
export const ROUTES = {
    login: "auth",
    createUser: "create-user",
    main: "main",
    recovery: "recovery"
}

export const containerRoutes = {
    DASHBOARD_ROUTE: "main",
}

export const routeNameMatcher: {[arg: string]: string} = {
    "/": "Dashboard",
    "/main": "Dashboard"
}
