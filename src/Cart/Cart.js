import CartItem from '../CartItem/CartItem';
import './Cart.css';

function Cart ({ cartItems, handleAddToCart, handleRemoveFromCart }) {
    const subTotal = (cartItems) => cartItems.reduce((acc, curr) => acc + curr.amount * curr.price, 0);
    const frete = (cartItems) => subTotal(cartItems) < 250 ? 10 * cartItems.reduce((acc, curr) => acc + curr.amount, 0) : 0;
    return (
        <div className='Cart'>
            <h2>Seu carrinho</h2>
            {!cartItems.length ? <p>Carrinho vazio.</p>: null}
            {cartItems.map(item => (<CartItem 
                key={item.id} 
                item={item}
                handleAddToCart={handleAddToCart} 
                handleRemoveFromCart={handleRemoveFromCart} 
            />))}
            <div>
                <h3>Subtotal: R$ {subTotal(cartItems).toFixed(2).replace('.', ',')}</h3>
                <h3>Frete (grátis para compras acima de R$ 250,00): R$ {frete(cartItems).toFixed(2).replace('.', ',')}</h3>
                <h2>Total: R$ {(subTotal(cartItems) + frete(cartItems)).toFixed(2).replace('.', ',')}</h2>
            </div>
        </div>
    );
}

export default Cart;