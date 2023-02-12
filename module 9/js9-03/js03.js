// Напишите код приложения, интерфейс которого представляет собой input и кнопку. В input можно ввести любое число. При клике на кнопку происходит следующее:
// Если число не попадает в диапазон от 1 до 10 — выводить ниже текст «число вне диапазона от 1 до 10».
// Если число попадает в диапазон от 1 до 10 — сделать запрос c помощью XHR по URL https://picsum.photos/v2/list?limit=10, где get-параметр limit — это введённое число.

function rangeNumber() {
  const input = document.querySelector ('.input-number');
  const button = document.querySelector ('.button-number');
  const image = document.querySelector ('.image');
  //const value = +document.querySelector('#input').value;

  
  button.addEventListener ('click', sendRequest);
  
  function sendRequest() {
    if (input.value > 10 || input.value < 1) {
      addImage('число вне диапазона от 1 до 10');
    } else {
      let xhr = new XMLHttpRequest();
      xhr.open("GET", `https://picsum.photos/v2/list?limit=${input.value}`);
      xhr.send();
      
      xhr.onerror = function () {
        addImage('Произошла ошибка запроса');
      }
      
      xhr.onload = function () {
        if (xhr.status == 200){
          let galery = JSON.parse(xhr.response);
          initImages (galery);
          //console.log(galery) просмотр нужных для вывода св-в (н-р: download_url)
        }
      }
    }
  }
            
      function initImages (galery) { 
         let htmlImages = ''
         galery.forEach (item => {
         htmlImages += `<div class="image-item"><img src ="${item.download_url}"</div>`;
      })
         addImage(htmlImages)
      }
  
  function addImage(message) {
    image.innerHTML = message;
  } 
}


document.addEventListener("DOMContentLoaded", rangeNumber);