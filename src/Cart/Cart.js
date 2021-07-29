//import { useState, useEffect } from 'react';
import CartItem from '../CartItem/CartItem';

function Cart ({ cartItems, handleAddToCart, handleRemoveFromCart }) {
    /*const [subTotal, setSubTotal] = useState(0);
    const [frete, setFrete] = useState(0);
    const [total, setTotal] = useState(0);
    const handleSum = () => {
        setSubTotal(cartItems.reduce((acc, curr) => acc + curr.amount * curr.price, 0));
        setFrete(subTotal < 250 ? 10 * cartItems.reduce((acc, curr) => acc + curr.amount, 0) : 0);
        setTotal(subTotal + frete);
    };
    useEffect(handleSum, [cartItems, frete, subTotal])*/
    const subTotal = (cartItems) => cartItems.reduce((acc, curr) => acc + curr.amount * curr.price, 0);
    const frete = (cartItems) => subTotal < 250 ? 10 * cartItems.reduce((acc, curr) => acc + curr.amount, 0) : 0;
    //const total = subTotal + frete;
    return (
        <div>
            Seu carrinho
            {!cartItems.length ? <p>Carrinho vazio.</p>: null}
            {cartItems.map(item => (<CartItem 
                key={item.id} 
                item={item}
                handleAddToCart={handleAddToCart} 
                handleRemoveFromCart={handleRemoveFromCart} 
            />))}
            <div>
                <p>Subtotal: R$ {subTotal(cartItems).toFixed(2).replace('.', ',')}</p>
                <p>Frete (grátis para compras acima de R$ 250,00): R$ {frete(cartItems).toFixed(2).replace('.', ',')}</p>
                <p>Total: R$ {(subTotal(cartItems) + frete(cartItems)).toFixed(2).replace('.', ',')}</p>
            </div>
        </div>
    );
}

export default Cart;