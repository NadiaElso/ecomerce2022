/*“use strict”; dice que use es no defined,asi que lo comenté*/

const payamountbtn = document.querySelector("#pay-amount") as HTMLButtonElement;
const decrementbtn = document.querySelectorAll(
  "#decrement"
) as HTMLButtonElement;
let quantityelement = document.querySelectorAll("#quantity");
const incrementbtn = document.querySelectorAll("#increment");
const priceelement = document.querySelectorAll("#price");
const subtotalelement = document.querySelector("#subtotal") as HTMLSpanElement;
const taxelement = document.querySelector("#tax") as HTMLSpanElement;
const totalelement = document.querySelector("#total") as HTMLSpanElement;

function agregarValor() {
  let contador = 0;
  for (let index = 0; index < contador; index++) {
    quantityelement.value = contador++;
  }

  console.log(contador);
}

for (let index = 0; index < decrementbtn.lenght; index++) {
  decrementbtn.addEventListener("click", agregarValor);
}
