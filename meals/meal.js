const getMeal = (foodItem) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodItem}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data));
}
// Display Meals
const displayMeals = (meals) => {
   
    const mealList = meals.meals;
    //console.log(mealList[0].idMeal);
    // Main DIV;
    const colListDiv = document.getElementById('col-list');
    colListDiv.innerHTML = '';
    mealList.forEach(meals => {
        //console.log(meals.idMeal)
        // Making the DIV;
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <img src="${meals.strMealThumb}" class="card-img-top" alt="${meals.strMeal}">
                    <div class="card-body">
                        <h5 class="card-title">${meals.strMeal}</h5>
                        <p class="card-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis, inventore.</p>
                        <button onclick="mealModal(${meals.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealModal">
                            Details
                        </button>
                    </div>
                <!-- Button trigger modal -->

        </div>
    `
        colListDiv.appendChild(div);
    })
}

const searchFood = () => {
    const input = document.getElementById('search').value;
    // First Function Call;
    getMeal(input);
}
// Working for Modal;
const mealModal = foodId =>{
    
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${foodId}`)
        .then(res=>res.json())
        .then(data=>displayModalMeal(data.meals[0]));
}

const displayModalMeal = meal =>{
   
    const mealHeading = document.getElementById('modalHeading');
    mealHeading.innerText = meal.strMeal;

    document.getElementById('meal-body').innerText =meal.strInstructions;
}


// By Deafult Values;
getMeal('fish')