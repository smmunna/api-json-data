const countryList = () =>{
    fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>displayCountry(data))
}

const displayCountry = country =>{
    //console.log(country)

    // forEach for load All data's from country Apis
    country.forEach(countries => {
        console.log(countries)
    });
}

countryList();