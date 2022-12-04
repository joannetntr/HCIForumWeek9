function canGiveBlood(dblood, rblood) {

    if (dblood.charAt(1) == "-") {
      if (dblood.charAt(0) == "O") {
        return true;
      }
    else if (dblood.charAt(0) == "A") {
        if (rblood.charAt(0) == "A" || rblood == "AB+") {
          return true;
        } else {
          return false;
        }
      }
    } 
    else if (dblood.charAt(0) == "B") {
      if (rblood.charAt(0) == "B" || rblood == "AB") {
        return true;
      } else {
        return false;
      }
    } 
    else if (dblood.charAt(1) == "+") {
      if (dblood.charAt(0) == "O") {
        if (rblood.charAt(1) == "+" || rblood.charAt(2) == "+") {
          return true;
        } else {
          return false;
        }
      }
    } 
    else if (dblood.charAt(0) == "A") {
      if (rblood == "A+" || rblood == "AB+") {
        return true;
      } else {
        return false;
      }
    } 
    else if (dblood.charAt(0) == "B") {
      if (rblood == "B+" || rblood == "AB+") {
        return true;
      } else {
        return false;
      }
    } 
    else if (dblood == "AB+") {
      if (rblood == "AB+") {
        return true;
      } else {
        return false;
      }
    } 
    else if (dblood == "AB-") {
      if (rblood == "AB+" || rblood == "AB-") {
        return true;
      } else {
        return false;
      }
    }
  }
  var d = canGiveBlood("O-", "A+");
  var e = canGiveBlood("A-", "B+");
  var f = canGiveBlood("A-", "AB+");
  console.log(d);
  console.log(e);
  console.log(f);