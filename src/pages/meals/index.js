import React, { useState, useEffect } from 'react';
import './style.css';
import { MealItem, BreadCrumbs } from '../../components';
import { CategoryMealsUrl } from '../../urls';

const Meals = () => {

    const [ category, setCategory ] = useState('')
    const [ mealsInfo, setMealsInfo ] = useState([])

    const fetchCategoryMeals = (categ) => {
        fetch(CategoryMealsUrl(categ))
            .then(resp => resp.json())
            .then(data => setMealsInfo([...data.meals]))
            .catch(err => console.error(`Error due fetch meals for category: ${ err }`))
    }

    useEffect(() => {
        category !== '' && fetchCategoryMeals(category)
    }, [ category ])

    // get category name from current url
    useEffect(() => {
        let array = window.location.href.split('/')
        setCategory(array[array.length - 2])
    }, [])

    return (
        <div className={'mealsList'}>
            <BreadCrumbs />

            <h5>{ category }</h5>

            <ul>
            {
                mealsInfo && mealsInfo.length !== 0 &&
                    mealsInfo.map((meal, ind) => <MealItem key={`meal_${ind}`} info={meal} />)
            }
            </ul>
        </div>
    )
};

export default Meals;