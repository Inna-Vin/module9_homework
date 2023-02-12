// Напишите код приложения, интерфейс которого представляет собой 2 input и кнопку submit. В input можно ввести любое число.
// При клике на кнопку происходит следующее:
// Если оба числа не попадают в диапазон от 100 до 300 или введено не число — выводить ниже текст «одно из чисел вне диапазона от 100 до 300»;
// Если числа попадают в диапазон от 100 до 300 — сделать запрос c помощью fetch по URL https://picsum.photos/200/300, где первое число — ширина картинки, второе — высота.

function rangeNumber() {
  const inputFirst = document.querySelector('#input1');
  const inputSecond = document.querySelector('#input2');
  const button = document.querySelector('#button');
  const image = document.querySelector ('.image');
  
  button.addEventListener("click", sendRequest)
  
  function sendRequest () {
    if (numberCheck()) {
      fetch (`https://picsum.photos/${inputFirst.value}/${inputSecond.value}`)
      .then(response => {
        return response
      })
      .then(data => {
        console.log(data)
        image.innerHTML = `<img src="${data.url}">`;
      })
      .catch(() => {
        image.innerText = 'произошла ошибка'
      })
    }
  }
  
  function numberCheck () {
    if (inputFirst.value < 100 || inputFirst.value > 300) {
      image.innerText = 'одно из чисел вне диапазона от 100 до 300';
    } else if (inputSecond.value < 100 || inputSecond.value > 300) {
      image.innerText = 'одно из чисел вне диапазона от 100 до 300';
    } else 
      return true; 
  }
   
}

document.addEventListener ("DOMContentLoaded", rangeNumber);