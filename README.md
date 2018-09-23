### Cookie builder

builds login cookies when supplied with a valid token response

#### Usage:

```js
const loginTokenGenerator = require('login-token-generator');
const cookieBuilder = require('cookie-builder');
const myCookies = cookieBuilder.buildCookies(loginTokenGenerator.generateToken());
```
#### Testing:
```bash
npm run test
```
