
// Fonction appelée lors du click du bouton
function start() {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}
function actualise() {
  // Création de l'objet apiWeather
  var city = document.getElementById('city-input').value;
  const apiWeather = new API_WEATHER(city);
  // Appel de la fonction fetchTodayForecast

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;

      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function getThreeDayForecast(){
  const apiWeather = new API_WEATHER();
  apiWeather
    .fetchThreeDayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      for(let i=1;i<4;i++) // la boucle for de 1 à 3 permet de parcourir les jour voulu, 0 étant ajrd
      {
        const main = data.list[i].weather[0].main;
        const description = data.list[i].weather[0].description;
        const temp = data.list[i].main.temp;
        const icon = apiWeather.getHTMLElementFromIcon(data.list[i].weather[0].icon);
        if(i==1)
        {
          document.getElementById('tomorrow-forecast-main').innerHTML = main;
          document.getElementById('tomorrow-forecast-more-info').innerHTML = description;
          document.getElementById('tomorrowicon-weather-container').innerHTML = icon;
          document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp}°C`;
        }

        if(i==2)
        {
          document.getElementById('tomorrow2-forecast-main').innerHTML = main;
          document.getElementById('tomorrow2-forecast-more-info').innerHTML = description;
          document.getElementById('tomorrow2icon-weather-container').innerHTML = icon;
          document.getElementById('tomorrow2-forecast-temp').innerHTML = `${temp}°C`;
        }

        if(i==3)
        {
          document.getElementById('tomorrow3-forecast-main').innerHTML = main;
          document.getElementById('tomorrow3-forecast-more-info').innerHTML = description;
          document.getElementById('tomorrow3icon-weather-container').innerHTML = icon;
          document.getElementById('tomorrow3-forecast-temp').innerHTML = `${temp}°C`;
        }

      }
      
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
  

}

