import {BaseModel} from "./BaseModel";

export default interface IPermission extends BaseModel{
    name: string;
    description: string;
}
