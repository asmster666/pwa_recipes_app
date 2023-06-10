export const MealRecipeUrl = (meal) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal}`;

export const CategoryMealsUrl = (categ) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categ}`;

export const CategoriesUrl = () => "https://www.themealdb.com/api/json/v1/1/list.php?c=list";

export const MealByNameUrl = (name) => `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;