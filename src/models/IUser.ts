import { BaseModel } from "./BaseModel";

export interface IUser extends BaseModel{
    firstname?: string;
    lastname?: string;
    middlename?: string;
    email?: string;
    phone?: string;
    photo?: string;
}