const covidText = document.querySelector("js-covid");

const API_KEY_COVID =
  "ZTA0ThFuL3LhjBoSmkJi7q6KH45jxcI570l0pkn5UX20KxU0%2F3VRuNUf%2FjiK27E7BDnOuXW7JTdBd0eJiNDzdg%3D%3D";
const TODAY = "20201229";

function getweather() {
  fetch(
    `https://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=ZTA0ThFuL3LhjBoSmkJi7q6KH45jxcI570l0pkn5UX20KxU0%2F3VRuNUf%2FjiK27E7BDnOuXW7JTdBd0eJiNDzdg%3D%3D&pageNo=1&numOfRows=10&startCreateDt=${TODAY}&endCreateDt=${TODAY}`,
    {
      method: "GET",
      headers: {
        // the content type header value is usually auto-set
        // depending on the request body
        "Content-Type": "text/plain;charset=UTF-8",
      },
      mode: "cors",
      credentials: "same-origin", // omit, include
      cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
      redirect: "follow", // manual, error
      integrity: "", // a hash, like "sha256-abcdef1234567890"
      keepalive: false, // true
      signal: undefined, // AbortController to abort request
    }
  )
    .then(function (response) {
      return response.text();
    })
    .then(function (response) {
      const parser = new DOMParser();
      const xml = parser.parseFromString(response, "application/xml");
      console.log(xml);
    });
}

function checktime() {
  getweather();
}

function init() {
  checktime();
}

init();
