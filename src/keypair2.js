// having both the sender and reciever of 
// the message need the agree to have the same 
// password, which can be impractical
// With a public-key cryptosystem, you have two 
// keys (one public and one private) that are 
// connected by mathematics 
// The private key must be secret, while the public 
// key can be given to anyone 

/*
Compare this to a mailbox; the public key is like 
mail, that anyone can put into the mailbox. However, 
only the person with the private key (the mailman) 
can open the mailbox
*/

const { generateKeyPairSync } = require('crypto');

// rsa = Rivest-Shamir-Adleman (RSA encryption) the most commmon
// cryptosystem to use!
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048, // length of your key in bits 
    publicKeyEncoding: {
        type: 'spki', // recommended by Node.js docs
        format: 'pem', // pem = privacy enhanced mail to show that 
                        // the key is in base-64 formate
    }, 
    privateKeyEncoding: {
        type: 'pkcs8', // recommended by Node.js docs
        format: 'pem',
        // cipher: 'aes-256-cbc',
        // passphrase: 'top secret' // if you want more security
    },
}); 

console.log(publicKey);
console.log(privateKey);

module.exports = {
    privateKey, publicKey
}