"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var AttachFormGeneratorController = /** @class */ (function () {
    function AttachFormGeneratorController() {
        var _this = this;
        this.onSubmit = function (data) {
            return _this.actionMutation({
                variables: { input: __assign({}, data) },
            });
        };
        this.onErrors = function (data) {
            // if (data)
            //     alert(JSON.stringify(data));
        };
    }
    AttachFormGeneratorController.prototype.setActionMutation = function (actionMutation) {
        this.actionMutation = actionMutation;
    };
    return AttachFormGeneratorController;
}());
exports.default = AttachFormGeneratorController;
//# sourceMappingURL=index.js.map