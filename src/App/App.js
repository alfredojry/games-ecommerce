import Cart from '../Cart/Cart';
import ButtonCart from '../ButtonCart/ButtonCart';
import Container from '../Container/Container';
import ProductItem from '../ProductItem/ProductItem';
import './App.css';
import data from '../products.json';

function App() {
  console.log(data)
  const divEmpty = (<div>Loja sem produtos para vender</div>);
  return (
    <div className="App">
      <Cart />
      <ButtonCart />
      <Container>
        {!data.length && <divEmpty />}
        {data.map(item => (
          <ProductItem item={item} key={item.id} />
        ))}
      </Container>
    </div>
  );
}

export default App;
