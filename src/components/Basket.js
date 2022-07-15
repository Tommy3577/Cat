
import React from 'react';
import App from '../App';
import './Basket.css' 

const Basket = ({cat, deleteBasket, index}) => {
    
    return (

        <div className="basketContainer">
            <h2>Your cats in the bag...</h2>
            <img src={cat.image}/> 
            <div className='catsName'>
                {cat.name}
            </div>
            <div className='catsBreed'>
                {cat.breed}
            </div>
            <div className='catsPrice'>
                £{cat.price}
            </div>
            <button className="deleteButt" onClick={() => deleteBasket(index)}>Take the cat out the bag</button>
        </div>

    )
}

export default Basket;

