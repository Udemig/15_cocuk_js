// ! Html'den elemanları Js kısmına çek
var elements = {
  form: document.querySelector("form"),
  searchBtn: document.querySelector("#search-btn"),
  fullDate: document.querySelector(".full-date"),
  time: document.querySelector(".time"),
  city: document.querySelector(".city"),
  status: document.querySelector(".status"),
  img: document.querySelector(".icon img"),
  degree: document.querySelector(".degree span"),
  feel: document.querySelector(".feel"),
  hum: document.querySelector(".hum"),
  wind: document.querySelector(".wind"),
  sunrise: document.querySelector(".sunrise"),
  sunset: document.querySelector(".sunset"),
  max: document.querySelector(".max"),
  min: document.querySelector(".min"),
};

// Form gönderildiğinde çalışacak fonksiyon
elements.form.addEventListener("submit", function (event) {
  // Sayfa yenilemesini engelle
  event.preventDefault();

  // Inputa girilen şehir adını al
  var city = event.target[0].value;

  // Elde edilen şehir adı ile api isteği at
});

// Şehir adına göre api isteği atan fonksiyon

function getWeatherData(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0462c30b337632cc213ba696f4c5ff91`
  )
    .then((res) => res.json())
    .then((data) => console.log(data));
}

getWeatherData("Stockholm");
