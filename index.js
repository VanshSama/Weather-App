const api = "3336a969a4f095342015505173dbfff1";

async function showWeather(){
    try{
        let latitude = 29.739168;
        let longitude = 75.627558;

        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}&units=metric`);
        const data = await response.json();

        console.log("weather Data :-", data);

                // Or
        // let newpara = document.createElement('p');
        // newpara.textContent = `${data?.main?.temp.toFixed(2)} *C`;

        // document.body.appendChild(newpara);

        // renderWeatherInfo(data);
    }
    catch(err){
            // Handle in your own way
        console.log('Error Occured :- ', err);
    }
};

console.log(showWeather());

function getLocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showLocation);
    }
    else{
        console.log('Does not support geolocation feature');
    }
};

function showLocation(position){
    let lat = position.coords.latitude;
    let longi = position.coords.longitude;

    console.log(lat);
    console.log(longi);
};

getLocation();