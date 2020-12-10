import React from 'react';

export default function ProductItem({product}) {
  return (
    <div>
      {console.log(product)}
      <img alt={product.images[0].alt} src={product.images[0].src.small} />
      {product.name}
      {product.price}
    </div>
  )
}