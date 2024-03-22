function generatePasswords() {
    // Step 1: Get user input //

    // Retrieve the value entered by the user //
    var passwordAmount = parseInt(document.getElementById("password-amount").value);
    var passwordLength = parseInt(document.getElementById("password-length").value);

    // Check if the "include-numbers" checkbox is checked //
    var includeNumbers = document.getElementById("include-numbers").checked;
    var includeSpecialChars = document.getElementById("special-char").checked;

    // Retrieve the selected option from the "complexity" dropdown
    var passwordComplexity = document.getElementById("complexity").value;

    // Step 2: Generate passwords //

    // Initialize an empty array to store the generated passwords // 
    var passwords = [];

    // Loop to generate specified number of passwords // 
    for (var i = 0; i < passwordAmount; i++) {
        // Call the generatePassword function to generate a single password
        // and add it to the passwords array //
        var password = generatePassword(passwordLength, includeNumbers, includeSpecialChars, passwordComplexity);
        passwords.push(password);
    }

    // Step 3: Display passwords

    // Call the displayPasswords function to display the generated passwords //
    displayPasswords(passwords);

}

function generatePassword(passwordLength, includeNumbers, includeSpecialChars, passwordComplexity) {

    //Define character sets //
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var specialChars = "!@#$%&?-";
    var numberChars = "0123456789";

    // Initialize an empty string to store the character set //
    var charset = "";

    // Add lowercase characters to the character set //
    charset += lowercaseChars;

    // Add uppercase characters to the character set if selected
    if (complexity = "more") {
        charset += uppercaseChars, lowercaseChars;
    }

    // Add numbers to the character set if selected
    if (includeNumbers) {
        charset += numberChars;
    }

    // Add special characters to the character set if selected
    if (includeSpecialChars) {
        charset += specialChars;
    }

    // Initialize an empty string to store the generated password
    var password = "";

    //Generate the password // 
    for (var i = 0; i < passwordLength; i++) {
        // Select a random character from the character set and append it to the password //
        var randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    // Output the constructed character set//
    console.log(charset);
    console.log(password);

    return password;

}

function displayPasswords(passwords) {
    // Clear previous result
    var passwordResultElement = document.getElementById("passwordResult");
    passwordResultElement.innerHTML = "";

    // Loop through the passwords array and create a paragraph element for each password
    passwords.forEach(function (password) {
        var passwordElement = document.createElement("p");
        passwordElement.textContent = password;
        passwordResultElement.appendChild(passwordElement);
    });
}





