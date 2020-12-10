import React from 'react';

export default function ProductListPage(props) {
  return (
    <div>
      <h2>Product Detail Page</h2>
      {props.match.params.id}
    </div>
  )
}