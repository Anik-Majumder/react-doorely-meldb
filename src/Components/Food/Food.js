import React from 'react';
import './Food.css';

const Food = (props) => {
    const {strCategory, strCategoryThumb, strCategoryDescription} = props.food;
    return (
        <div className="food">
            <img src={strCategoryThumb} alt="" />
            <h2>{strCategory}</h2>
            <p>{strCategoryDescription}</p>
        </div>
    );
};

export default Food;