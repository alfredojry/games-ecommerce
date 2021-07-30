import './CartItem.css';

function CartItem ({ item, handleAddToCart, handleRemoveFromCart }) {
    const {id, image, name, price, amount} = item;
    const srcImage = process.env.PUBLIC_URL + '../assets/' + image;
    return (
        <div className='CartItem'>
            <h3>{name}</h3>
            <div className='information'>
                <p>Preço: R$ {price.toFixed(2).replace('.', ',')}</p>
                <p>Total: {'R$ ' + (price * amount).toFixed(2).replace('.', ',')}</p>
            </div>
            <div className='buttons-cart-item'>
                <button onClick={() => handleRemoveFromCart(id)}>-</button>
                <p>Quantidade: {amount}</p>
                <button onClick={() => handleAddToCart(item)}>+</button>
            </div>
            <img src={srcImage} alt={name} />
        </div>
    );
}

export default CartItem;