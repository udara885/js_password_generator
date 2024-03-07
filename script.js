function generatePassword() {
  const passwordLength = document.getElementById(`characters`).value;
  const includeLowercase = document.getElementById(`lowercase`);
  const includeUppercase = document.getElementById(`uppercase`);
  const includeNumbers = document.getElementById(`number`);
  const includeSymbols = document.getElementById(`symbol`);
  const generatedPassword = document.getElementById(`password`);
  const lowercaseChars = `abcdefghijklmnopqrstvwxyz`;
  const uppercaseChars = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  const numberChars = `0123456789`;
  const symbolChars = `!@#$%^&*()_+=-~{}[];:'"|</,>?/`;

  let allowedChars = ``;
  let password = ``;

  allowedChars += includeLowercase.checked ? lowercaseChars : ``;
  allowedChars += includeUppercase.checked ? uppercaseChars : ``;
  allowedChars += includeNumbers.checked ? numberChars : ``;
  allowedChars += includeSymbols.checked ? symbolChars : ``;

  if (passwordLength <= 0) {
    generatedPassword.textContent = `(Password length must be at least 1)`;
  }

  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * allowedChars.length);
    password += allowedChars[randomIndex];
  }

  generatedPassword.textContent = `Generated password : ${password}`;
}
