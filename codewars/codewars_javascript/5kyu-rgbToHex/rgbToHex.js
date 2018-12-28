function rgb(r, g, b) {
  function rgbToHex(color) {
    if (color >= 255) return "FF";
    if (color <= 0) return "00";
    return decToHex(color);
  }
  return rgbToHex(r) + rgbToHex(g) + rgbToHex(b);
}

function decToHex(int) {
  let r = int % 16;
  if (int - r == 0) {
    return toChar(r);
  }
  return decToHex((int - r) / 16) + toChar(r);
}

function toChar(n) {
  const alpha = "0123456789ABCDEF";
  return alpha.charAt(n);
}

module.exports = rgb;

// function rgb(r, g, b){
//   return toHex(r)+toHex(g)+toHex(b);
// }

// function toHex(d) {
//     if(d < 0 ) {return "00";}
//     if(d > 255 ) {return "FF";}
//     return  ("0"+(Number(d).toString(16))).slice(-2).toUpperCase()
// }
