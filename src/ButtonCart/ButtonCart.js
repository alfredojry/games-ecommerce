import './ButtonCart.css';

function ButtonCart ({ handleCartOpen }) {
    const srcSvg = process.env.PUBLIC_URL + '/assets/cart-icon.svg';
    return (
        <div className='ButtonCart' onClick={handleCartOpen}>
            <img src={srcSvg} alt="cart-icon" />
        </div>
    );
}

export default ButtonCart;