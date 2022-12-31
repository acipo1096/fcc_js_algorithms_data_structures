function rot13(str) {
  let caesar = {
     'A': 'N',
     'B': 'O',
     'C': 'P',
     'D': 'Q',
     'E': 'R',
     'F': 'S',
     'G': 'T',
     'H': 'U',
     'I': 'V',
     'J': 'W',
     'K': 'X',
     'L': 'Y',
     'M': 'Z',
     'N': 'A',
     'O': 'B',
     'P': 'C',
     'Q': 'D',
     'R': 'E',
     'S': 'F',
     'T': 'G',
     'U': 'H',
     'V': 'I',
     'W': 'J',
     'X': 'K',
     'Y': 'L',
     'Z': 'M'
  }
  let size = Object.keys(caesar).length;
  let newStr = "";
  let dummy = "";
  let regex = /\W/g;
  let pie = str.match(regex);
  console.log(pie)

  caesar[Object.keys(caesar)[0]]; 

  
  for (let i = 0; i < str.length; i++) {
      for (let j = 0; j < size; j++ ) {
        if (str[i] === caesar[Object.keys(caesar)[j]]) {
            dummy = caesar[Object.values(caesar)[j]];
            newStr += dummy;
        } else if (regex.test(str[i])) {
            newStr += str[i];
            break;
        }
        
      }
      
  }
  console.log(newStr);
  return newStr;

  
}

rot13("SERR CVMMN!");