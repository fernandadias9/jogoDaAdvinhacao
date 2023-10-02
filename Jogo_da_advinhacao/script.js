// variáveis
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const btnTry = document.querySelector("#btnTry");
const btnReset = document.querySelector("#btnReset");
let randomNumber = Math.round(Math.random() * 10);
let attempts = 1;

// eventos
btnTry.addEventListener("click", toTry);
btnReset.addEventListener("click", resetClick);
document.addEventListener('keydown', enterToReset);

// funções
function toTry(event) {
  event.preventDefault(); // não faça o padrão, o padrão aqui seria atualizar a página

  const inputNumber = document.querySelector("#inputNumber");
  
  if (Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10 || inputNumber.value == ""){
    alert("Por favor insira um número entre 0 e 10.");
  }

  if (Number(inputNumber.value) == randomNumber) {
        toggleScreen();
    
        screen2.querySelector(" h2")
          .innerText = `Acertou em ${attempts} tentativas.`
      }
    
      if (inputNumber.value != "" && Number(inputNumber.value) >= 0 && Number(inputNumber.value) <= 10){
        attempts++;     
      }     
  inputNumber.value = ""; 
}

function resetClick() {
  toggleScreen();
  attempts = 1;
  randomNumber = Math.round(Math.random() * 10);
}

function toggleScreen () {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

function enterToReset(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    resetClick();
  }
}
