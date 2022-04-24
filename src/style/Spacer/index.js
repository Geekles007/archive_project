"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Spacing = exports.Spacer = void 0;
var styled_components_1 = require("styled-components");
var Spacer = styled_components_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: ", ";\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n"], ["\n  width: ", ";\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n"])), (function (props) { return (props === null || props === void 0 ? void 0 : props.width) ? (props === null || props === void 0 ? void 0 : props.width) + "rem" : "2rem"; }));
exports.Spacer = Spacer;
var Spacing = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 20px;\n"], ["\n  height: 20px;\n"])));
exports.Spacing = Spacing;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map