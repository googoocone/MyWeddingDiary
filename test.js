const bcrypt = require("bcrypt");

async function main() {
  const password = "gkftndlTek1!@";
  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  console.log(hashedPassword);
}

main();
