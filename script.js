
let digits = [0,1,2,3,4,5,6,7,8,9];
let lowerCase = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','y','z'];
let upperCase = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','Y','Z'];
let specialChars = ['!','@','#','$','%','^','&','*','(',')','-','=','+','?','/',';',':','|'];
const Allchars = digits + lowerCase + upperCase + specialChars;

//commenting this cause ive added onclick on the button
// const generate = document.getElementById("generatePassword");
// generate.addEventListener("click", function() {
//     createPassword()
// });

const passwordBox = document.getElementById("passwordDisplay");
const length = 12;

function createPassword(){
      let password = "";
    password += digits[Math.floor(Math.random()*digits.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += lowerCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*specialChars.length)];

    while (length > password.length) {
        password += Allchars[Math.floor(Math.random()*Allchars.length)];
    }

    passwordBox.value = password;
}

function copy() {
    var copyText = passwordBox.value;
    navigator.clipboard.writeText(copyText)
    .then(() =>{
        alert("copied to clipBoard");
    });

    // passwordBox.select();
    // document.execCommand("copy");
}