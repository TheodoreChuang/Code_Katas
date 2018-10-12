export default class Cipher {
  constructor(key){
    this._key = key
  }

  let key = this._key.toMatch(/^[a-z]+$/)


  function encode(){}

  function decode(){}

}



  // function cipherText(plaintext, k){
  //   return plaintext.split('')
  //     .map(nextChar)
  //     .join('')
  
  //   function nextChar(y){
  //     return String.fromCharCode(y.charCodeAt() + (k % 26 || 1));
  //   }
  // }