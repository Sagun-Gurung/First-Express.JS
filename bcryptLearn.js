import bcrypt, { hash } from "bcrypt";

// hash code of same string is different
// =Encryption is possible
// =Decryption is not possible

// #### Generate Hashcode
// let hashCode = await bcrypt.hash("santa", 10);
// console.log(hashCode);

// ##Compare Hashcode
let isValidPassword = await bcrypt.compare(
  "santa",
  "$2b$10$/eLtM0nbjmCuMP4w4D8lpeHJao3AhsswltY6TOkcLdkfC9mwrGn86"
); //it gives true or false result
console.log(isValidPassword);
// "santa" = $2b$10$/eLtM0nbjmCuMP4w4D8lpeHJao3AhsswltY6TOkcLdkfC9mwrGn86
