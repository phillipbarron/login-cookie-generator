### Cookie builder

builds login cookies when supplied with a valid token response

#### Usage:
Just tokens:
```js
const loginTokenGenerator = require('login-token-generator');
const cookieBuilder = require('cookie-builder');
const myCookies = cookieBuilder.buildCookies(loginTokenGenerator.generateToken());
```
with additional parameters:
```js
const loginTokenGenerator = require('login-token-generator');
const cookieBuilder = require('cookie-builder');
const myCookies = cookieBuilder.buildCookies(loginTokenGenerator.generateToken(), {foo: 'bar'});
```
#### Testing:
```bash
npm run test
```
