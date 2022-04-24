"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var default_1 = require("./style/default");
var React = require("react");
// @ts-ignore
var KeyBuilder_1 = require("core/KeyBuilder");
var DropdownMenu = function (_a) {
    var menus = _a.menus, _b = _a.className, className = _b === void 0 ? "" : _b;
    return (React.createElement(default_1.MenuWrapper, { className: className },
        React.createElement("ul", null, menus.map(function (item) { return (React.createElement("li", { key: KeyBuilder_1.default.build, onClick: item.action }, item.title)); }))));
};
exports.default = react_1.memo(DropdownMenu);
//# sourceMappingURL=index.js.map