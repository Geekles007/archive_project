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
var react_1 = require("react");
var React = require("react");
var carbon_components_react_1 = require("carbon-components-react");
// @ts-ignore
var uuid_1 = require("uuid");
var react_i18next_1 = require("react-i18next");
var BatchActionsUI = function (_a) {
    var tableBatchActionsProps = _a.tableBatchActionsProps, actions = _a.actions, selectedRows = _a.selectedRows, printButtonRef = _a.printButtonRef;
    var shouldShowBatchActions = tableBatchActionsProps.shouldShowBatchActions;
    var t = react_i18next_1.useTranslation("translation", { useSuspense: false }).t;
    return (React.createElement(carbon_components_react_1.TableBatchActions, __assign({}, tableBatchActionsProps), actions === null || actions === void 0 ? void 0 : actions.map(function (item) {
        return (React.createElement(carbon_components_react_1.TableBatchAction, { key: uuid_1.v4(), tabIndex: shouldShowBatchActions ? 0 : -1, renderIcon: item.icon, onClick: function () { return item.func(selectedRows, printButtonRef); } }, t(item.title)));
    })));
};
exports.default = react_1.memo(BatchActionsUI);
//# sourceMappingURL=index.js.map