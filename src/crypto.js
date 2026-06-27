const { createHash } = require('crypto');

function hash(input) {

    // sha secure hashing algorithm 
    // returns what's called a digest with 256 bits 
    return createHash('sha256').update(input).digest('hex');
}

let password = 'hi-mom!';
const hash1 = hash(password);
console.log(hash1);