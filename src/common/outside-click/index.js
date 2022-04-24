"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var useOutsideClick = function (ref, callback) {
    var handleClick = function (e) {
        if (ref.current && !ref.current.contains(e.target)) {
            callback();
        }
    };
    react_1.useEffect(function () {
        document.addEventListener("mousedown", handleClick);
        return function () {
            document.removeEventListener("mousedown", handleClick);
        };
    }, [ref]);
};
exports.default = useOutsideClick;
//# sourceMappingURL=index.js.map