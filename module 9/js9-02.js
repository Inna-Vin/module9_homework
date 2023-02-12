// Задание 2.
// Вам дана заготовка и результат, который вы должны получить. Ваша задача — написать код, который будет преобразовывать JSON в JS-объект и выводить его в консоль.

const strJson = `{
  "list": [
   {
    "name": "Petr",
    "age": "20",
    "prof": "mechanic"
   },
   {
    "name": "Vova",
    "age": "60",
    "prof": "pilot"
   }
  ]
 }`
 
 // {
 //   list: [
 //     { name: 'Petr', age: 20, prof: 'mechanic' },
 //     { name: 'Vova', age: 60, prof: 'pilot' },
 //   ]
 // }
 
 const jsonParse = JSON.parse (strJson);
 //console.log (jsonParse)
 
 let result = [];
 jsonParse.list.forEach(item => {
   result.push( {
    name: item.name,
    age: Number (item.age),
    prof: item.prof
  })
     
 });
 
 
 console.log (result)