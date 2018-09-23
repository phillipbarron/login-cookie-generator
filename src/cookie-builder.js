/**
 * 
 * @param {Object} token 
 * @param {Object} overrides 
 */
exports.buildCookies = (token, overrides = {}) => {
    return [{ ...{
                name: 'ckns_pp_id',
                value: token.id_token,
            },
            ...overrides
        },
        { ...{
                name: 'ckns_pp_session',
                value: token.access_token,
            },
            ...overrides
        }
    ];
}
