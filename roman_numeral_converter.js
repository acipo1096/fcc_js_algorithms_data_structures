function convertToRoman(num) {
 let numStr = String(num);
 let numStrLength = numStr.length;
 let newArr = [];
 let romNum = '';
 let romDum = [];

 for (let i = 0; i < numStrLength; i++) {
   newArr.push(numStr[i]);
   console.log(newArr);
 }

 if (newArr.length === 1) {
    if (newArr[0] === '1') {
      newArr[0] = "I";
   } else if (newArr[0] === '2') {
      newArr[0] = "II";
   } else if (newArr[0] === '3') {
      newArr[0] = "III";
   } else if (newArr[0] === '4') {
      newArr[0] = "IV";
   } else if (newArr[0] === '5') {
      newArr[0] = "V";
   } else if (newArr[0] === '6') {
      newArr[0] = "VI";
   } else if (newArr[0] === '7') {
      newArr[0] = "VII";
   } else if (newArr[0] === '8') {
      newArr[0] = "VIII";
   } else if (newArr[0] === '9') {
      newArr[0] = "IX";
   }
 }

 if (newArr.length === 2) {
   for (let i = 0; i < newArr.length; i++) {
      if (i === 0) {
         if (newArr[i] === '1') {
            newArr[i] = "X";
            console.log(newArr[i])
         } else if (newArr[i] === '2') {
            newArr[i] = "XX";
            console.log(newArr[i]);
         } else if (newArr[i] === '3') {
            newArr[i] = "XXX";
            console.log(newArr[i]);
         } else if (newArr[i] === '4') {
            newArr[i] = "XL";
            console.log(newArr[i]);
         } else if (newArr[i] === '5') {
            newArr[i] = "L";
            console.log(newArr[i]);
         } else if (newArr[i] === '6') {
            newArr[i] = "LX";
            console.log(newArr[i]);
         } else if (newArr[i] === '7') {
            newArr[i] = "LXX";
            console.log(newArr[i]);
         } else if (newArr[i] === '8') {
            newArr[i] = "LXXX";
            console.log(newArr[i]);
         } else if (newArr[i] === '9') {
            newArr[i] = "XC";
            console.log(newArr[i]);
         }
      }
      if (i === 1){
         if (newArr[i] === '1') {
            newArr[i] = "I";
            console.log(newArr[i])
         } else if (newArr[i] === '2') {
            newArr[i] = "II";
            console.log(newArr[i]);
         } else if (newArr[i] === '3') {
            newArr[i] = "III";
            console.log(newArr[i]);
         } else if (newArr[i] === '4') {
            newArr[i] = "IV";
            console.log(newArr[i]);
         } else if (newArr[i] === '5') {
            newArr[i] = "V";
            console.log(newArr[i]);
         } else if (newArr[i] === '6') {
            newArr[i] = "VI";
            console.log(newArr[i]);
         } else if (newArr[i] === '7') {
            newArr[i] = "VII";
            console.log(newArr[i]);
         } else if (newArr[i] === '8') {
            newArr[i] = "VIII";
            console.log(newArr[i]);
         } else if (newArr[i] === '9') {
            newArr[i] = "IX";
            console.log(newArr[i]);
         } else {
            newArr.pop();
         }
      }
   }
 }

if (newArr.length === 3) {
  for (let i = 0; i < newArr.length; i++) {
    if (i === 0) {
        if (newArr[i] === '1') {
          newArr[i] = "C";
          console.log(newArr[i])
        } else if (newArr[i] === '2') {
          newArr[i] = "CC";
          console.log(newArr[i]);
        } else if (newArr[i] === '3') {
          newArr[i] = "CCC";
          console.log(newArr[i]);
        } else if (newArr[i] === '4') {
          newArr[i] = "CD";
          console.log(newArr[i]);
        } else if (newArr[i] === '5') {
          newArr[i] = "D";
          console.log(newArr[i]);
        } else if (newArr[i] === '6') {
          newArr[i] = "DC";
          console.log(newArr[i]);
        } else if (newArr[i] === '7') {
          newArr[i] = "DCC";
          console.log(newArr[i]);
        } else if (newArr[i] === '8') {
          newArr[i] = "DCCC";
          console.log(newArr[i]);
        } else if (newArr[i] === '9') {
          newArr[i] = "CM";
          console.log(newArr[i]);
        }
    }
    if (i === 1){
        if (newArr[i] === '1') {
          newArr[i] = "X";
          console.log(newArr[i])
        } else if (newArr[i] === '2') {
          newArr[i] = "XX";
          console.log(newArr[i]);
        } else if (newArr[i] === '3') {
          newArr[i] = "XXX";
          console.log(newArr[i]);
        } else if (newArr[i] === '4') {
          newArr[i] = "XL";
          console.log(newArr[i]);
        } else if (newArr[i] === '5') {
          newArr[i] = "L";
          console.log(newArr[i]);
        } else if (newArr[i] === '6') {
          newArr[i] = "LX";
          console.log(newArr[i]);
        } else if (newArr[i] === '7') {
          newArr[i] = "LXX";
          console.log(newArr[i]);
        } else if (newArr[i] === '8') {
          newArr[i] = "LXXX";
          console.log(newArr[i]);
        } else if (newArr[i] === '9') {
          newArr[i] = "XC";
          console.log(newArr[i]);
        } else if (newArr[i] === '0'){
            i++;
        }
    }
    if (i === 2) {
      if (newArr[2] === '1') {
        newArr[2] = "I";
        console.log(newArr[2])
      } else if (newArr[i] === '2') {
        newArr[i] = "II";
        console.log(newArr[i]);
      } else if (newArr[i] === '3') {
        newArr[i] = "III";
        console.log(newArr[i]);
      } else if (newArr[i] === '4') {
        newArr[i] = "IV";
        console.log(newArr[i]);
      } else if (newArr[i] === '5') {
        newArr[i] = "V";
        console.log(newArr[i]);
      } else if (newArr[i] === '6') {
        newArr[i] = "VI";
        console.log(newArr[i]);
      } else if (newArr[i] === '7') {
        newArr[i] = "VII";
        console.log(newArr[i]);
      } else if (newArr[i] === '8') {
        newArr[i] = "VIII";
        console.log(newArr[i]);
      } else if (newArr[i] === '9') {
        newArr[i] = "IX";
        console.log(newArr[i]);
      } else {
        newArr.pop();
      }
    }
   }
 }

 if (newArr.length === 4) {
  for (let i = 0; i < newArr.length; i++) {
    if (i === 0) {
        if (newArr[i] === '1') {
          newArr[i] = "M";
          console.log(newArr[i])
        } else if (newArr[i] === '2') {
          newArr[i] = "MM";
          console.log(newArr[i]);
        } else if (newArr[i] === '3') {
          newArr[i] = "MMM";
          console.log(newArr[i]);
        }
      }
      if (i === 1){
         if (newArr[i] === '1') {
            newArr[i] = "C";
            console.log(newArr[i])
         } else if (newArr[i] === '2') {
            newArr[i] = "CC";
            console.log(newArr[i]);
         } else if (newArr[i] === '3') {
            newArr[i] = "CCC";
            console.log(newArr[i]);
         } else if (newArr[i] === '4') {
            newArr[i] = "CD";
            console.log(newArr[i]);
         } else if (newArr[i] === '5') {
            newArr[i] = "D";
            console.log(newArr[i]);
         } else if (newArr[i] === '6') {
            newArr[i] = "DC";
            console.log(newArr[i]);
         } else if (newArr[i] === '7') {
            newArr[i] = "DCC";
            console.log(newArr[i]);
         } else if (newArr[i] === '8') {
            newArr[i] = "DCCC";
            console.log(newArr[i]);
         } else if (newArr[i] === '9') {
            newArr[i] = "CM";
            console.log(newArr[i]);
         } else if (newArr[i] === '0'){
            newArr[i] = "0";
            console.log(newArr[i]);
         }
      }
      if (i === 2) {
        if (newArr[i] === '1') {
          newArr[i] = "X";
          console.log(newArr[i])
        } else if (newArr[i] === '2') {
          newArr[i] = "XX";
          console.log(newArr[i]);
        } else if (newArr[i] === '3') {
          newArr[i] = "XXX";
          console.log(newArr[i]);
        } else if (newArr[i] === '4') {
          newArr[i] = "XL";
          console.log(newArr[i]);
        } else if (newArr[i] === '5') {
          newArr[i] = "L";
          console.log(newArr[i]);
        } else if (newArr[i] === '6') {
          newArr[i] = "LX";
          console.log(newArr[i]);
        } else if (newArr[i] === '7') {
          newArr[i] = "LXX";
          console.log(newArr[i]);
        } else if (newArr[i] === '8') {
          newArr[i] = "LXXX";
          console.log(newArr[i]);
        } else if (newArr[i] === '9') {
          newArr[i] = "XC";
          console.log(newArr[i]);
        } else if (newArr[i] === '0'){
         newArr[i] = "0";
         console.log(newArr[i]);
      }
    }
    if (i === 3) {
      if (newArr[2] === '1') {
        newArr[i] = "I";
        console.log(newArr[2])
      } else if (newArr[i] === '2') {
        newArr[i] = "II";
        console.log(newArr[i]);
      } else if (newArr[i] === '3') {
        newArr[i] = "III";
        console.log(newArr[i]);
      } else if (newArr[i] === '4') {
        newArr[i] = "IV";
        console.log(newArr[i]);
      } else if (newArr[i] === '5') {
        newArr[i] = "V";
        console.log(newArr[i]);
      } else if (newArr[i] === '6') {
        newArr[i] = "VI";
        console.log(newArr[i]);
      } else if (newArr[i] === '7') {
        newArr[i] = "VII";
        console.log(newArr[i]);
      } else if (newArr[i] === '8') {
        newArr[i] = "VIII";
        console.log(newArr[i]);
      } else if (newArr[i] === '9') {
        newArr[i] = "IX";
        console.log(newArr[i]);
      } else {
        newArr.pop();
      }
    }
 }
 }
   
   console.log(newArr)

   function noZero(value) {
      return value !== '0'
   }

   romDum = newArr.filter(noZero);
   romNum = romDum.join('');
   console.log(romNum);
   return romNum;
}

convertToRoman(1003);