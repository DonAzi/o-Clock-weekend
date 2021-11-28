setInterval(setClock, 1000);
const secHand = document.querySelector("[data-second-hand]");
const minHand = document.querySelector("[data-minute-hand]");
const hrHand = document.querySelector("[data-hour-hand]");

function setClock() {
  const crntDate = new Date();
  const secRatio = crntDate.getSeconds() / 60;
  const minRatio = (secRatio + crntDate.getMinutes()) / 60;
  const hrsRatio = (minRatio + crntDate.getHours()) / 12;
  setRotation(secHand, secRatio);
  setRotation(minHand, minRatio);
  setRotation(hrHand, hrsRatio);
}

function setRotation(element, rotatioRation) {
  element.style.setProperty("--rotation", rotatioRation * 360);
}

setClock();
