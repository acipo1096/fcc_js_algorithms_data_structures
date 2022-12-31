function telephoneCheck(str) {
  let vReg1 = /^[1]{0,1}[\s-]*(\([0-9][0-9][0-9]\)|[0-9][0-9][0-9])[-" "]*[\s]*[0-9][0-9][0-9][\s-]*[0-9][0-9][0-9][0-9]$/
  // console.log(vReg1.test(str));
  return vReg1.test(str);
}

telephoneCheck("27576227382");

// In plain language, the pattern must do the following:
// Allow for possibly 1 in the very beginning
// Allow the possibility of hyphens and spaces, but in the permitted pattern
// Allow the possibility of BOTH parentheses, not one or the other

  // let vReg1 = /^[1]{0,1}[" "]*[" "-(]*[0-9][0-9][0-9][-" ")]*[" "]*[0-9][0-9][0-9][-|" "]*[0-9][0-9][0-9][0-9]$/
  // console.log(vReg1.test(str));

// https://regex101.com/r/BIUPdm/1