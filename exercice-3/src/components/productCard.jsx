import React, { useState } from 'react';
import './productCard.css';

function App() {
  const [size, setSize] = useState('');
  const [number, setNumber] = useState('');
  const [pseudo, setPseudo] = useState('');

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handlePseudoChange = (e) => {
    setPseudo(e.target.value);
  };

  const handleAddToCart = () => {
    // Logique à implémenter pour ajouter au panier
    console.log(`Jersey ajouté au panier : Taille: ${size}, Numéro: ${number}, Pseudo: ${pseudo}`);
  };

  return (
    <div>
      <header>
        <h1>Jersey Karmine Corp</h1>
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
            <p>Price: €70</p>
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
        <div class="perso">
            <p>Personalize your jersey</p>
            <div class="input-container">
                <input
                    class="input1"
                    type="text"
                    placeholder="1"
                    value={number}
                    onChange={handleNumberChange}
                />
                <input
                    class="input2"
                    type="text"
                    placeholder="Pseudo on the jersey"
                    value={pseudo}
                    onChange={handlePseudoChange}
                />
            </div>
        </div>
          </section>
          <footer>
            <button type="button" onClick={handleAddToCart}>
              Add to cart
            </button>
          </footer>
        </div>
      </article>
    </div>
  );
}

export default App;
