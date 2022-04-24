"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimplePanelHorizontal = exports.PanelHorizontal = void 0;
var styled_components_1 = require("styled-components");
var FormControl_1 = require("../FormControl");
var SimplePanelHorizontal = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: stretch;\n  width: ", ";\n"], ["\n  display: flex;\n  align-items: stretch;\n  width: ", ";\n"])), function (p) { return p.maxWidth ? p.maxWidth + "%" : '100%'; });
exports.SimplePanelHorizontal = SimplePanelHorizontal;
var PanelHorizontal = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  align-items: stretch;\n  column-gap: 20px;\n  width: ", ";\n\n  @media (max-width: 500px) {\n    flex-wrap: wrap;\n  }\n\n  ", ".phone-number {\n    display: flex;\n    align-items: center;\n\n    span{\n      width: 40px;\n      height: 40px;\n      display: flex;\n      align-items: center;\n      text-align: center;\n    }\n  }\n\n  .postal-currency{\n    display: flex;\n    justify-content: space-between;\n    column-gap: 20px;\n  }\n"], ["\n  display: flex;\n  align-items: stretch;\n  column-gap: 20px;\n  width: ", ";\n\n  @media (max-width: 500px) {\n    flex-wrap: wrap;\n  }\n\n  ", ".phone-number {\n    display: flex;\n    align-items: center;\n\n    span{\n      width: 40px;\n      height: 40px;\n      display: flex;\n      align-items: center;\n      text-align: center;\n    }\n  }\n\n  .postal-currency{\n    display: flex;\n    justify-content: space-between;\n    column-gap: 20px;\n  }\n"])), function (p) { return p.maxWidth ? p.maxWidth + "%" : '100%'; }, FormControl_1.FormControl);
exports.PanelHorizontal = PanelHorizontal;
var templateObject_1, templateObject_2;
//# sourceMappingURL=index.js.map