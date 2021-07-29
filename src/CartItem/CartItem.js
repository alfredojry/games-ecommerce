function CartItem ({ item, handleAddToCart, handleRemoveFromCart }) {
    const {id, image, name, price, amount} = item;
    const srcImage = process.env.PUBLIC_URL + '../assets/' + image;
    return (
        <div>
            Cart Item
            <h3>{name}</h3>
            <p>Preço: R$ {price.toFixed(2).replace('.', ',')}</p>
            <p>Quantidade: {amount}</p>
            <p>Total: {'R$ ' + (price * amount).toFixed(2).replace('.', ',')}</p>
            <div className='buttons-cart-item'>
                <button onClick={() => handleRemoveFromCart(id)}>-</button>
                <button onClick={() => handleAddToCart(item)}>+</button>
            </div>
            <img src={srcImage} alt={name} />
        </div>
    );
}

export default CartItem;