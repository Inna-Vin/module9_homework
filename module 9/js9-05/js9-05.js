function rangeNumber() {
  
  const inputFirst = document.querySelector(".inputFirst");
  const inputSecond = document.querySelector(".inputSecond");
  const button = document.querySelector(".button");
  const imageDiv = document.querySelector(".imageDiv");
  const localData = localStorage.getItem('url', 'data');

  
  button.addEventListener ("click", async () => {
          if (inputFirst.value < 1 || inputFirst.value > 10) {
        if (inputSecond.value < 1 || inputSecond.value > 10 ) {
           imageDiv.innerText = "Номер страницы и лимит вне диапазона от 1 до 10"
        } else {
          imageDiv.innerText = "Номер страницы вне диапазона от 1 до 10"
        }
     } else  if (inputSecond.value < 1 || inputSecond.value > 10 ) {
          imageDiv.innerText = "Лимит вне диапазона от 1 до 10" 
        } else {
          await sendRequest()
        }
       
  })
  
  
  function sendRequest() {
    // if (checkNumber()){
      fetch (`https://picsum.photos/v2/list?page=${inputFirst.value}&limit=${inputSecond.value}`)
      .then(response => {
        return response.json()
      })
      .then (data => {
        console.log(data)
        initImages(data);
        localStorage.setItem('url', JSON.stringify(data));
      })
    }
  
    if (localData) {
    initImages(JSON.parse(localData))
  }
 // }
  
    // function checkNumber() {
    //   if (inputFirst.value < 1 || inputFirst.value > 10) {
    //     if (inputSecond.value < 1 || inputSecond.value > 10 ) {
    //        imageDiv.innerText = "Номер страницы и лимит вне диапазона от 1 до 10"
    //     } else {
    //       imageDiv.innerText = "Номер страницы вне диапазона от 1 до 10"
    //     }
    //  } else  if (inputSecond.value < 1 || inputSecond.value > 10 ) {
    //       imageDiv.innerText = "Лимит вне диапазона от 1 до 10" 
    //     } else
    //       return true
    //   } 


      function initImages (data) { 
         let htmlImages = ''
         data.forEach (item => {
         htmlImages += `<div class="image-item"><img src ="${item.download_url}"</div>`;
      })
         imageDiv.innerHTML = htmlImages
      }
  
}  


document.addEventListener("DOMContentLoaded", rangeNumber)