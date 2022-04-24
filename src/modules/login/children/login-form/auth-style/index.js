"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TopRightLink = exports.LoginButton = exports.CustomForm = exports.LoginPanel = exports.AuthContainer = void 0;
var carbon_components_react_1 = require("carbon-components-react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var AuthContainer = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  max-width: 400px;\n  height: 100vh;\n  padding: 0 0 0 0px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  z-index: 1;\n  background-color: ", ";\n\n  @media (max-width: 500px) {\n    width: 100%;\n  }\n"], ["\n  max-width: 400px;\n  height: 100vh;\n  padding: 0 0 0 0px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  z-index: 1;\n  background-color: ", ";\n\n  @media (max-width: 500px) {\n    width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.bgColor;
});
exports.AuthContainer = AuthContainer;
var LoginPanel = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 400px;\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  padding-top: 3em;\n\n  @media (max-width: 500px) {\n    width: 100%;\n  }\n"], ["\n  width: 400px;\n  align-items: flex-start;\n  display: flex;\n  flex-direction: column;\n  padding-top: 3em;\n\n  @media (max-width: 500px) {\n    width: 100%;\n  }\n"])));
exports.LoginPanel = LoginPanel;
var CustomForm = styled_components_1.default(carbon_components_react_1.Form)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  width: 100%;\n"])));
exports.CustomForm = CustomForm;
var TopRightLink = styled_components_1.default(react_router_dom_1.Link)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  right: 0;\n"], ["\n  position: absolute;\n  top: 0;\n  right: 0;\n"])));
exports.TopRightLink = TopRightLink;
var LoginButton = styled_components_1.default(carbon_components_react_1.Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  max-width: 100%;\n"], ["\n  width: 100%;\n  max-width: 100%;\n"])));
exports.LoginButton = LoginButton;
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5;
//# sourceMappingURL=index.js.map