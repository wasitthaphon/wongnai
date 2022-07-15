var atob = require("atob");
const secret = "aWFuZ25vVzpOQU06RU5JTDp0YTpzdTpuaW9K";

function decodeBase64(str) {
  return decodeURIComponent(atob(str));
}

function reverseText(str) {
  let temp = "";
  for (var i = str.length - 1; i >= 0; i--) {
    if (str[i] == ":") {
      temp = temp + " ";
    } else {
      temp = temp + str[i];
    }
  }
  return temp;
}

console.log(reverseText(decodeBase64(secret)));
