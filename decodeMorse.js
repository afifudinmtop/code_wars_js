// decodeMorse('.... . -.--   .--- ..- -.. .')
//should return "HEY JUDE"

function decodeMorse(morseCode) {
  // split kata
  let a = morseCode.split("   ");
  let cetak = "";

  // split huruf
  for (let index = 0; index < a.length; index++) {
    let b = a[index].split(" ");
    let c = "";
    for (let index2 = 0; index2 < b.length; index2++) {
      if (MORSE_CODE[b[index2]] != undefined) {
        c += MORSE_CODE[b[index2]];
      }
    }
    cetak = cetak + c + " ";
  }

  return cetak.trim();
}
