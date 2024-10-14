import React from 'react';
import './productCard.css';

const ShoppingBag = ({ cartItems, totalItems, onClose }) => {
  return (
    <div className="shopping-bag">
      <button className="close-bag" onClick={onClose}>X</button>
      <h2>Votre panier ({totalItems})</h2>

      {cartItems.length === 0 ? (
        <p>Votre panier est vide</p>
      ) : (
        cartItems.map((item, index) => (
          <div key={index} className="cart-item">
            {/* Image du produit */}
            <div className="cart-item-image">
            <img src={item.image} alt={`${item.pseudo}`} />
            </div>

            {/* Détails du produit */}
            <div className="cart-item-details">
              <p>Taille : {item.size}</p>
              <p>Numéro : {item.number}</p>
              <p>Pseudo : {item.pseudo}</p>
              <p>Quantité : {item.quantity}</p>
              <p>Prix total : €{item.totalPrice}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
};


export default ShoppingBag;
