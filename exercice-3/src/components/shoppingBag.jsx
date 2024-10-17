import React from 'react';
import './productCard.css';

const ShoppingBag = ({ cartItems, onClose, updateItemQuantity, removeItem }) => {
  return (
    <div className="shopping-bag">
      <button className="close-bag" onClick={onClose}>X</button>
      <h2>Votre panier</h2>

      {cartItems.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            <div className="cart-item-image">
              <img src={item.image} alt={`${item.pseudo}`} />
            </div>

            <div className="cart-item-details">
              <p>Taille : {item.size}</p>
              <p>Numéro : {item.number}</p>
              <p>Pseudo : {item.pseudo}</p>
              <p>Quantité : {item.quantity}</p>
              <p>Prix total : €{item.totalPrice}</p>

              <div className="cart-item-controls">
                <button className="quantity-button decrease" onClick={() => updateItemQuantity(index, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
                <span className="panier-button">{item.quantity}</span>
                <button className="quantity-button increase" onClick={() => updateItemQuantity(index, item.quantity + 1)}>+</button>
              </div>

              <button className="remove-item" onClick={() => removeItem(index)}>Retirer l'article</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};


export default ShoppingBag;
