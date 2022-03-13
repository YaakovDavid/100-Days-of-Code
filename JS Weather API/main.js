
function weather () {
    const enteredZip = document.getElementById('enteredZip').value;
    console.log(enteredZip)
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${key}&q&q=${enteredZip}&days=7`) 
    .then(response  => {
        return response.json();
    })
    .then((current) => {
        const city = current.location.name;
        const state = current.location.region;
        const country = current.location.country;
        const fullTime = current.location.localtime_epoch;
        const convertDate = new Date(fullTime*1000)
        const readableTime = convertDate.toLocaleString();
        const removeTime = readableTime.split(",");
        const weatherBanner = current.current.condition.text;
        const humidity = current.current.humidity;

        document.getElementById('city').innerHTML = city.toString();
        document.getElementById('state').innerHTML = state.toString();
        document.getElementById('country').innerHTML = country.toString();
        document.getElementById('fulltime').innerHTML = removeTime[0].toString();
        document.getElementById('weatherBanner').innerHTML = weatherBanner.toString();
        document.getElementById('humidity').innerHTML = `${humidity.toString()}% Humidity`;
    })
}



