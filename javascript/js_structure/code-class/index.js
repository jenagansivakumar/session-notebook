/** Authors */

import { authors } from "./utils/authors.js";
import { caesarCipher13 } from "./utils/cipher.js";
import { createHeader } from "./components/header/header.js";
import { createCard } from "./components/card/card.js";
// import { name, surname, sayHello } from "./utils/others.js";
/**
 * Cipher
 * https://en.wikipedia.org/wiki/Caesar_cipher
 */

const input = /*  */ "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
const output = /* */ "NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm";

/** Get root element */

const root = document.querySelector("#root");

const header = createHeader();

root.append(header);

/** Main: Author Cards */

authors.forEach((author) => {
  //   console.log(author);
  const card = createCard(author);

  root.append(card);
});
