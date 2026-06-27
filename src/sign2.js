/*
In many cases, you don't actually need 
encrypt data. Rather, you'd just need to 
validate that it came from a trusted party.
The sender of the message will use their 
private key to sign a hash of the original 
message. 

The private key is like a signature that 
guarantees authenticity, while the hash 
makes sure that the message can't be 
tampered with. The receiver can then use the public
key to validate the authenticity of the message!
*/

const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const message = 'sign this data please!';

// making that signature (sign)
const signer = createSign('rsa-sha256');

signer.update(message);

const signature = signer.sign(privateKey, 'hex');

// to verify 
const verifier = createVerify('rsa-sha256');
verifier.update(message);

// verify the signature with the sender's public key
const isVerified = verifier.verify(publicKey, signature, 'hex');