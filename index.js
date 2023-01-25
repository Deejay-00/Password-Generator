
// const randomElement = array[Math.floor(Math.random() * array.length)]; syntax


// display specific length of password
// a specific amount of numbers, letter and symbol in each password
// copy to clipboard button



function generatePassword() {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()-+={[}],|:;<>.?/";
    let passwordLength = 10;
    let password = "";

    for (let i = 0; i <= passwordLength; i++) {
        
        let randomIndex = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomIndex, randomIndex +1);
    }
    
    document.getElementById("output").value = password;
}


function copyPassword() {
    let output = document.getElementById("output");
    output.select();
    output.setSelectionRange(0,999);
    document.execCommand("copy");

    alert("Text copied: " + output.value);
}
