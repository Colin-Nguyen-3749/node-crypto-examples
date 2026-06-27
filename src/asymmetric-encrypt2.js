// use assymetric encryption everytime you go to 
// a website that uses https
/*
The browser finds a public key that is used to encrypt
any data that you send to the website, preventing hackers 
from getting anything useful from it while it's in transit.
The data will later be decrypted by a private key by the 
trusted website!
*/

const { publicEncrypt, privateDecrypt } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'xuan da ve'

const encryptedData = publicEncrypt(
    publicKey,
    Buffer.from(message)
);

console.log(encryptedData.toString('hex'))

const decryptedData = privateDecrypt(
    privateKey,
    encryptedData
);

console.log(decryptedData.toString('utf-8'));
