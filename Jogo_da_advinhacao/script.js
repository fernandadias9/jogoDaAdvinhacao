const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const randomNumber = Math.round(Math.random() * 10);
let attempts = 1;

function toTry(event) {
  event.preventDefault(); // não faça o padrão, o padrão aqui seria atualizar a página

  const inputNumber = document.querySelector("#inputNumber");

  if (Number(inputNumber.value) == randomNumber) {
    screen1.classList.add("hide");
    screen2.classList.remove("hide");

    document
      .querySelector(".screen2 h2")
      .innerText = `Acertou em ${attempts} tentativas.`
  }

  inputNumber.value = "";
  attempts++;
}

const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");

btnTry.addEventListener("click", toTry);
btnReset.addEventListener("click", function () {
  screen1.classList.remove("hide");
  screen2.classList.add("hide");
  attempts = 1;
});