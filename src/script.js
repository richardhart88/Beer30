// Map info
var L;

window.onload = function() {
    L.mapquest.key = '0aTGr9Al3b2iHwwRD6018q6Uc6zLP4Ij';

    // 'map' refers to a <div> element with the ID map
var map = L.mapquest.map('map', {
    center: [38.584487, -90.266699],
    layers: L.mapquest.tileLayer('hybrid'),
    zoom: 11
});

// moves controls
map.addControl(L.mapquest.control({ 
    position: 'bottomleft' 
}));

//default marker
L.marker([38.584487, -90.266699], {
    icon: L.mapquest.icons.marker({
        primaryColor: '#22407F',
        secondaryColor: '#3B5998',
        shadow: true,
        size: 'sm',
        symbol: 'A'
    })
})

.bindPopup('Welcome to St. Louis! <br> Find more info <a href="https://www.stlouis-mo.gov/">  here! </a>')
.addTo(map);
}


// search bar using JS
const breweryList = document.getElementById('result');
const searchBar = document.getElementById('searchBar');
let brewerySpots = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();

    const filteredBreweries = brewerySpots.filter(data => {
        return (
        data.name.toLowerCase().includes(searchString) || 
        data.city.toLowerCase().includes(searchString) ||
        data.state.toLowerCase().includes(searchString)
        );
    });
    displayBreweries(filteredBreweries);
});

// retrieving data from openbrewerydb.org
const loadBreweries = async () => {
    try {
        const res = await fetch('https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/master/breweries.json');
        brewerySpots = await res.json();
        displayBreweries(brewerySpots);
    } catch (err) {
        console.error(err);
    }
};

const displayBreweries = (breweries) => {
    const htmlString = breweries
        .map((brewery) => {
            return `
            <li class="brewery col">
                <h3><a href="${brewery.website_url}">${brewery.name}</a></h3>
                <address> Location: ${brewery.street}, 
                ${brewery.city}, ${brewery.state}</address>
                <p>Type: ${brewery.brewery_type}</p>
                <a href="${brewery.latitude},${brewery.longitude}"><i style='font-size:24px' class='fas' id='breweryMarker'>&#xf041;</i></a>
            </li>`
        })
        .join('');
    breweryList.innerHTML = htmlString;
};

loadBreweries();

let breweryMarker = document.getElementById('breweryMarker');
breweryMarker.addEventListener('click', )

//puts the breweries into a dropdown menu. 
let dropdown = document.getElementById('breweries-dropdown');
dropdown.length = 0;

let defaultOption = document.createElement('option');
defaultOption.text = 'Choose a brewery!';

dropdown.add(defaultOption);
dropdown.selectedIndex = 0;

const url = 'https://raw.githubusercontent.com/openbrewerydb/openbrewerydb/master/breweries.json';

const request = new XMLHttpRequest();
request.open('GET', url, true);

request.onload = function() {
    if (request.status === 200) {
        const data = JSON.parse(request.responseText);
        let option;
        for (let i = 0; i < data.length; i++) {
            option = document.createElement('option');
            option.text = data[i].name;
            option.value = data[i].city;
            dropdown.add(option);
        }
    } else {
        alert("This service is currently unavailable.")
    }   
}

request.onerror = function() {
    console.error('An error occurred fetching the JSON from ' + url);
};

request.send();

function getParameter( parameterName ) {
    let parameters = new URLSearchParams( window.location.search );
    return parameters.get( parameterName );
};

$("#submitForm").click(function() {
    alert("The Form has been Submitted.");
});