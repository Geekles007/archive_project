export interface IConnected {
    accessToken: string;
    refreshToken: string;
    verified?: string;
    expiredIn: number;
}