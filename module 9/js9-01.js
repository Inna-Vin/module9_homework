//Задание 1
//Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать XML в JS-объект и выводить его в консоль.

let parser = new DOMParser();

let xmlString = 
`  <list>
  <student>
    <name lang="en">
      <first>Ivan</first>
      <second>Ivanov</second>
    </name>
    <age>35</age>
    <prof>teacher</prof>
  </student>
  <student>
    <name lang="ru">
      <first>Петр</first>
      <second>Петров</second>
    </name>
    <age>58</age>
    <prof>driver</prof>
  </student>
</list>`
//    list: [
//     { name: 'Ivan Ivanov', age: 35, prof: 'teacher', lang: 'en' },
//     { name: 'Петр Петров', age: 58, prof: 'driver', lang: 'ru' },
//   ]
// 

let xmlDOM = parser.parseFromString (xmlString, "text/xml");
const students = xmlDOM.querySelectorAll("student");

let listStudent = [];
students.forEach(item => {
   const name = item.querySelector("name");
  const lang = name.getAttribute("lang");
  const age = item.querySelector("age");
  const prof = item.querySelector("prof");
  
  listStudent.push({
    name: `${item.querySelector('first').textContent} ${item.querySelector('second').textContent}`,
    age: `${Number(age.textContent)}`,
    prof: `${prof.textContent}`,
    lang: `${lang}`
  })
  
   
});

console.log("list", listStudent);
