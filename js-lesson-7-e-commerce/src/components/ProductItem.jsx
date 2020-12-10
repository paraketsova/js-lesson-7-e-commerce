import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({product}) {
  return (
    <div className='col-md-4 shadow p-3'>
      
      <img 
        className='img-fluid'
        alt={product.images[0].alt} 
        src={product.images[0].src.small} 
      />
      <h3>{product.name}</h3>
      {product.price} SEK
      <Link className='btn btn-secondary btn-block' 
        to={`/products/${product.id}`}
        >
          Go to product
      </Link>
    </div>
  )
}