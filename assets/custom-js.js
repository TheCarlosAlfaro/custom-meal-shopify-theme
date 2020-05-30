console.log('My custom JS is working');

const sideOptions = {
  carbohydrates: {
    jazmineRice: {
      protein: 1,
      carbs: 11.2,
      fat: 0,
      calories: 51,
    },
  },
  vegetables: {},
};

const selectCarbElement = document.querySelector('#carbohydrates');

selectCarbElement.addEventListener('change', (event) => {
  const result = document.querySelector('#carb-details');
  if (event.target.value === '') {
    result.textContent = `Choose one option`;
  } else {
    result.innerHTML = `<span>${event.target.value}</span>
    <div>
    Protein: ${sideOptions.carbohydrates.jazmineRice.protein}
    </div>
    <div>
    Carbs: ${sideOptions.carbohydrates.jazmineRice.carbs}
    </div>
    <div>
    Fat: ${sideOptions.carbohydrates.jazmineRice.fat}
    </div>
    <div>
    Calories: ${sideOptions.carbohydrates.jazmineRice.calories}
    </div>
    `;
  }
  console.log(
    event.target.options[event.target.options.selectedIndex].dataset.option
  );
});
