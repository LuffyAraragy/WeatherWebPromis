import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const functionFetch = (nameCity) => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=96ecd3f33dcc527de032893cda86702c`)
      .then(function (resp){ return resp.json() })
      .then(function (data) {
          console.log(data);
          document.querySelector('.wind').innerHTML = data.wind.speed + " М/с";
          document.querySelector('.temperature').innerHTML = Math.round(data.main.temp - 273) + "&deg";
          document.querySelector('.text-information').innerHTML = nameCity;
      })
      .catch(function () {
          console.log("Ошибка" + `https://api.openweathermap.org/data/2.5/weather?q=${nameCity}&appid=96ecd3f33dcc527de032893cda86702c`);
      });
};

// London, Moscow, Berlin, Shanghai, Beijing
      const buttonContainer = document.getElementById('button-container');

      buttonContainer.addEventListener('click', function(event) {
        if (event.target.className === 'button') {
            functionFetch(event.target.textContent);
        }
      });

      document.querySelector(".input-button").onclick = function(){
        let inputVal = document.querySelector("input").value;   

        functionFetch(inputVal);
            document.querySelector("input").value = "";
      }