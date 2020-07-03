# Cookie builder

builds login cookies when supplied with a valid token response

## Usage

Just tokens:

```javascript
const loginTokenGenerator = require('login-token-generator');
const cookieBuilder = require('cookie-builder');
const myCookies = cookieBuilder.buildCookies(loginTokenGenerator.generateToken());
```

with additional parameters:

```javascript
const loginTokenGenerator = require('login-token-generator');
const cookieBuilder = require('cookie-builder');
const myCookies = cookieBuilder.buildCookies(loginTokenGenerator.generateToken(), {foo: 'bar'});
```

## Test

```bash
yarn test
```
