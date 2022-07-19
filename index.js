
// const randomElement = array[Math.floor(Math.random() * array.length)]; syntax
// const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y",
// "Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y",
// "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_",
// "-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
// "/"]



const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-+={[}],|:;<>.?/".split("")
// display specific length of password
// a specific amount of numbers, letter and symbol in each password
// copy to clipboard button


const generateBtn = document.getElementById("generate-btn")
let displayCharacter = document.getElementById("displayy")

// function generatePassword() {
//     const randomIndex =  characters[Math.floor(Math.random() * characters.length)] 
//     console.log(randomIndex)
//     displayCharacter.textContent = randomIndex
// }


generateBtn.addEventListener("click", function generatePassword() {
    
    for (let i = 0; i < 10; i++) {
        let randomIndex =  characters[Math.floor(Math.random() * characters.length)] 
        // let randomIndex =  Math.floor(Math.random() * characters.length)
        displayCharacter.textContent = randomIndex
    }
})

