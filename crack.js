let form = document.querySelector('#form-2');
let card = document.querySelector(".hidden2");

// document.addEventListener('DOMContentLoaded', () => {
//     card.style.display = 'none';
// });

const SYMBOLS =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !?.`~@#$%^&*()_+-=[]{}|;:<>,/";

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let message = document.querySelector('#text-area2').value;
  let messageString = Array.from(message);
  let key;
  // loop through every possible key:
  for (const key of range(SYMBOLS.length)) {
      let translated = "";
      let symbol;

      // loop through each symbol in message:
      for (const symbol of messageString) {
          let symbolPresent = SYMBOLS.includes(symbol);

          if (symbolPresent) {
              let symbol_index = SYMBOLS.indexOf(symbol);
              let translated_index = symbol_index - key;

              // Handle wrap around:
              if (translated_index < 0) {
                translated_index += SYMBOLS.length;
              }

              // Append the decrypted symbol:
              translated += SYMBOLS[translated_index];
          } else {
            // Append the symbol without decrypting
            translated += symbol;     
          }
      }
    console.log("Key #%s: %s", key, translated);
    let decrypted = ("Key #%s: %s", key, translated);
    // console.log(decrypted);
    // console.log(typeof(decrypted));
    // decrypted.forEach((crack) => {
    //   console.log(crack);
    // });
    // let cracked = document.querySelector("#cipher2").innerHTML = ('Key #%s: %s', key, translated);
      // card.style.display = 'block';
  }
    

  function range(i) {
    return i ? range(i - 1).concat(i) : [];
  }
});

