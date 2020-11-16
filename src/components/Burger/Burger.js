import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

import classes from './Burger.css';

const burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients)
        .map(ingreKey => {
            return [...Array(props.ingredients[ingreKey])].map((_, i) => {
                return <BurgerIngredient key={ingreKey + i } type={ingreKey} />
            })
        })
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
