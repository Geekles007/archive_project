export interface IConnection<T> {
    [key: string]: {
        data: Array<T>,
        count?: number;
    }
}