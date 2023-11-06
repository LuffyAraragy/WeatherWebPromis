//console.log("alax");
//import Swiper from "swiper";
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// Убрать
import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();




// Сделать делегирование на кнопки
// let city = "";
// London, Moscow, Berlin, Shanghai, Beijing
// document.getElementById("button1").onclick = function() {
//     city = 'London';
    
// };

// document.getElementById("button2").onclick = function() {
//     city = 'Moscow';
    
// };

// document.getElementById("button3").onclick = function() {
//     city = 'Berlin';
    
// };

// document.getElementById("button4").onclick = function() {
//     city = 'Frankfurt';
    
// };

// document.getElementById("button5").onclick = function() {
//     city = 'Shanghai';

    
// };

// const buttons = document.querySelectorAll('.button');
//       buttons.forEach(button => {
//         button.addEventListener('click', () => {
//             fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96ecd3f33dcc527de032893cda86702c`)
//             .then(function (resp){ return resp.json() })
//             .then(function (data) {
//                 console.log(data);
//                 document.querySelector('.wind').innerHTML = data.wind.speed;
//                 document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273);
//             })
//             .catch(function () {
                
//             });
//         });
//       });


      const buttonContainer = document.getElementById('button-container');

      buttonContainer.addEventListener('click', function(event) {
        if (event.target.className === 'button') {
          // Вы можете выполнить здесь код, связанный с кнопкой, которая была нажата
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${event.target.textContent}&appid=96ecd3f33dcc527de032893cda86702c`)
            .then(function (resp){ return resp.json() })
            .then(function (data) {
                console.log(data);
                document.querySelector('.wind').innerHTML = data.wind.speed + " М/с";
                document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + "&deg" ;
            })
            .catch(function () {
                
            });
        }
      });


      let inputVal;
      document.querySelector(".input-button").onclick = function(){
        inputVal = document.querySelector("input").value;
        console.log(inputVal);
        document.querySelector('.text-information').innerHTML = inputVal;

        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=96ecd3f33dcc527de032893cda86702c`)
            .then(function (resp){ return resp.json() })
            .then(function (data) {
                console.log(data);
                document.querySelector('.wind').innerHTML = data.wind.speed + " М/с";
                document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + "&deg" ;
            })
            .catch(function () {
                
            });
            document.querySelector("input").value = "";

      }

      
// fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96ecd3f33dcc527de032893cda86702c`)
//     .then(function (resp){ return resp.json() })
//     .then(function (data) {
//         console.log(data);
//         document.querySelector('.wind').innerHTML = data.wind.speed;
//         document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273);
//     })
//     .catch(function () {

//     });


//   Cors запрещает доступ к ресурсам сайта



// const axios = require('axios');

// Ваш код для задач Gulp   


// gulp.task('exampleTask', function() {
//   axios.get('https://example.com/api/data')
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(error => {
//       console.error('Ошибка при выполнении запроса:', error);
//     });
// });

// const axios = require('axios');
// const cheerio = require('cheerio');

// axios.get('https://kakoyprazdnik.com').then(html => {
//     const $ = cheerio.load(html.data)
//     let text = ''
//     $('#bloktxt > h4').each((i, elem) => {
//         text += `${$(elem).text()}\n`
        
//     })
//     console.log(text);
// })

