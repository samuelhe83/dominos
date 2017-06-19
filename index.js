const side1 = document.querySelectorAll('#side1 .dot');
const side2 = document.querySelectorAll('#side2 .dot');

const dotsInput = document.querySelector('.create-domino input');
const submit = document.querySelector('.create-domino button');


function handleDots(e) {
  e.preventDefault();
  clearDots();
  const numberOfDots = parseInt(dotsInput.value);
  if (numberOfDots > 12) {
    return;
  }
  if (numberOfDots === 12) {
    createSide(6, side1);
    createSide(6, side2);
  } else {
    let side1Num = 7;
    let side2Num = 7;
    while (side1Num > 6 || side2Num > 6) {
      side1Num = Math.floor(Math.random() * numberOfDots);
      side2Num = numberOfDots - side1Num;
    }
    console.log(side1Num);
    console.log(side2Num);
    createSide(side1Num, side1);
    createSide(side2Num, side2);

  }

  function clearDots() {
    side1.forEach(dot => dot.style.visibility = 'hidden');
    side2.forEach(dot => dot.style.visibility = 'hidden');
  }


}

function createSide(number, side) {
  if (number === 0) {
    return;
  }

  const dotObj = {
    1: [5],
    2: [3, 7],
    3: [3, 5, 7],
    4: [1, 3, 7, 9],
    5: [1, 3, 5, 7, 9],
    6: [1, 3, 4, 6, 7, 9]
  };
  const dots = dotObj[number];
  console.log(dots);
  dots.forEach((dot) => side[dot - 1].style.visibility = 'visible');

}

submit.addEventListener('click', handleDots);
console.log(side2);
console.log(dotsInput);