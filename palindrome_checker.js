function palindrome(str) {
  let dummy = "";
  let dummy2 = ""
  const regex = /[\W_]/g
  const adjustedStr = str.toLowerCase().replace(regex,"");
  for (let i = adjustedStr.length - 1; i > -1; i--) {
      dummy2 += dummy.concat(adjustedStr[i]);
  }
  if (dummy2 === adjustedStr) {
    return true;
  }
  return false;
  
}

palindrome("A man, a plan, a canal. Panama");