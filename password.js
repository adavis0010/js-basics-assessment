// Welcome the user to the password validator tool
// Prompt the user for a password to validate
// Check if the user’s password meets the following constraint:
//      At least 10 characters long
// If the user’s password meets the constraint, show a success message to the user
// If the user’s password fails the constraint, show a failure message to the user

console.log(`Welcome to the password validator!`)

const readline = require('readline');
const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})
reader.question('Pleas enter password'),function(password) {
    if(password.length >= 10){
        console.log('Strong password')
    } else{
        console.log('Password is too weak')
    }
}

