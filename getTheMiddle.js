function getMiddle(s) {
  let strLen = s.length;
  //determine length of a word to see if it's even or odd.
  if (strLen % 2 == 0) {
    let i2 = strLen / 2;
    let i1 = i2 - 1;
    return s[i1] + s[i2];
  } else {
    let i = (strLen - 1) / 2;
    return s[i];
  }
  //use math to divide length of word.
}
