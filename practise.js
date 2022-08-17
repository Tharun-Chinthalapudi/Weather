function userInput() {
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let district = document.getElementById("district").value;
    let locator = country + "-" + state + "-" + district;
    console.log(locator);
    let url = 'http://api.weatherstack.com/current?access_key=8691e7b0b29f29c8e9272c1fa6ed9e99&query=' + locator;
    fetch(url)
        .then(response => {
            return response.json();

        }).then(data => {
            console.log(data);
            console.log(data.current.weather_descriptions);
            console.log(data.current.temperature);
            document.getElementById("demo").innerHTML = data.current.temperature + "°C";
            const weather_des = new Array(data.current.weather_descriptions[0]);
            console.log(weather_des[0]);
            let wes_des = weather_des[0];
            console.log(wes_des);
            document.getElementById("c").innerHTML = weather_des[0];
        })
        .catch();

}