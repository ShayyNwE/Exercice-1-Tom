import React, { useState } from 'react';
import './productCard.css';
import ShoppingBag from './shoppingBag'; // Assurez-vous d'importer le composant

function App() {
  const [size, setSize] = useState('');
  const [number, setNumber] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const pricePerItem = 70.00;

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handlePseudoChange = (e) => {
    setPseudo(e.target.value);
  };

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const totalPrice = (pricePerItem * quantity).toFixed(2);

  const handleAddToCart = () => {
    console.log(`Jersey ajouté au panier : Taille: ${size}, Numéro: ${number}, Pseudo: ${pseudo}, Quantité: ${quantity}`);
    if (!size) {
      alert("Veuillez sélectionner une taille");
      return;
    }

    if (!number) {
      alert("Veuillez-rentrer un numéro");
      return;
    }

    if (!pseudo) {
      alert("Veuillez rentrer un pseudo");
      return;
    }
    const newItem = {
      size: size,
      number: number,
      pseudo: pseudo,
      quantity: quantity,
      totalPrice: totalPrice,
      image: "kc24.webp"
    };

    setCartItems([...cartItems, newItem]);
  };

  const updateItemQuantity = (index, newQuantity) => {
    const updatedCartItems = cartItems.map((item, i) =>
      i === index ? { ...item, quantity: newQuantity, totalPrice: (pricePerItem * newQuantity).toFixed(2) } : item
    );
    setCartItems(updatedCartItems);
  };

  const removeItem = (index) => {
    const updatedCartItems = cartItems.filter((item, i) => i !== index);
    setCartItems(updatedCartItems);
  };

  return (
    <div>
      <header>
        <h1>Jersey Karmine Corp</h1>
        {}
        <button 
          className="cart-button" 
          onClick={() => {
          setCartVisible(!cartVisible);
          console.log("Panier visible :", cartVisible);
          }}
          >
            {cartItems.length}
        </button>
      </header>
      <article>
        <div className="image">
          <figure>
            <img src="kc24.webp" alt="Worlds jersey 1" />
            <img src="kc23.webp" alt="Worlds jersey 2" />
            <figcaption>Worlds jersey customize 2024</figcaption>
          </figure>
        </div>
        <div className="txt">
          <h2>Worlds jersey customize 2024</h2>
          <section>
            <p>
              Discover the 2024 Worlds Jersey, <br />
              worn by our players during the world championships on our different games.
            </p>
            <div className="border-box" id="box">
              <div className="size">
                <a href="guide.html">Size guide</a>
                <ul className="product_size">
                  {['XS', 'S', 'M', 'L', 'XL'].map((item) => (
                    <li key={item}>
                      <input
                        type="radio"
                        name="options"
                        id={`size_${item}`}
                        value={item}
                        onChange={handleSizeChange}
                      />
                      <label htmlFor={`size_${item}`}>{item}</label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="perso">
              <p>Personalize your jersey</p>
              <div className="input-container">
                <input
                  className="input1"
                  type="text"
                  placeholder="1"
                  value={number}
                  onChange={handleNumberChange}
                />
                <input
                  className="input2"
                  type="text"
                  placeholder="Pseudo on the jersey"
                  value={pseudo}
                  onChange={handlePseudoChange}
                />
              </div>
            </div>
          </section>
          <div className="price-quantity-container">
            <p className="prix">Price: €{totalPrice}</p>
            <div className="quantity-selector">
              <button id="decrease" className="minus" onClick={handleDecrease} disabled={quantity <= 1}>-</button>
              <span className="quantity-box">
                <span className="quantity">{quantity}</span>
              </span>
              <button className="plus" onClick={handleIncrease}>+</button>
            </div>
          </div>
          <footer>
            <button type="button" onClick={handleAddToCart}>
              Add to cart
            </button>
          </footer>
        </div>
      </article>

      {/* Composant Panier */}
      {cartVisible && (
        <ShoppingBag
          cartItems={cartItems} // Passer les articles du panier en tant que prop
          totalItems={cartItems.reduce((total, item) => total + item.quantity, 0)} // Nombre total de produits
          onClose={() => setCartVisible(false)}
          updateItemQuantity={updateItemQuantity}
          removeItem={removeItem}
        />
      )}
    </div>
  );
}

export default App;
