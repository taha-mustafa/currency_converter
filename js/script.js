/* My api key */
let api = `https://v6.exchangerate-api.com/v6/${api_key}/latest/USD`;
/* Holding Elements */
let fromDropCurrency = document.getElementById("from-currency");
let toDropCurrency = document.getElementById("to-currency");
let btn = document.getElementById("convert");
let inputAmount = document.getElementById("amount");
let result = document.getElementById("result");

/* ForEach function to iterate over currency codes {FROM CURRENCY} */
currencies.forEach(curr => {
  let selectOption = document.createElement("option");
  selectOption.value = curr;
  selectOption.text = curr;
  fromDropCurrency.add(selectOption);
  fromDropCurrency.value = "EGP"
});
/* ForEach function to iterate over currency codes {TO CURRENCY} */
currencies.forEach(curr => {
  let selectOption = document.createElement("option");
  selectOption.value = curr;
  selectOption.text = curr;
  toDropCurrency.add(selectOption);
  toDropCurrency.value = "TRY";
});

// Conversion operation
let conversion = () => {
  let fromCurrency = fromDropCurrency.value; 
  let toCurrency = toDropCurrency.value;
  // Checking whether or not input field is empty 
  if (inputAmount.value != 0) {
    // Fetching Data
    fetch(api).then((resolved) => resolved.json()).then((data) => {
      let fExchange = data.conversion_rates[fromCurrency];
      let tExchange = data.conversion_rates[toCurrency];
      let convertedResult = (inputAmount.value / fExchange) * tExchange;
      // Fill the Result area
      result.innerHTML = `${inputAmount.value} ${fromCurrency} = ${convertedResult.toFixed(2)} ${toCurrency}`;
      result.style.display = "block";
    });
  } else {
    alert("Please Enter a number!");
  }
};
// Add Click event to The Conversion button
btn.addEventListener("click", conversion);