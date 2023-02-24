const getMeal = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res=> res.json())
        .then(data=>displayMeals(data));
}
// Display Meals
const displayMeals = (meals) =>{
    console.log(meals)
    
    // Main DIV;
    const colListDiv = document.getElementById('col-list');

    // Making the DIV;
    
}
// First Function Call;
getMeal();