import React from 'react';
import classes from './Burger.css';
import BurgerIngridient from './Burgeringridient/Burgeringridient';


const burger = (props) =>{
    let transformedIngridients = Object.keys(props.ingridients)
    .map(igkey => {
        return [...Array(props.ingridients[igkey])].map((_, i) => {
        return <BurgerIngridient key={igkey + i} type={igkey} /> ;
    })
    }).reduce((arr, el)=>{
         return arr.concat(el);
    },[]);

    if (transformedIngridients.length === 0) {
        transformedIngridients = <p>Please start add ingridients!</p>
    }
    
    console.log(transformedIngridients);

    return(
<div className={classes.Burger}>
    <BurgerIngridient type="bread-top"/>
    {transformedIngridients}
    <BurgerIngridient type="bread-bottom"/>
</div>

    );
};

export default burger;