let form = document.querySelector("#form");
let card = document.querySelector('.hidden');

document.addEventListener('DOMContentLoaded', () => {
    card.style.display = 'none';
});
// Every possible symbol that can be encrypted:
const SYMBOLS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !?.`~@#$%^&*()_+-=[]{}|;:<>,/";

// store the encrypted/decrypted message:
let translated = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let message = document.querySelector("#text-area").value;
  let upload = document.querySelector("#choose-file");
  let key = document.querySelector("#key").value;
  let mode = document.querySelector("#mode").value;
  let copyText = document.querySelector("#cpy-btn");

  let messageString = Array.from(message);
  let uploadString = Array.from(upload);
  let keyInt = Number.parseInt(key);

    for (const symbol of messageString) {
            // only symbols in the SYMBOLS can be encrypted/decrypted
            let symbolPresent = SYMBOLS.includes(symbol);

            if (symbolPresent) {
                let translated_index;

                const symbol_index = SYMBOLS.indexOf(symbol);

                // Perform encryption/decryption:

                if (mode === "encrypt") {
                    translated_index = symbol_index + keyInt;
                } else if (mode === "decrypt") {
                    translated_index = symbol_index - keyInt;
                }

                // handle wrap around if needed:
                if (translated_index >= SYMBOLS.length) {
                    translated_index -= SYMBOLS.length;
                } else if (translated_index < 0) {
                    translated_index += SYMBOLS.length;
                }

                translated += SYMBOLS[translated_index];
            } else {
                // append the symbol without encrypting/decrypting
                translated += symbol;
            }
    }

    let list = document.querySelector("#cipher").innerHTML = translated;
    card.style.display = 'block';

    //select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999);

    //copy the encrypted/decrypted text
    navigator.clipboard.writeText(copyText.value);

    // clear the fields after copying the text
    list.innerHTML = "";
    
});
