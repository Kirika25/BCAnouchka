"use strict";


/* script panier qté */


                                                
let res = document.getElementById("result");
result = parseInt(res.value, 10);

let plus = document.getElementById("plus");
let moins = document.getElementById("moins");

// prendre en compte la modification du nombre au clavier
res.addEventListener("blur", function () {
  result = document.getElementById("result");
  result = parseInt(result.value, 10);
});

// boutton +
plus.addEventListener("click", function () {
  if (result >= 0 && result < 10) {
    result++;
    document.getElementById("result").value = result;
  }
});

// boutton -
moins.addEventListener("click", function () {
  if (result > 0 && result <= 10) {
    result--;
    document.getElementById("result").value = result;
  }
});







