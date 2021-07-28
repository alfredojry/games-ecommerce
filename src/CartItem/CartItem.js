function CartItem ({item}) {
    const {image, name, price, score} = item;
    return (
        <div>
            Cart Item
            <h3>{name}</h3>
            <p>Preço: {price}</p>
            <p></p>
        </div>
    );
}

export default CartItem;