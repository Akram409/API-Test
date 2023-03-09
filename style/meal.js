const loadData = (finding) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${finding}`
    fetch(url)
        .then(res => res.json())
        .then(data => DisplayMeal(data.meals))
}

const DisplayMeal = info => {
    const meal_box = document.getElementById('meal-container')
    meal_box.innerHTML = ''
    info.forEach(meal => {
        const box = document.createElement('div')
        box.classList.add('col')
        box.innerHTML = `
        <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque accusamus fuga consectetur ad, tempora ducimus incidunt perferendis sit sequi</p>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#SearchDetails">
              Details
            </button>
          <button type="button" class="btn btn-danger">Buy</button>
        </div>
      </div>
        `
        meal_box.appendChild(box)
    })
}

const search_input = () => {
    const text = document.getElementById("search_text").value
    loadData(text)
}

loadData('chi')