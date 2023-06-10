import React from 'react';
import './style.css';
import Background from '../../assets/healthy_food_background.jpg';

const Welcome = () => {
    return (
        <div className={"welcome"}>
            <img className={"welcome__background"} src={Background} alt={"healthy_food_background"} />
            <div className={"welcome__wrap"}>
                <div className={"welcome__wrapContent"}>
                    <h2>
                        HEALTHY FOOD
                        <br />
                        RECIPE FOR
                        <br />
                        EVERYDAY LIFE 
                    </h2>

                    <a href={"/categories"}>GET STARTED</a>
                </div>
            </div>
        </div>
    )
};

export default Welcome;