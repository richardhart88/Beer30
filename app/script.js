
// search bar using jQuery

// $(document).ready(function() {
//     $('#searchBar').keyup(function(){
//         $('#result').html('');
//         var searchField = $('#searchBar').val();
//         var expression = new RegExp(searchField, "i");
//         $.getJSON(url, function(data){
//             $.each(data, function(key, value){
//                 if(value.name.search(expression) != -1 || 
//                     value.city.search(expression) != -1 ||
//                     value.website_url.search(expression) != -1)
//                 {
//                     $('#result').append('<li class="list-group-item"> ' +value.name+ ' <span class="text-muted"> | ' +value.city+ ', ' +value.state+ ' | <a href=' +value.website_url+ '>Visit their website!</a></span></li>');
//                 }
//             });
//         });
//     });
// });

// search bar using JS
const breweryList = document.getElementById('result');
const searchBar = document.getElementById('searchBar');
let brewerySpots = [];

searchBar.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase();


    const filteredBreweries = brewerySpots.filter(data => {
        return (
        data.name.toLowerCase().includes(searchString) || 
        data.city.toLowerCase().includes(searchString)
        );
    });
    displayBreweries(filteredBreweries);
});

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
                <p>${brewery.city}, ${brewery.state}</p>
            </li>`
        })
        .join('');
    breweryList.innerHTML = htmlString;
};

loadBreweries();

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

map.addControl(L.mapquest.control({ 
    position: 'bottomright' 
}));

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

// function openForm() {
//     document.getElementById("myForm").style.display = "block";
//     }

// function closeForm() {
//     document.getElementById("myForm").style.display = "none";
//     }

// const openBreweryDb = ("https://api.openbrewerydb.org/breweries")

// showBreweries = breweries => {
//     const breweriesDiv = document.querySelector("#breweries");
//         breweries.forEach(data => {
//             const breweryElement = document.createElement('li');
//             breweryElement.innerText = `Brewery Name: ${data.name} |  Location:  ${data.city}, ${data.state}`;
//             breweriesDiv.append(breweryElement);
//         })
// }

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
    // Reached the server, but it returned an error
    }   
}

request.onerror = function() {
    console.error('An error occurred fetching the JSON from ' + url);
};

request.send();

// fetch(openBreweryDb)
//     .then(response => response.json())
//     .then(data => showBreweries(data))

function getParameter( parameterName ) {
    let parameters = new URLSearchParams( window.location.search );
    return parameters.get( parameterName );
};

//button to change background color
// const btn = document.querySelector('.colorBtn');

// function random(number) {
//     return Math.floor(Math.random() * (number+1));
// }

// btn.addEventListener('click', () => {
//     const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//     document.body.style.backgroundColor = rndCol;
// });

$("#submitForm").click(function() {
    alert("The Form has been Submitted.");
 });