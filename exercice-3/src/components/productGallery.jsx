import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { products } from './products';
import './productGallery.css';

const ProductGallery = () => {
    return (
        <div className="gallery">
            <h1>Karmine Corp</h1>
            <div className="product-list">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <Link to={`/product/${product.id}`}>
                            <img src={product.image} alt={product.name} />
                            <h2>{product.name}</h2>
                            <p>Price: €{product.price}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
