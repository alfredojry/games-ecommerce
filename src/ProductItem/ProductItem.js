function ProductItem ({ item }) {
    const {image, name, price, score} = item;
    const srcImage = process.env.PUBLIC_URL + '../assets/' + image;
    return (
        <div>
            <img src={srcImage} alt={name} />
            <div>
                <h3>{name}</h3>
                <p>Preço: {price}</p>
                <p>Score: {score}</p>
            </div>
        </div>
    );
}

export default ProductItem;