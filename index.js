let passwordLength = document.getElementById("passwordLength");
let password = document.getElementById("password");
let saveButton = document.getElementById("saveButton");

//arrow functions
const genaratePass = (lenght) => {
  const lowerAlphabet = "abcdefghijklmnopqrstuvwxyz";
  const upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numeric = "0123456789";
  const symbols = "!@#$%^&*()-_=+[]{}';:/?.,<>~`";

  const data = lowerAlphabet + upperAlphabet + numeric + symbols;

  let generator = "";
  for (let i = 0; i < lenght; i++) {
    generator += data[~~(Math.random() * data.length)];
  }

  return generator;
};

const getPassword = () => {
  const newPassword = genaratePass(passwordLength.value);
  password.value = newPassword;
};

const savePassword = () => {
  document.title = password.value;
  saveButton.setAttribute(
    "href",
    "data:text/plain;charset=UTF-8," +
      encodeURIComponent(`password saya : ${password.value}`)
  );
  saveButton.setAttribute("download", "PasswordkuLOG.txt");

  setTimeout(() => {
    alert("Password has been saved!");
  }, 200);
};
