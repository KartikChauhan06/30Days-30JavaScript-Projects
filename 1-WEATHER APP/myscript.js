const apiKey = "a2c1ad39588fbc5073028a213e082443";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    const data= await response.json();

    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none"; 

    }
    else{
        //by default this will show the data that we have added in the html
        console.log(data); 

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + "km/h";

        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="images/clouds.png";
        }
        else if(data.weather[0].main == "Clear"){
            weatherIcon.src="images/clear.png";
        }
        else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="images/drizzle.png";
        }
        else if(data.weather[0].main == "Mist"){
            weatherIcon.src="images/mist.png";
        }
        else if(data.weather[0].main == "Rain"){
            weatherIcon.src="images/rain.png";
        }
        else if(data.weather[0].main == "Snow"){
            weatherIcon.src="images/snow.png";
        }

        //to display the weather uncomment this and comment the console.log(data)above
        // document.querySelector(".weather").style.display="block";
        if(data){
            document.querySelector(".error").style.display="none"; 
            document.querySelector(".weather").style.display="block"; 
        }
    }

    
}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
// Listen for Enter key press
searchBox.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      checkWeather(searchBox.value);
    }
});
  
  
  
  