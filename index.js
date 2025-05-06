async function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  window.alert(`Your Location: Latitude: ${latitude}, Longitude: ${longitude}`);

  showWeather(latitude, longitude);

}

async function showWeather(latitude, longitude){
  const api_key="24254cfe66d642ab8f860dbe4d82dff5";

  const api_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}&units=metric`;

  try{

    //fetches the users weather using the users coordinates
    const res = await fetch(api_URL);
    const data = await res.json();

    window.alert(`Weather: ${data.main.temp} `);

    }catch(error){

    window.alert("Error fetching the weather");

    }

}

//error callback function
function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            window.alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            window.alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            window.alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            window.alert("An unknown error occurred.");
            break;
    }
}

function showWeatherAndLocation(){
  window.onload = () =>  {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        window.alert("Geolocation is not supported by this browser.");
    }
  }
}

function createModal(){

}

showWeatherAndLocation();




