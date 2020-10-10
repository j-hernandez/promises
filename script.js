const id = 'j-hernandez';

function updateUI(info) {
    document.getElementById('weather').innerHTML = JSON.stringify(info);
}

function showError(error) {
    console.error('something went wrong');
}

function getLocationURL(locationArray) {
    return `https://api.openweakkkksdlskthermap.org/data/2.5/forecast?q=${locationArray[0]},${locationArray[1]},USA&APPID=2f66e52e225a3d7ce8bf18dd58e5a6fc`;
}

function getUser(id) {
    return new Promise(function (resolve, reject) {
        $.getJSON({
            url: `https://api.github.com/users/${id}`,
            success: function(userInfo) {
                // This is actually getWeather()
                // and we're passing in the location
                // from the user object so that 
                // we can look it up successfully
                resolve(userInfo.location.split(', '));
            },
            error: reject
        })
    })
}

function getWeather(location) {
    return new Promise(function (resolve, reject) {
        $.getJSON({
            url: getLocationURL(location),
            success: resolve,
            error: reject
        })
    })
}

// Click handler 
document.getElementById('get-user').addEventListener('click', function() {
    // 
    getUser('j-hernandez')
        // I've got data from github, lets pass it to getWeather
        .then(getWeather) // getWeather(location)
        // I've got weather data, now update the UI
        .then(function (weather) {
            updateUI(weather);
        })
        // Any errors that show up in the above functions will get caught here
        .catch(showError);
});


