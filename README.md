# Cookie builder

builds login cookies when supplied with valid tokens from the [PP Login library](https://github.com/bbc/partner-platform-bbclogin-id-token-generator)

## Usage

Just tokens:

```javascript
const createIdToken = require('@bbc/partner-platform-bbclogin-id-token-generator').createIdToken;
const loginTokenGenerator = require('login-token-generator');
const cookieBuilder = require('cookie-builder');

const myCookies = cookieBuilder.buildCookies(await createIdToken());
```

with additional parameters:

```javascript
const createIdToken = require('@bbc/partner-platform-bbclogin-id-token-generator').createIdToken;
const cookieBuilder = require('cookie-builder');

const myCookies = cookieBuilder.buildCookies(
    await createIdToken(),
    { donmain: 'foo.bar.baz.co.uk'}
);

// myCookies:
// [
//     {
//         name: 'ckns_pp_id',
//         value: 'foo',
//         domain: 'foo.bar.baz.co.uk'
//     },
//     {
//         name: 'ckns_pp_session',
//         value: 'bar'
//         domain: 'foo.bar.baz.co.uk'
//     }
// ]
```

## Test

```bash
yarn test
```
