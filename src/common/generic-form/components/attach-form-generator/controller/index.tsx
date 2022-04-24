import {FetchResult, MutationFunctionOptions, OperationVariables} from "@apollo/client";

interface BaseModel {
    id?: string;
}

class AttachFormGeneratorController<T extends BaseModel> {

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

}

export default AttachFormGeneratorController;