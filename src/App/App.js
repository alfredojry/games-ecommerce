import { useState } from 'react';
import Cart from '../Cart/Cart';
import ButtonCart from '../ButtonCart/ButtonCart';
import Container from '../Container/Container';
import ProductItem from '../ProductItem/ProductItem';
import './App.css';
import data from '../products.json';

function App() {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  const handleAddToCart = productClicked => {
    setCartItems(prev => {
      // Tratamento no caso que o mesmo produto esteja no carrinho
      const isItemInCart = prev.find(item => item.id === productClicked.id);
      if (isItemInCart) {
        return prev.map(item => (
          item.id === productClicked.id
            ? {...item, amount: item.amount + 1}
            : item
        ));
      }
      // Primeira vez o produto é acrescentado
      return [...prev, { ...productClicked, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(prev => (
      prev.reduce((ack, item) => {
        if (item.id === id) {
          if (item.amount === 1) return ack;
          return [...ack, { ...item, amount: item.amount - 1 }];
        } else {
          return [...ack, item];
        }
      }, []))
    );
  };
  

  const divEmpty = (<div>Loja sem produtos para vender</div>);
  return (
    <div className="App">
      <ButtonCart handleCartOpen={handleCartOpen} />
      {cartOpen && <Cart cartItems={cartItems} handleAddToCart={handleAddToCart} handleRemoveFromCart={handleRemoveFromCart} />}
      <Container>
        {!data.length && <divEmpty />}
        {data.map(product => (
          <ProductItem product={product} key={product.id} handleAddToCart={handleAddToCart} />
        ))}
      </Container>
    </div>
  );
}

export default App;
