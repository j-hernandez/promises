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

function getUser(id, successCallback, failureCallback) {
    $.getJSON({
        url: `https://api.github.com/users/${id}`,
        success: successCallback,
        error: failureCallback
    })
}

function getWeather(location, successCallback, failureCallback) {
    $.getJSON({
        url: getLocationURL(location),
        success: successCallback,
        error: failureCallback
    })
}

document.getElementById('get-user').addEventListener('click', function() {
    getUser('j-hernandez', function(userInfo) {
        getWeather(userInfo.location.split(', '), function(weather) {updateUI(weather)
        }, showError)
    }, showError)
});
