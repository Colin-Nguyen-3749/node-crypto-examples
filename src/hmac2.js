// hmac = hash-based message authentification code
// basically it's a hash that also requires a password
// therefore, the only person who could create the same 
// hash signature is the one who knows the password/key!

// import
const { createHmac } = require('crypto');

const key = 'super-secret!';

// message to hash
const message = 'bada bing bada boom';

const hmac = createHmac('sha256', key).update(message).digest('hex');

console.log(hmac);

const key2 = 'incorrect-password';
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');

console.log(hmac2);