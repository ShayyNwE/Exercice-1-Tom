import React, { useState } from 'react';
import { useParams } from 'react-router-dom'; // Utilisé pour obtenir l'ID du produit
import './productCard.css';
import ShoppingBag from './shoppingBag'; // Assurez-vous d'importer le composant
import {products} from './products';


function ProductCard() {
  const { productId } = useParams();  // Récupère l'ID du produit depuis l'URL
  const product = products.find(p => p.id === parseInt(productId)); // Trouve le produit correspondant

  const [size, setSize] = useState('');
  const [number, setNumber] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [cartVisible, setCartVisible] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const pricePerItem = product ? product.price : 0; // Le prix est celui du produit sélectionné

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

    const newItem = {
      size: size,
      number: number,
      pseudo: pseudo,
      quantity: quantity,
      totalPrice: totalPrice,
      image: product.image
    };

    setCartItems([...cartItems, newItem]);
    console.log(`Jersey ajouté au panier : Taille: ${size}, Numéro: ${number}, Pseudo: ${pseudo}, Quantité: ${quantity}`);
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

  if (!product) {
    return <h2>Produit non trouvé</h2>;
  }

  return (
    <div>
      <header>
        <h1>{product.name}</h1>
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
            <img src={product.image} alt={product.name} />
            <figcaption>{product.name}</figcaption>
          </figure>
        </div>
        <div className="txt">
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <section>
            <div className="border-box" id="box">
              <div className="size">
                <a href="guide.html">Guide des tailles</a>
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

            {/* Section de personnalisation conditionnelle */}
            {product.customizable && (
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
            )}
          </section>
          <div className="price-quantity-container">
            <p className="prix">Prix : €{totalPrice}</p>
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

      {cartVisible && (
        <ShoppingBag
          cartItems={cartItems} 
          totalItems={cartItems.reduce((total, item) => total + item.quantity, 0)}
          onClose={() => setCartVisible(false)}
          updateItemQuantity={updateItemQuantity}
          removeItem={removeItem}
        />
      )}
    </div>
  );
}

export default ProductCard;
