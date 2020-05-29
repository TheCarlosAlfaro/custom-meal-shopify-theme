console.log('My custom JS is working');

const sideOptions = {
  carbohydrates: {
    option1: {
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
    result.textContent = `You like ${event.target.tagName}`;
  }
  console.log(
    event.target.options[event.target.options.selectedIndex].dataset.option
  );
});
