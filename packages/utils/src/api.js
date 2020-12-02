"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.useAsyncDataEffect = void 0;
var react_1 = require("react");
var deferred_1 = require("./deferred");
/**
 *
 * @param  getData
 * @param  options
 */
function useAsyncDataEffect(getData, options) {
    var cancelled = false;
    var setter = options.setter, stateName = options.stateName;
    react_1.useEffect(function () {
        var d = new deferred_1["default"]();
        getData()
            .then(function (jsonData) {
            if (cancelled)
                return;
            else
                d.resolve(jsonData);
        })["catch"](d.reject);
        d.promise
            .then(function (data) {
            if (!cancelled) {
                console.info("%c Updating state: " + stateName, "background: green; color: white; display: block;");
                setter(data);
            }
        })["catch"](console.error);
        return function () {
            cancelled = true;
        };
    }, __spreadArrays((options.otherStatesToMonitor || []), [stateName]));
}
exports.useAsyncDataEffect = useAsyncDataEffect;
