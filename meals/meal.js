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
        console.log(meals)
        // Making the DIV;
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
        <div class="card h-100">
            <img src="${meals.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                </div>
        </div>
    `
    colListDiv.appendChild(div);
    })
}
// First Function Call;
getMeal();