import {FetchResult, MutationFunctionOptions, OperationVariables} from "@apollo/client";
import KeyBuilder from "../../../../../utils/KeyBuilder";
import {uploadUrl} from "../../../../../constants";

interface BaseModel {
    id?: string;
}

class GenericFormController<T extends BaseModel> {

    private actionMutation!: (options?: (MutationFunctionOptions<any, OperationVariables> | undefined)) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>;

    setActionMutation(actionMutation: (options?: (MutationFunctionOptions<any, OperationVariables> | undefined)) => Promise<FetchResult<any, Record<string, any>, Record<string, any>>>) {
        this.actionMutation = actionMutation;
    }

    onSubmit = (data: Partial<BaseModel>) => {
        return this.actionMutation({
            variables: {input: {...data}},
        })
    }

    onErrors = (data: any) => {
        // if (data)
        //     alert(JSON.stringify(data));
    }

    async uploadFile(url: string, name: string, file: File) {
        const formData = new FormData();
        formData.append(name, file);
        const res = await fetch(url,{
            method: "POST",
            body: formData
        }).then(
            (response: any) => response.json() // if the response is a JSON object
        ).then(
            (success: any) => success // Handle the success response object
        ).catch(
            (error: any) => console.log(error) // Handle the error response object
        );
        return res;
    }

    async fileUploader(files: any, fileNames: string[]) {
        let uploads: any | null = null;
        if(files) {
            if(fileNames && fileNames.length > 0) {
                for (const name of fileNames) {
                    const upload = await this.uploadFile(uploadUrl + "upload/" + KeyBuilder.build, "file", files[name]);
                    uploads = {
                        ...uploads,
                        [name]: (typeof upload === "string") ? upload : undefined
                    }
                }
                return uploads;
            }
        }
        return null;
    }

}

export default GenericFormController;