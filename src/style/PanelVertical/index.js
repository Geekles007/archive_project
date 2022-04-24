"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PanelVertical = void 0;
var styled_components_1 = require("styled-components");
var InnerPanelV_1 = require("../InnerPanelV");
var PanelVertical = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background-color: ", ";\n  width: 100vw;\n  height: 100%;\n  position: relative;\n  \n  &.padded {\n    padding: 2em;\n  }\n\n  @media (max-width: 500px) {\n    width: 100%;\n  }\n\n  ", " {\n    margin-bottom: 20px;\n  }\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  background-color: ", ";\n  width: 100vw;\n  height: 100%;\n  position: relative;\n  \n  &.padded {\n    padding: 2em;\n  }\n\n  @media (max-width: 500px) {\n    width: 100%;\n  }\n\n  ", " {\n    margin-bottom: 20px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bgColor;
}, InnerPanelV_1.InnerPanelV);
exports.PanelVertical = PanelVertical;
var templateObject_1;
//# sourceMappingURL=index.js.map