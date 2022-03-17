class FetchWrapper {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  get(endpoint) {
    return fetch(this.baseURL + endpoint).then((response) => response.json());
  }

  put(endpoint, body) {
    return this._send("put", endpoint, body);
  }

  post(endpoint, body) {
    return this._send("post", endpoint, body);
  }

  delete(endpoint, body) {
    return this._send("delete", endpoint, body);
  }

  _send(method, endpoint, body) {
    return fetch(this.baseURL + endpoint, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((response) => response.json());
  }
}
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