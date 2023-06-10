import React, { useState, useEffect } from 'react';
import './style.css';

import { BreadCrumbs } from '../../components';
import { MealRecipeUrl } from '../../urls';

const Recipe = () => {

    const [ mealId, setMealId ] = useState('')
    const [ mealDetails, setMealDetails ] = useState([])
    const [ ingridients, setIngridients ] = useState([]);

    const fetchMealRecipe = (meal) => {
        fetch(MealRecipeUrl(meal))
            .then(resp => resp.json())
            .then(data => setMealDetails([...data.meals]))
            .catch(err => console.error(`Error due fetch recipe for meal: ${ err }`))
    }

    useEffect(() => {
        if(mealDetails && mealDetails.length !== 0) {
            // eslint-disable-next-line
            Object.entries(mealDetails[0]).map(([key, value]) => {
                if(key.startsWith('strIngredient') && ( value !== null && value !== '' && value !== ' ')) {
                    setIngridients(state => [...state, value])
                }
            })
        }
    }, [mealDetails])

    useEffect(() => {
        mealId !== '' && fetchMealRecipe(mealId)
    }, [mealId])

    // get meal id from current url
    useEffect(() => {
        let array = window.location.href.split('/')
        setMealId(array[array.length - 2])
    }, [])

    return (
        <div className={'recipePage'}>
            <BreadCrumbs />

            <div className={'recipePage__name'}>
                <h3>{ mealDetails && mealDetails.length !== 0 && mealDetails[0]['strMeal'] }</h3>
            
                <img 
                    src={mealDetails && mealDetails.length !== 0 && mealDetails[0]['strMealThumb']} 
                    alt={"meal_img"} 
                />
            </div>

            {/* ingridients */}
            <h4>Ingridients:</h4>

            <ul>
                {
                    ingridients && ingridients.length !== 0 &&
                        ingridients.map((item, ind) => <li key={`ingridient_${ind}`}>{item}</li>)
                }
            </ul>

            {/* instructions */}
            <h4>Instructions:</h4>

            <p>{ mealDetails && mealDetails.length !== 0 && mealDetails[0]['strInstructions'] }</p>

            {/* original source */}
            {
                mealDetails && mealDetails.length !== 0 && 
                mealDetails[0]['strSource'] !== "" && mealDetails[0]['strSource'] !== " " && mealDetails[0]['strSource'] !== null &&
                    <div className={'recipePage__source'}>
                        <span><b>Originally from: </b></span>
                        {/* eslint-disable-next-line */}
                        <a href={`${mealDetails[0]['strSource']}`} target={'_blank'}><i>{ mealDetails[0]['strSource'] }</i></a>
                    </div>
            }
        </div>
    )
};

export default Recipe;