const palindrome = require('/opt/nodejs/palindrome');

exports.handler = async (event) => {
    const val = palindrome(event.value);
    console.log(val);
    return val;
}
