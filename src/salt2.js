// a salt is a randomly generated string that
// acts as a little extra add-on to a password
// before it's hashed so that it makes it harder 
// to guess someone's password (because sometimes
// people choose the most basic ahh passwords like 
// 12345)

const { scryptSync, randomBytes } = require('crypto');

function signup(email, password) {
    
    const salt = randomBytes(16).toString('hex');
    
    // tack on the salt to the password BEFORE hashing 
    // 64 is the recommended key length
    const hashedPassword = scryptSync(password, salt, 64); 
    
    const user = { email, password: `${salt}:${hashedPassword}` }

    users.push(user);

    return user
}

function login(email, password) {

    const user = users.find(v => v.email === email);

    // grab the salt from the database and recreate the 
    // original hash
    const [salt, key] = user.password.split(':');
    const hashedBuffer = scryptSync(password, salt, 64);

    // this prevents timing attacks 
    // where a hacker measures the amount of time it takes 
    // to perform an operation to gain information about the value 
    // 
    const keyBuffer = Buffer.from(key, 'hex');
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        return 'login successful! :)'
    } else {
        return 'login unsuccessful :('
    }

}