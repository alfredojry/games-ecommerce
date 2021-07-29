function CartItem ({item}) {
    const {image, name, price, amount} = item;
    return (
        <div>
            Cart Item
            <h3>{name}</h3>
            <p>Preço: R$ {price.toFixed(2).replace('.', ',')}</p>
            <p>Quantidade: {amount}</p>
            <p>Total: {'R$ ' + (price * amount).toFixed(2).replace('.', ',')}</p>
        </div>
    );
}

export default CartItem;