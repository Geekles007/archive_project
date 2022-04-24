"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuWrapper = void 0;
var styled_components_1 = require("styled-components");
var colors_1 = require("@carbon/colors");
var MenuWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    position: absolute;\n    color: #fff;\n    top: 46px;\n    width: 150px;\n    right: 0;\n    background-color: ", ";\n    margin-right: -2.5px;\n    \n    transition: transform, opacity .5s .2s ease-in-out;\n    \n    transform: translateY(50px);\n    opacity: 0;\n    \n    display: none;\n    \n    li{\n        padding: 15px 20px;\n        font-size: 1.3em;\n        text-align: left;\n        \n        &:hover{\n            background-color: ", ";\n        }\n    }\n    \n    &.activated {\n        transform: translateY(0px) !important;\n        opacity: 1 !important;\n        display: block;\n    }\n"], ["\n    position: absolute;\n    color: #fff;\n    top: 46px;\n    width: 150px;\n    right: 0;\n    background-color: ", ";\n    margin-right: -2.5px;\n    \n    transition: transform, opacity .5s .2s ease-in-out;\n    \n    transform: translateY(50px);\n    opacity: 0;\n    \n    display: none;\n    \n    li{\n        padding: 15px 20px;\n        font-size: 1.3em;\n        text-align: left;\n        \n        &:hover{\n            background-color: ", ";\n        }\n    }\n    \n    &.activated {\n        transform: translateY(0px) !important;\n        opacity: 1 !important;\n        display: block;\n    }\n"])), colors_1.gray80, colors_1.gray100);
exports.MenuWrapper = MenuWrapper;
var templateObject_1;
//# sourceMappingURL=default.js.map