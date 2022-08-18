function userInput() {
    let url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/timeline?location=India,guntur,52201&aggregateHours=24&contentType=json&key=FB24MC8SH3B68KPDYQBEXYWJQ';
    fetch(url)
        .then(response => {

            return response.json();

        })
        .then(data => {
            console.log(data);
        })
        .catch()

}