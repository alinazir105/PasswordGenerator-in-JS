const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
    "/"];

const generateBtn = document.getElementById("generate-btn")

const password1 = document.getElementById("password1")
const password2 = document.getElementById("password2")

let generatePass1 = ""
let generatePass2 = ""
let passwordLength
generateBtn.addEventListener("click", function () {
    passwordLength = document.getElementById("password-length").value
    if (passwordLength < 5) {
        alert("Password must be atleast 5 characters long")
    }
    else {

        for (let i = 0; i < passwordLength; i++) {
            generatePass1 += characters[Math.floor(Math.random() * characters.length)]
        }
        password1.innerText = generatePass1
        generatePass1 = ""

        for (let i = 0; i < passwordLength; i++) {
            generatePass2 += characters[Math.floor(Math.random() * characters.length)]
        }
        password2.innerText = generatePass2
        generatePass2 = ""
    }
})

const textToCopy1 = document.getElementById("password1");
const copyButton1 = document.getElementById("copyButton1");

copyButton1.addEventListener("click", function() {
    // Select the text
    const range = document.createRange();
    range.selectNode(textToCopy1);
    window.getSelection().removeAllRanges(); // Clear previous selections
    window.getSelection().addRange(range);

    // Execute the copy command
    document.execCommand("copy");

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Optionally, provide feedback to the user
    copyButton1.innerText = "Copied!";
    setTimeout(() => {
        copyButton1.innerText = "Copy";
    }, 1500); // Reset button text after 1.5 seconds
});

const textToCopy2 = document.getElementById("password2");
const copyButton2 = document.getElementById("copyButton2");

copyButton2.addEventListener("click", function() {
    // Select the text
    const range = document.createRange();
    range.selectNode(textToCopy2);
    window.getSelection().removeAllRanges(); // Clear previous selections
    window.getSelection().addRange(range);

    // Execute the copy command
    document.execCommand("copy");

    // Deselect the text
    window.getSelection().removeAllRanges();

    // Optionally, provide feedback to the user
    copyButton2.innerText = "Copied!";
    setTimeout(() => {
        copyButton2.innerText = "Copy";
    }, 1500); // Reset button text after 1.5 seconds
});