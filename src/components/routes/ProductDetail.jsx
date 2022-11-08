import axios from 'axios'
import React from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "../../CSS/productDts.css"
import SliderImg from '../productDetail/SliderImg'

const ProductDetail = () => {

  const [item, setItem] = useState()

  let { id } = useParams()

  //Get product by id
  useEffect(() => {
    const URL = `https://dummyjson.com/products/${id}`
    axios.get(URL)
      .then(res => setItem(res.data))
      .catch(err => console.log(err))
  }, [])

  // console.log(item)

  return (
    <article className='details-section'>
      <div className='details-container'>
        <SliderImg item={item} />
        <div className='details-body'>
          <h2>{item?.title}</h2>
          <p>{item?.description}</p>
          <span>${item?.price}.00</span>
          <ul className='details-list'>
            <li>{item?.rating}</li>
            <li>{item?.stock}</li>
            <li>{item?.brand}</li>
          </ul>
        </div>
        <h4>Add to Cart</h4>
        <div className='cart'>
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </article>
    
  )
}

export default ProductDetail