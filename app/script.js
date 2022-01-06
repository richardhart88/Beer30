
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
.bindPopup('This is St. Louis! <a href="https://www.facebook.com"> Here is a link </a>')
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

const openBreweryDb = ("https://api.openbrewerydb.org/breweries")

showBreweries = breweries => {
    const breweriesDiv = document.querySelector("#breweries");
        breweries.forEach(data => {
            const breweryElement = document.createElement('li');
            breweryElement.innerText = `Brewery Name: ${data.name} + Location:  ${data.city}, ${data.state}`;
            breweriesDiv.append(breweryElement);
        })
}

fetch(openBreweryDb)
    .then(response => response.json())
    .then(data => showBreweries(data))
    .catch((err) => {
        console.err('Error: ', err);
    });

// document.querySelector("#newsletter").addEventListener("click", function(noCheck) {
//     document.getElementById("output-area").innerHTML += "Sorry! You cannot select this at this time!<br>";
//     noCheck.preventDefault();
// }, false);

function getParameter( parameterName ) {
    let parameters = new URLSearchParams( window.location.search );
    return parameters.get( parameterName );
};

//button to change background color
const btn = document.querySelector('.colorBtn');

function random(number) {
    return Math.floor(Math.random() * (number+1));
}

btn.addEventListener('click', () => {
    const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
    document.body.style.backgroundColor = rndCol;
});
