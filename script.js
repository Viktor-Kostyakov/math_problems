const mainInputElementDisplay = document.querySelector('.input-display');
const mainInputElementAddNumber = document.querySelector('.input-new-number');
const btnEnter = document.querySelector('.button-add-number');

let numStop = 0;

const functionSumm = (num) => {
  let c = 0;
  for (let i = 0; i < num; ++i) {
    let a = i / 3;
    let b = i / 5;
    if (a === Math.ceil(a)) {
      c += i;
    }
    if (b === Math.ceil(b)) {
      c += i;
    }
  }
  mainInputElementDisplay.value = c;
}

const clickFunction = () => {
  const num = Number(mainInputElementAddNumber.value.trim());
  if (num !== numStop && num !== 0) {
    functionSumm(num);
    numStop = num;
  };
}
    
btnEnter.addEventListener('click', clickFunction);
