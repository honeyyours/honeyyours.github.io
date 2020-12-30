const body = document.querySelector("body");

const Img_Number = 26;

function paintImg(ImgNumber) {
  const Img = new Image();
  Img.src = `background/${ImgNumber + 1}.jpg`;
  Img.classList.add("bgImage");
  body.appendChild(Img);
}

function genRandom() {
  const ranNum = Math.floor(Math.random() * Img_Number);
  console.log(ranNum);
  return ranNum;
}

function init() {
  const randomNum = genRandom();
  paintImg(randomNum);
}

init();
