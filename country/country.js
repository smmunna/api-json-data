const countryList = () =>{
    fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>displayCountry(data))
}

const displayCountry = country =>{
    //console.log(country)

    // forEach/map for load All data's from country Apis
    country.forEach(countries => {
        console.log(countries)
        const countriesList = document.getElementById('countries');

        const countryCard = document.createElement('div');
        countryCard.classList.add('country-card');
        countryCard.innerHTML = `
            <h3>Name: ${countries.name.common}</h3>
            <p>Capital: ${countries.capital ? countries.capital[0]:'No Capital City'}</p>
        `
        countriesList.appendChild(countryCard);

    });
}

countryList();