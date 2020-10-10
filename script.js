const id = 'j-hernandez';

function updateUI(info) {
    document.getElementById('weather').innerHTML = JSON.stringify(info);
}

function showError(error) {
    console.error('something went wrong');
}

function getLocationURL(locationArray) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${locationArray[0]},${locationArray[1]},USA&APPID=2f66e52e225a3d7ce8bf18dd58e5a6fc`;
}

function getUser(id) {
    return new Promise(function (resolve, reject) {
        $.getJSON({
            url: `https://api.github.com/users/${id}`,
            success: resolve,
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
    // Lets work with our new getUser function which returns a promise
    const userPromise = getUser('j-hernandez');
    // User Promise has been fulfilled
    userPromise.then(function (userInfo) {
        const weatherPromise = getWeather(userInfo.location.split(', '));
        weatherPromise.then(function(weather) {
            updateUI(weather);
        });
        weatherPromise.catch(showError);
    });
    // User Promise has been rejected
    userPromise.catch(showError);
});


