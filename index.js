
// const randomElement = array[Math.floor(Math.random() * array.length)]; syntax


// display specific length of password
// a specific amount of numbers, letter and symbol in each password
// copy to clipboard button


const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-+={[}],|:;<>.?/"
let generateBtn = document.getElementById("generate-btn")
let copyBtn = document.getElementById("copy-btn")
let passwordLength = 10

function generatePassword() {
    
    let password = ""

    for (let i = 0; i <= passwordLength; i++) {
        
        let randomIndex = Math.floor(Math.random() * characters.length)
        password += characters.substring(randomIndex, randomIndex +1)
    }
    document.getElementById("output").value = password
}


// copyPassword() {
//     let output = document.getElementById("output")
//     output.select()
//     output.setSelectionRange(0,999)
//     document.execCommand("copy")
// }
