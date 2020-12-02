"use strict";
// @ts-check
exports.__esModule = true;
exports.stringifyError = void 0;
/**
 * Stringify an Error instance
 * @param err - The error to stringify
 */
function stringifyErrorValue(err) {
    return err.name.toUpperCase() + ": " + err.message + "\n  " + (err.stack || '(no stack trace information)');
}
/**
 * Stringify a thrown value
 *
 * @param errorDescription
 * @param err
 *
 */
function stringifyError(errorDescription, err) {
    return errorDescription + "\n" + (err instanceof Error
        ? stringifyErrorValue(err)
        : err
            // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
            ? '' + err
            : '(missing error information)');
}
exports.stringifyError = stringifyError;
