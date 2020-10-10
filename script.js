const id = 'j-hernandez';

function updateUI(info) {
    console.log('ui updated');
}

function showError(error) {
    console.error('something went wrong');
}

function getLocationURL(locationArray) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${locationArray[0]},${locationArray[1]},USA&APPID=2f66e52e225a3d7ce8bf18dd58e5a6fc`;
}



document.getElementById('get-user').addEventListener('click', function() {
    $.getJSON({
        url: `https://api.github.com/users/${id}`,
        success: function(info) {
            document.getElementById('user').innerHTML = JSON.stringify(info);
            $.getJSON({
                url: getLocationURL(info.location.split(', ')),
                success: function(weather) {
                    document.getElementById('weather').innerHTML = JSON.stringify(weather);
                },
                error: showError
            })
        },
        error: showError,
    })
});

