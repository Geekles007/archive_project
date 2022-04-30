import {BaseModel} from "./BaseModel";
import {IFile} from "./IFile";

export interface IFolder extends BaseModel {
    name?: string;
    files?: Array<IFile>
}
