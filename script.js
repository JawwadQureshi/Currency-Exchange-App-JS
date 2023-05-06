/* Global Constants */
const currencyElm_one = document.getElementById("currency-one");
const amountElm_one = document.getElementById("amount-one");
const currencyElm_two = document.getElementById("currency-two");
const amountElm_two = document.getElementById("amount-two");

const rateElm = document.getElementById("rate");
const swap = document.getElementById("swap");

/* Calculate Function */
function calculate(){
  const currency_one = currencyElm_one.value;
  const currency_two = currencyElm_two.value;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
  .then(res => res.json())
  .then(data => {
    const rate = data.rates[currency_two];
    rateElm.innerHTML = `1 ${currency_one} = ${rate} ${currency_two}`;
    amountElm_two.value = (amountElm_one.value * rate).toFixed(2);
  });
}

/* Event Listeners */
currencyElm_one.addEventListener('change', calculate);
amountElm_one.addEventListener('input', calculate);

currencyElm_two.addEventListener('change', calculate);
amountElm_two.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  //Uses a place holder to swap the currency
  const currencyPlaceHolder = currencyElm_one.value;
  currencyElm_one.value = currencyElm_two.value;
  currencyElm_two.value = currencyPlaceHolder;

  //Uses currency swap format to swap amounts
  const amtPlaceHolder = amountElm_one.value;
  amountElm_one.value = amountElm_two.value;
  amountElm_two.value = amtPlaceHolder;

  calculate();
});

calculate();