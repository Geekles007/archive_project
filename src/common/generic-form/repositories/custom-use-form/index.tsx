import * as Yup from "yup";
import Lazy from "yup/lib/Lazy";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";

interface BaseModel {
    id?: string;
}

const customUseForm = <V extends BaseModel>({schema}: { schema: Yup.AnyObjectSchema | Lazy<any, any> }) => {

    const form = useForm({
        resolver: yupResolver(schema)
    });

    return {
        errors: form.errors,
        reset: form.reset,
        handleSubmit: form.handleSubmit,
        register: form.register,
        setValue: form.setValue,
        setError: form.setError
    }

}

export default customUseForm;