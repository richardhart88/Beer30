
function initMap() {

    //map options
    var options = {
        center: {lat: 38.614, lng: -90.197},
        zoom: 12,
        mapID: '429960fa87fc711f'
    }

    map = new google.maps.Map(document.getElementById('map'), options);
        
    //marker
    const marker = new google.maps.Marker({
        position:{lat: 38.6149, lng: -90.1976},
        map:map
    
    });

};

// const breweryUrl = 'https://api.openbrewerydb.org/breweries';

// async function getBreweries() {
//     const response = await fetch(breweryUrl);
//     const data = await response.json();
//     console.log(data);

//     var listOfBreweries ="";

//     data.forEach(function(element) {
//         listOfBreweries += "<ul>" + "<li>"+ element.name + ', ' + element.city + ', ' + element.state + '.' + "</li>" + "</ul>"
//     });

//     $('breweries').append(listOfBreweries)
// };

// getBreweries();

fetch("https://api.openbrewerydb.org/breweries")
    .then(response => response.json())
    .then(data => {
            console.log(data)
            document.querySelector("#breweries").innerText = data
    })

