/* Api Key */
let api_key = "d665adeb42f2404e0fbab04f";
/* Currencies Names */
let currencies = [
  "USD", "AED", "AFN", "ALL", "AMD", "ANG", "AOA", "ARS", "AUD", "AWG", 
  "AZN", "BAM", "BBD", "BDT", "BGN", "BHD", "BIF", "BMD", "BND", "BOB", 
  "BRL", "BSD", "BTN", "BWP", "BYN", "BZD", "CAD", "CDF", "CHF", "CLP", 
  "CNY", "COP", "CRC", "CUP", "CVE", "CZK", "DJF", "DKK", "DOP", "DZD", 
  "EGP", "ERN", "ETB", "EUR", "FJD", "FKP", "FOK", "GBP", "GEL", "GGP", 
  "GHS", "GIP", "GMD", "GNF", "GTQ", "GYD", "HKD", "HNL", "HRK", "HTG", 
  "HUF", "IDR", "ILS", "IMP", "INR", "IQD", "IRR", "ISK", "JEP", "JMD", 
  "JOD", "JPY", "KES", "KGS", "KHR", "KID", "KMF", "KRW", "KWD", "KYD", 
  "KZT", "LAK", "LBP", "LKR", "LRD", "LSL", "LYD", "MAD", "MDL", "MGA", 
  "MKD", "MMK", "MNT", "MOP", "MRU", "MUR", "MVR", "MWK", "MXN", "MYR", 
  "MZN", "NAD", "NGN", "NIO", "NOK", "NPR", "NZD", "OMR", "PAB", "PEN", 
  "PGK", "PHP", "PKR", "PLN", "PYG", "QAR", "RON", "RSD", "RUB", "RWF", 
  "SAR", "SBD", "SCR", "SDG", "SEK", "SGD", "SHP", "SLE", "SLL", "SOS", 
  "SRD", "SSP", "STN", "SYP", "SZL", "THB", "TJS", "TMT", "TND", "TOP", 
  "TRY", "TTD", "TVD", "TWD", "TZS", "UAH", "UGX", "UYU", "UZS", "VES", 
  "VND", "VUV", "WST", "XAF", "XCD", "XDR", "XOF", "XPF", "YER", "ZAR", 
  "ZMW", "ZWL"
]

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
      result.innerHTML = `${inputAmount.value} ${fromCurrency} <=> ${convertedResult.toFixed(2)} ${toCurrency}`;
      result.style.display = "block";
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter A Number!",
    });
  }
};
// Add Click event to The Conversion button
btn.addEventListener("click", conversion);