import React, { useState, useEffect } from 'react';
import './style.css';
import { Search } from '../../components';
import { CategoriesUrl } from '../../urls';

const Categories = () => {

    const [ categories, setCategories ] = useState([])

    const fetchCategories = () => {
        fetch(CategoriesUrl())
            .then(resp => resp.json())
            .then(data => setCategories([...data.meals]))
            .catch(err => console.error(`Error due fetch categories: ${ err }`))
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    return (
        <div className={"categories"}>
            <h3>What do you want to eat today?</h3>

            {/* search meals by complete name --- fetch api */}
            <Search />

            <h4>Categories</h4>

            <ul>
                {
                    // category use name for linking to category item page
                    categories && categories.map((item, ind) => <li key={`category_${ind}`}><a href={`${item.strCategory}/meals`}>{ item.strCategory.toUpperCase() }</a></li>)
                }
            </ul>
        </div>
    )
};

export default Categories;