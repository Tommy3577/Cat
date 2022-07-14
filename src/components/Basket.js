import React from 'react';
import App from '../App';

const Basket = (props) => {
    
    const {basketItems, onRemove} = props;
    const totalPrice = basketItems.reduce((a, c) => a + c.price * c.qty, 0);
    return (
        <aside id="basketBlock">
            <h2>Basket</h2>
            <div>{basketItems.length === 0 && <div>"Basket is empty"</div>}</div>

            {basketItems.map((cat) => (
                <div>
                    <div>{cat.name}</div>
                    <div>

                    </div>
                    <div>
                        {cat.qty} x ${cat.price.toFixed(2)}
                    </div>
                </div>
            ))}
            {basketItems.length !== 0 && (
                <>
                <br></br>
                <div>Total Price</div>
                <div>${totalPrice.toFixed(2)}</div>
                <br></br>
                <div>
                    <button onClick={() => alert('Checkout')}>Checkout</button>
                </div>
                </>

            )}

        </aside>
    )
}

export default Basket;
