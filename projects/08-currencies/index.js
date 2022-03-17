import { FetchWrapper } from "./fetcwrapper";
const baseURL = "https://v6.exchangerate-api.com/v6/66507ff79c1dc7c61ec22725/latest"

const conversionResult = document.querySelector("#conversion-result");
const getConversionRates = () => {
  const baseCurrency = document.querySelector("#base-currency").value
  const targetCurrency = document.querySelector("#target-currency").value
  const API = new FetchWrapper(baseURL)
  API.get("/" + baseCurrency).then(data => {
    conversionResult.textContent = data.conversion_rates[targetCurrency];
  })
};
document.addEventListener("change", getConversionRates);