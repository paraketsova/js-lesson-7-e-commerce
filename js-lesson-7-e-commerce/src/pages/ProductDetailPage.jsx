import React, {useEffect, useState} from 'react'

export default function ProductDetailPage(props) {
  const [productItem, setProductItem] = useState(null)
  useEffect(() => {
    const id = props.match.params.id
    const url = `https://mock-data-api.firebaseio.com/e-commerce/products/${id}.json`
    fetch(url)
    .then(res => res.json())
    .then(data => setProductItem(data))
  }, [])
  return (
    <div className="container">
      <div className="row">
        {!productItem && <p>Loading</p>}
        {productItem && (
          <>
          <div className="col-md-12">
            <h2>{productItem.name}</h2>
            <img 
              className="img-fluid"
              src={productItem.images[0].src.large} 
              alt={productItem.images[0].alt}
            />
          </div>
            <div className="col-md-12">
              {productItem.description}
            </div>
            <div className="col-md-4">
              Rating: {productItem.rating}
            </div>
            <div className="col-md-4">
              Stock: {productItem.stock}
            </div>
            <div className="col-md-4">
              Price: {productItem.price}
            </div>
          </>
        )}
      </div>
      
    </div>
  )
}
