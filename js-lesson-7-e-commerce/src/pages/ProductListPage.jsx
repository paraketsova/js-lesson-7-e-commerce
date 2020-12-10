import React, {useEffect} from 'react';

export default function ProductListPage() {

  useEffect( () => {
      const url = 'https://mock-data-api.firebaseio.com/e-commerce/products.json'
      fetch(url)
      .then(res => res.json())
      .then(data => console.log(data))
  }, [] )

  return (
    <div>
      <h2>Product List Page</h2>
    </div>
  )
}