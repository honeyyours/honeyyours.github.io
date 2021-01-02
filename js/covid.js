const covidText = document.querySelector("js-covid");

const API_KEY_COVID =
  "ZTA0ThFuL3LhjBoSmkJi7q6KH45jxcI570l0pkn5UX20KxU0%2F3VRuNUf%2FjiK27E7BDnOuXW7JTdBd0eJiNDzdg%3D%3D";
const TODAY = "20201229";

function getweather() {
  fetch(
    `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${API_KEY_COVID}&pageNo=1&numOfRows=10&startCreateDt=${TODAY}&endCreateDt=${TODAY}`,
    { method: "get", mode: "same-origin" }
  ).then(function (response) {
    console.log(response);
  });
}

function checktime() {
  getweather();
}

function init() {
  checktime();
}

init();
