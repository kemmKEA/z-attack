// Mouseover på info-circles
document.querySelector("#info-circle-1").addEventListener("mouseover", highlight1);
document.querySelector("#info-circle-1").addEventListener("mouseout", unhighlight1);
document.querySelector("#info-circle-2").addEventListener("mouseover", highlight1);
document.querySelector("#info-circle-2").addEventListener("mouseout", unhighlight1);
document.querySelector("#info-circle-3").addEventListener("mouseover", highlight1);
document.querySelector("#info-circle-3").addEventListener("mouseout", unhighlight1);
document.querySelector("#info-circle-1").addEventListener("click", headInfo);
document.querySelector("#info-circle-2").addEventListener("click", kneeInfo);
document.querySelector("#info-circle-3").addEventListener("click", shoulderinfo);

// const circle1 = document.querySelector("#info-circle-1");
// const circle2 = document.querySelector("#info-circle-2");
// const circle3 = document.querySelector("#info-circle-3");

// circle1.addEventListener("mouseover", highlight1);
// circle1.addEventListener("mouseout", unhighlight1);
// circle2.addEventListener("mouseover", highlight1);
// circle2.addEventListener("mouseout", unhighlight1);
// circle3.addEventListener("mouseover", highlight1);
// circle3.addEventListener("mouseout", unhighlight1);
// circle1.addEventListener("click", headInfo);
// circle2.addEventListener("click", kneeInfo);
// circle3.addEventListener("click", shoulderinfo);

document.querySelector("#efficiency").addEventListener("animationend", clearEfficiency);
document.querySelector("#requirement").addEventListener("animationend", clearRequirement);

function highlight1() {
  console.log("highlight1");
  console.log(`This = ${this}`);
  console.log(`This.id = ${this.id}`);
  this.style.stroke = "white";
}
function unhighlight1() {
  // console.log("unhighlight1");
  this.style.stroke = "none";
}

function headInfo() {
  console.log("headInfo");

  document.querySelector(".info-text h2").textContent = "Hovedet!";
  document.querySelector(".info-text p").textContent = "Hovedet er en vigtig del af kroppen. Det er her, du tænker og føler.";

  // clearBox("#efficiency");
  document.querySelector("#efficiency").classList.add("slideInLeft");
  document.querySelector("#efficiency").classList.remove("hide");

  // clearBox("#requirement");
  document.querySelector("#requirement").classList.add("slideInRight");
  document.querySelector("#requirement").classList.remove("hide");

  document.querySelector("#efficiency").innerHTML = `
  <h3>Effektivitet</h3>
  <br>
  <p>Ethvert angreb mod hovedet er potentielt effektivt.</p>
  <p>Det er vigtigt at være effektiv, så du kan nå det, du gerne vil.</p>
  `;
  document.querySelector("#requirement").innerHTML = `
  <h3>Effektivitet</h3>
  <br>
  <p>Effektivitet er en vigtig del af at være menneske.</p>
  <p>Det er vigtigt at være effektiv, så du kan nå det, du gerne vil.</p>
  `;
}
function kneeInfo() {
  console.log("kneeInfo");

  document.querySelector(".info-text h2").textContent = "Knæet!";
  document.querySelector(".info-text p").textContent = "Knæet er en vigtig del af kroppen. Det er her, du tænker og føler.";

  // clearBox("#efficiency");
  document.querySelector("#efficiency").classList.add("slideInLeft");
  document.querySelector("#efficiency").classList.remove("hide");

  // clearBox("#requirement");
  document.querySelector("#requirement").classList.add("slideInRight");
  document.querySelector("#requirement").classList.remove("hide");

  document.querySelector("#efficiency").innerHTML = `
  <h3>Effektivitet</h3>
  <br>
  <p>Det er super effektivt.</p>
  <p>Det er vigtigt at være effektiv, så du kan nå det, du gerne vil.</p>
  `;
  document.querySelector("#requirement").innerHTML = `
  <h3>Effektivitet</h3>
  <br>
  <p>Effektivitet er en vigtig del af at være menneske.</p>
  <p>Det er vigtigt at være effektiv, så du kan nå det, du gerne vil.</p>
  `;
}
function shoulderinfo() {}

function clearEfficiency() {
  console.log("clearEfficiency");
  document.querySelector("#efficiency").classList.remove("slideInLeft");
}
function clearRequirement() {
  console.log("clearRequirement");
  document.querySelector("#requirement").classList.remove("slideInRight");
}



