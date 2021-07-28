function ButtonCart () {
    const srcSvg = process.env.PUBLIC_URL + '../assets/cart-icon.svg';
    return (
        <div className='ButtonCart'>
            ButtonCart
            <img src={srcSvg} alt="cart-icon" />
        </div>
    );
}

export default ButtonCart;