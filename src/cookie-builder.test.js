const cookieBuilder = require('./cookie-builder');

test('it returns expected cookies', () => {
    const cookies = cookieBuilder.buildCookies({
        id_token: 'foo',
        access_token: 'bar'
    });
    expect(cookies.length).toBe(2);
    expect(cookies).toEqual([{
        name: 'ckns_pp_id',
        value: 'foo'
    }, {
        name: 'ckns_pp_session',
        value: 'bar'
    }])
});

test('it returns overrides in each cookie', () => {
    const cookies = cookieBuilder.buildCookies({
        id_token: 'foo',
        access_token: 'bar'
    }, {domain: 'baz'});
    expect(cookies.length).toBe(2);
    expect(cookies).toEqual([{
        name: 'ckns_pp_id',
        value: 'foo',
        domain: 'baz'
    }, {
        name: 'ckns_pp_session',
        value: 'bar',
        domain: 'baz'
    }])
});

test('overrides override', () => {
    const cookies = cookieBuilder.buildCookies({
        id_token: 'foo',
        access_token: 'bar'
    }, {name: 'baz'});
    expect(cookies.length).toBe(2);
    expect(cookies).toEqual([{
        name: 'baz',
        value: 'foo',
    }, {
        name: 'baz',
        value: 'bar'
    }])
});

