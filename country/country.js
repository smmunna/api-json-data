const countryList = () =>{
    fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>displayCountry(data))
}

const displayCountry = country =>{
    //console.log(country)

    // forEach/map for load All data's from country Apis
    country.forEach(countries => {
        const countriesList = document.getElementById('countries');

        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');
        countryCard.innerHTML = `
            <h3>Name: ${countries.name.common}</h3>
            <p>Capital: ${countries.capital ? countries.capital[0]:'No Capital City'}</p>
            <button onclick="countryDetails('${countries.cca2}')">Country Details</button>
        `
        countriesList.appendChild(countryCard);


    });
}

const countryDetails = code =>{
    const ccode = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(ccode)
        .then(res=>res.json())
        .then(data=>displayFlags(data));
}

const displayFlags = flags =>{
    const flagsUrl = flags[0].flags.png;
    const cname = flags[0].name.common;
    const includeFlags = document.getElementById('country-details');
    includeFlags.innerHTML = `
        <h2>Name: ${cname} </h2>
        <img src="${flagsUrl}" >
    `
}

countryList();