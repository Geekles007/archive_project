"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_hook_form_1 = require("react-hook-form");
var yup_1 = require("@hookform/resolvers/yup");
var customUseForm = function (_a) {
    var schema = _a.schema;
    var form = react_hook_form_1.useForm({
        resolver: yup_1.yupResolver(schema)
    });
    return {
        errors: form.errors,
        reset: form.reset,
        handleSubmit: form.handleSubmit,
        register: form.register,
        setValue: form.setValue,
        setError: form.setError
    };
};
exports.default = customUseForm;
//# sourceMappingURL=index.js.map