import React from 'react';
import './style.css';

const MealItem = (props) => {

    const { strMeal, strMealThumb, idMeal } = props.info;

    return (
        <div key={`meal_${idMeal}`} className={'mealItem'}>
            <img src={strMealThumb} alt={"meal_img"} />

            <h3>{ strMeal }</h3>

            <a href={`${idMeal}/recipe`}>Recipe</a>
        </div>
    )
};

export default MealItem;