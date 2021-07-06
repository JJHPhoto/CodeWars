// Solution

function validatePIN(pin) {
  const pinLength = pin.length === 4 || pin.length === 6;

  const pinMatch = /^[0-9]+$/;

  if (pinLength && pin.match(pinMatch)) {
    return true;
  }

  return false;
}

//My Pseudocode
// pin.length === 4 && || 6
// return pin?
