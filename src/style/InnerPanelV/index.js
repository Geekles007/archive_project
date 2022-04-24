"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InnerPanelV = void 0;
var styled_components_1 = require("styled-components");
var InnerPanelV = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  max-width: ", ";\n  padding-left: ", ";\n  \n  h3{\n    display: flex;\n    align-items: center;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n  max-width: ", ";\n  padding-left: ", ";\n  \n  h3{\n    display: flex;\n    align-items: center;\n  }\n"])), (function (props) { return (props === null || props === void 0 ? void 0 : props.doubleWidth) ? '800px' : '400px'; }), (function (props) { return props.paddingLeft + "px"; }));
exports.InnerPanelV = InnerPanelV;
var templateObject_1;
//# sourceMappingURL=index.js.map