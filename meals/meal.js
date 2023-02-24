const getMeal = () =>{
    fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=fish')
        .then(res=> res.json())
        .then(data=>displayMeals(data));
}
// Display Meals
const displayMeals = (meals) =>{
  
    const mealList = meals.meals;
    
    // Main DIV;
    const colListDiv = document.getElementById('col-list');

    mealList.forEach(meals=>{
        // Making the DIV;
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card h-100">
            <img src="${meals.strMealThumb}" class="card-img-top" alt="${meals.strMeal}">
                <div class="card-body">
                    <h5 class="card-title">${meals.strMeal}</h5>
                    <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, inventore.</p>
                </div>
        </div>
    `
    colListDiv.appendChild(div);
    })
}
// First Function Call;
getMeal();