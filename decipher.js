function digitalDecipher(message, key){
    var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var result = "";
    var key = key.toString().split("");
    for (var i = 0; i < message.length; i++) {
        result += alphabet[message[i] - key[i % key.length] - 1];
      }
      return result;
    }
var x = digitalDecipher([20, 12, 18, 30, 21], 1939);
var y = digitalDecipher([14, 30, 11, 1, 20, 17, 18, 18], 1990);
var z = digitalDecipher([6, 4, 1, 3, 9, 20], 100);
console.log(x);
console.log(y);
console.log(z);