import axios from 'axios'
import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import "../../CSS/productDts.css"
import SliderImg from '../productDetail/SliderImg'
import Data from '../productDetail/Data'

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

  return (
      <article className='details-section'>
        <div className='details-container'>
          <SliderImg item={item} />
          {<Data item={item} />}
        </div>
      </article>
  )
}

export default ProductDetail