import './ProductItem.css';

function ProductItem ({ product, handleAddToCart }) {
    const {image, name, price, score} = product;
    const srcImage = process.env.PUBLIC_URL + '../assets/' + image;
    return (
        <div className='ProductItem'>
            <img src={srcImage} alt={name} />
            <div className='informations'>
                <h3>{name}</h3>
                <p>{'R$ ' + price.toFixed(2).replace('.', ',')}</p>
                <p>Score: {score}</p>
            </div>
            <button onClick={() => {handleAddToCart(product)}}>
                Acrescentar
            </button>
        </div>
    );
}

export default ProductItem;