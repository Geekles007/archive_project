"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Divider = void 0;
var styled_components_1 = require("styled-components");
var Divider = styled_components_1.default.hr(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  height: .5px;\n  width: 100%;\n  border: none;\n  margin-top: 35px;\n  margin-bottom: 15px;\n  background-color: ", ";\n"], ["\n  height: .5px;\n  width: 100%;\n  border: none;\n  margin-top: 35px;\n  margin-bottom: 15px;\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.secondaryColor;
});
exports.Divider = Divider;
var templateObject_1;
//# sourceMappingURL=index.js.map