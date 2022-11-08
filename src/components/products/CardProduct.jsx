import React from 'react'
import Handle from './Handle'


const CardProduct = ({products}) => {
  
  return (
      <article className='card-section'>
          {
            products?.map(product => (
              <div className='card-container' key={product.id}
              >
                <div className='card-img-container'>
                  <img src={product.images[0]} />
                </div>
                <div className='card-body'>
                  <h2>{product.title}</h2>
                  <ul className='card-list'>
                    <li>Stock: {product.stock}</li>
                    <li>${product.price}.00</li>
                  </ul>
                  <Handle product={product} />
                </div>
              </div>
            ))
          }
      </article>

  )
}

export default CardProduct