// this is used when you want to encrypt a message,
// but you have a buddy that you want to give the message
// to. Here, you encrypt the message, and if your 
// buddy has a special password, they can decrypt your
// secret message. 
// Often, the encryption is randomized so the same string
// might not produce the same hash, but it's the key to 
// decrypt that matters

// iv stands for initialization vector, not 4 
const { createCipheriv, randomBytes, createDecipheriv } = require('crypto');

// message to encrypt
const message = 'i love pandas';
const key = randomBytes(32);

// iv prevents identical sequences of text 
const iv = randomBytes(16);

// encryption algorithms are different than hashing algorithms
// so that's why we have different options 
const cipher = createCipheriv('aes256', key, iv);

// encryption time!
const encryptedMessage = cipher.update(message, 'utf8', 'hex')
                            + cipher.final('hex'); 
                            // after finalizing, the cipher can 
                            // no longer be used to encrypt data

// decrypt
const decipher = createDecipheriv('aes256', key, iv);
const decryptedMessage = decipher.update(encryptedMessage, 'hex', 'utf-8')
                        + decipher.final('utf8'); 

console.log(`Deciphered: ${decryptedMessage.toString('utf-8')}`);