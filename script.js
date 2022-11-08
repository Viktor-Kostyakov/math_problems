const mainInputElemntDisplay = document.querySelector('.input-display');
const mainInputElemntAddNumber = document.querySelector('.input-new-number');
const btnEnter = document.querySelector('.button-add-number');

let numVersion = 0;
  
const displayVision = (text) => {
    mainInputElemntDisplay.value = text;
}

const functionSumm = (num) => {
  let arr = [];

  for (let i = 0; i < num; ++i) {
    let a = i / 3;
    if (a === Math.ceil(a) && a !== 0) {
      arr.push(3*a);  
    }

    let b = i / 5;
    if (b === Math.ceil(b) && b !== 0) {
      arr.push(5*b);
    }
  }
  
  const summ = (arr) => {
    return arr.reduce((a, x) => a + x)
  }

  const abc = summ(arr);
  displayVision(abc);
}

const clickFunction = () => {
    const num = Number(mainInputElemntAddNumber.value.trim());
    if (num !== numVersion) {
    displayVision(num);
    functionSumm(num);
    numVersion = num;
  }
}
    
btnEnter.addEventListener('click', clickFunction);
