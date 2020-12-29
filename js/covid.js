const covidText = document.querySelector("js-covid");
const API_KEY_COVID = "ZTA0ThFuL3LhjBoSmkJi7q6KH45jxcI570l0pkn5UX20KxU0%2F3VRuNUf%2FjiK27E7BDnOuXW7JTdBd0eJiNDzdg%3D%3D";
const TODAY ="20201229"

function getweather() {
  fetch(
    `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19SidoInfStateJson?serviceKey=${API_KEY_COVID}&pageNo=1&numOfRows=10&startCreateDt=${TODAY}&endCreateDt=${TODAY}`
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      console.log(json);
    /**   const Temp = json.main.feels_like;
      const MaxTem = json.main.temp_max;
      const MinTem = json.main.temp_min;
      const local = json.name;
      localStorage.setItem(NowLocation, JSON.stringify(local));
      weather.innerText = `<오늘의 날씨>
      @ ${local} 
      온도 ${Temp}
      최고기온 ${MaxTem}
      최저기온 ${MinTem}
      `;  */
    });
}


function checktime() {

  getweather()
}

function init() {
  checktime();
}

init();
