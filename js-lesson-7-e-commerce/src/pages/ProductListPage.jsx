import React, {useEffect, useState} from 'react';

export default function ProductListPage() {
  const [imageList, setImageList] = useState(null);

  useEffect( () => {
      const url = 'https://mock-data-api.firebaseio.com/e-commerce/products.json'
      fetch(url)
      .then(res => res.json())
      .then(data => setImageList(data))
  }, [] )

  return (
    <div>
      <h2>Product List Page</h2>
      {!imageList && <p>Loading</p>}
      {imageList && Object.entries(imageList).map(imageItem => {
        const key = imageItem[0]
        const value = imageItem[1]
        console.log(value)
        return <p>Image Item</p>
      })}
    </div>
  )
}