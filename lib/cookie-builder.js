'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/**
 * 
 * @param {Object} token 
 * @param {Object} overrides 
 */
exports.buildCookies = function (token) {
    var overrides = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    return [{
        name: 'ckns_pp_id',
        value: token.id_token
    }, {
        name: 'ckns_pp_session',
        value: token.access_token
    }].map(function (item) {
        return _extends({}, item, overrides);
    });
};