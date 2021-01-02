//promise 를 만들때에는 function이 있어야 한다 forEach 처럼 executor
//promise 를 호출할때 다른 function과 함께 실행한다

amIsexy = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("foo");
  }, 300);
});

console.log(amIsexy);

// 값은 <pending>
// setTimeout(A, B) A라는 함수를 B 시간이 완료되면 실행함, 함수의 내부 {}이거를 리턴하지.
// 여기에 resolve() 안에 있는 값을 상위 function에 return 하는것이다.

// **진화단계
// arrow 를 써서 function을 지울 수 있다.

amIsexy = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("foo");
  }, 300);
});

console.log(amIsexy);

// allow 가 있다는 것은 그 직전에 함수가 있었다는 것
// **한번 더 진화

const amIsexy = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "YEsYEsYes");}

setInterval(console.log, 1000, amIsexy);

//

const amIsexy = new Promise((resolve, reject) => {
  setTimeout(resolve, 2000, "YEsYEsYes");
});

amIsexy.then((res) => console.log(res)).catch((err) => console.log(err));
