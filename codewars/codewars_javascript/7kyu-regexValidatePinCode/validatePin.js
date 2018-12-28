function validatePIN(pin) {
  return pin.match(/^\d{4}$|^\d{6}$/) ? true : false;
}

module.exports = validatePIN;
