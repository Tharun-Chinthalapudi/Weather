function userInput() {
    let country = document.getElementById("country").value;
    let state = document.getElementById("state").value;
    let district = document.getElementById("district").value;
    console.log(country, state, district);
    let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/timeline?location=${country},${state},${district},52201 &aggregateHours=24&contentType=json&key=FB24MC8SH3B68KPDYQBEXYWJQ`;
    fetch(url)
        .then(response => {

            return response.json();

        })
        .then(data => {
            console.log(data);
            console.log(data.latitude);
            document.getElementById("demo").innerHTML = "Latitude:" + data.latitude + "  " + "Longitude:  " + data.longitude;
        })
        .catch()

}