/* Global Constants */
const currencyElm_one = document.getElementById("currency-one");
const amountElm_one = document.getElementById("amount-one");
const currencyElm_two = document.getElementById("currency-two");
const amountElm_two = document.getElementById("amount-two");

const rateElm = document.getElementById("rate");
const swap = document.getElementById("swap");


/* Event Listeners */
currencyElm_one.addEventListener('change', calculate());
amountElm_one.addEventListener('input', calculate());

currencyElm_two.addEventListener('change', calculate());
amountElm_two.addEventListener('input', calculate());