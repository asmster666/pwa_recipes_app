import React, { useState, useEffect } from 'react';
import './style.css';

import { SearchIcon } from '../../assets/svg';
import { SearchResult } from '../../components';
import { MealByNameUrl } from '../../urls';

const Search = () => {

    const [ meal, setMeal ] = useState('');
    const [ search, setSearch ] = useState('');
    const [ mealInfo, setMealInfo ] = useState([])

    const handleInputChange = (e) => {
        setSearch(e.target.value)
    }

    const handleSearch = () => {
        setMeal(search)
    }

    const fetchMealByName = (name) => {
        fetch(MealByNameUrl(name))
            .then(resp => resp.json())
            .then(data => setMealInfo(data.meals))
            .catch(err => console.error(`Error due fetch meal detail by name: ${err}`))
    }

    useEffect(() => {
        meal !== '' && fetchMealByName(meal)
    }, [meal])

    return (
        <div className={meal ? 'searchComponent is_searched' : 'searchComponent'}>
            <p className={'searchComponent__title'}>Are you looking for specific meal?</p>

            <div className={'searchComponent__input'}>
                <input 
                    type={"text"} 
                    placeholder={"Search for meal..."} 
                    value={search}
                    onChange={handleInputChange}
                />
                <SearchIcon width={30} height={30} onClick={handleSearch} />
            </div>

            {
                mealInfo && mealInfo.length !== 0 && <SearchResult info={mealInfo} />
            }
        </div>
    )
};

export default Search;