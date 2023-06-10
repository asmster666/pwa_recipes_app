import React from 'react';
import './style.css';

import { useNavigate } from "react-router-dom";

const SearchResult = (props) => {

    const navigate = useNavigate();
    const { idMeal, strMealThumb, strMeal, strCategory, strArea } = props.info[0];

    const handleOpenRecipe = () => {
        navigate(`${idMeal}/recipe`)
    }

    return (
        <div className={'searchResult'} onClick={handleOpenRecipe}>
            <img src={strMealThumb} alt={'search_result_meal'} style={{ maxWidth: '100px' }} />

            <div className={'searchResult__wrap'}>
                <p><b>{ strMeal }</b></p>

                <p>Category: { strCategory }</p>

                <p>Area: { strArea }</p>
            </div>
        </div>
    )
}

export default SearchResult;