//console.log("alax");
//import Swiper from "swiper";
import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

let city = "";
// London, Moscow, Berlin, Frankfurt, Shanghai, Beijing
document.getElementById("button1").onclick = function() {
    city = 'London';
    
};

document.getElementById("button2").onclick = function() {
    city = 'Moscow';
    
};

document.getElementById("button3").onclick = function() {
    city = 'Berlin';
    
};

document.getElementById("button4").onclick = function() {
    city = 'Frankfurt';
    
};

document.getElementById("button5").onclick = function() {
    city = 'Shanghai';

    
};

const buttons = document.querySelectorAll('.button');
      buttons.forEach(button => {
        button.addEventListener('click', () => {
            fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96ecd3f33dcc527de032893cda86702c`)
            .then(function (resp){ return resp.json() })
            .then(function (data) {
                //console.log(data);
                document.querySelector('.wind').innerHTML = data.wind.speed;
                document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273);
            })
            .catch(function () {
        
            });
        });
      });




// fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=96ecd3f33dcc527de032893cda86702c`)
//     .then(function (resp){ return resp.json() })
//     .then(function (data) {
//         console.log(data);
//         document.querySelector('.wind').innerHTML = data.wind.speed;
//         document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273);
//     })
//     .catch(function () {

//     });




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

