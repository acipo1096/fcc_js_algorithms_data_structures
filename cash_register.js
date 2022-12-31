function checkCashRegister(price, cash, cid) {
  let totalCash = 0.00;
  let changeNeeded = cash - price;
  let changeCheck = 0;
  let moneyOut= false;
  let change = [];
  let register = {
    'status': "",
    'change': []
  };

  for (let i = 0; i < cid.length; i++) {
      totalCash += cid[i][1];
  }

  let totalCashFormatted = Number(Number.parseFloat(totalCash).toFixed(2));
  let changeNF = Number(Number.parseFloat(changeNeeded).toFixed(2));
  console.log(totalCashFormatted);


  if (changeNF < totalCashFormatted) {

    if (changeNF > 100 && cid[8][1] >= 100) {
      while (changeNF > 100 && cid[8][1] != 0) {
        changeNF -= 100.00;
        cid[8][1] -= 100;
        changeCheck += 100;
      }
      if (cid[8][1] == 0) {
        moneyOut = true;
      } else if (cid[8][1] >= 100) {
        cid[8][1] = 0;
        moneyOut = false;
      }
    }

    if (changeNF > 20 && changeNF < 100 || cid[7][1] >= 20) {
      if (cid[8][1] >= 100) {
        cid[8][1] = 0;
      }
      while (changeNF > 20 && cid[7][1] != 0) {
        changeNF -= 20.00;
        cid[7][1] -= 20;
        changeCheck += 20;
      }
      if (cid[7][1] == 0) {
        moneyOut = true;
      } else if (cid[7][1] >= 20) {
        cid[7][1] = 0;
        moneyOut = false;
      }
    }

    if ((changeNF > 10 && changeNF < 20 && cid[6][1] >= 10) || (moneyOut = true)) {
      if (cid[7][1] >= 20) {
        cid[7][1] = 0;
      } else {
        cid[7][1] = changeCheck;
        changeCheck = 0;
      }
      while (changeNF > 10 && cid[6][1] != 0) {
        changeNF -= 10;
        cid[6][1] -= 10;
        changeCheck += 10;
        moneyOut = false;
      }
      if (cid[6][1] == 0) {
        moneyOut = true;
      } else if (cid[6][1] >= 10) {
        cid[6][1] = 0;
        moneyOut = false;
      }
    } 

    if ((changeNF > 5 && changeNF < 10 && cid[5][1] >= 5) || (moneyOut = true)) {
      if (cid[6][1] >= 10) {
        cid[6][1] = 0;
      } else {
        cid[6][1] = changeCheck;
        changeCheck = 0;
      }
      while (changeNF > 5) {
        changeNF -= 5;
        cid[5][1] -= 5;
        changeCheck += 5;
        moneyOut = false;
      }
    if (cid[5][1] == 0) {
        moneyOut = true;
      } else if (cid[5][1] >= 5) {
        cid[5][1] = 0;
        moneyOut = false;
      }
    }

    if ((changeNF > 1 && changeNF < 5 && cid[4][1] >= 1) || (moneyOut = true)) {
      if (cid[5][1] >= 5 && moneyOut == false) {
        cid[5][1] = 0;
      } else {
        cid[5][1] = changeCheck;
        changeCheck = 0;
      }
      while (changeNF > 1) {
        changeNF -= 1;
        cid[4][1] -= 1;
        changeCheck += 1;
        moneyOut = false;
      }
    if (cid[4][1] == 0) {
        moneyOut = true;
      } else if (cid[4][1] >= 1) {
        cid[4][1] = 0;
        moneyOut = false;
      }
    }

    console.log(changeNF.toFixed(2))
    console.log(changeCheck)
    if (changeNF >= .25 && changeNF < 1 && cid[3][1] >= .25) {
      if (changeCheck !== 0) {
        cid[4][1] = changeCheck;
        changeCheck = 0;
      }
      while (changeNF >= .25) {
        changeNF -= .25;
        cid[3][1] -= .25;
        changeCheck += .25;

      }
    }
    if (cid[3][1] == 0) {
        moneyOut = true;
      } else if (cid[3][1] >= .25) {
        cid[3][1] = 0;
        moneyOut = false;
      }

    if (changeNF > .10 && changeNF < .25 && cid[2][1] >= .10 || cid[3][1] == 0) {
      if (changeCheck !== 0) {
        cid[3][1] = changeCheck;
        changeCheck = 0;
      }
      while (changeNF > .10) {
        changeNF -= .10;
        cid[2][1] -= .10;
        changeCheck += .10;
      }
    }
    if (cid[2][1] == 0) {
        moneyOut = true;
      } else if (cid[2][1] >= .10) {
        cid[2][1] = 0;
        moneyOut = false;
      }

    if ((changeNF > .05 && changeNF < .10 && cid[1][1] >= .05) || (cid[2][1] == 0)) {
      if (changeCheck !== 0) {
        cid[2][1] = changeCheck;
        changeCheck = 0;
      }
      while (changeNF > .05) {
        changeNF -= .05
        cid[1][1] -= .05;
        changeCheck += .05;
      }
    } if (cid[1][1] == 0) {
        moneyOut = true;
      } else if (cid[1][1] >= .05) {
        cid[1][1] = 0;
        moneyOut = false;
      }

   if ((changeNF > .01 && changeNF < .05 && cid[0][1] >= .01) || (moneyOut = true)) {
      while (changeNF > 0 && cid[0][1] != 0) {
        changeNF -= .01;
        cid[0][1] -= .01;
        changeCheck += .01;
        moneyOut = false;
      }
      if (cid[0][1] == 0) {
        moneyOut = true;
      } else if (cid[0][1] >= .01) {
        cid[0][1] = changeCheck;
        moneyOut = false;
      }
    } 
    
    for (let i = cid.length - 1; i > -1; i--) {
      if (cid[i][1] !== 0)
        change.push(cid[i]);
    }

    register = {
      'status' : 'OPEN',
      'change' : change
    };

  }
  if (changeNeeded === totalCashFormatted) {
      register = {
        'status': "CLOSED",
        'change': cid
      }; 
  }
  
  if (cash > totalCashFormatted && changeNeeded !== totalCashFormatted) {
    register = {
      'status' : "INSUFFICIENT_FUNDS",
      'change' : []
    }
  }
  return register;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);