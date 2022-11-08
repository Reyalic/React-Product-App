import axios from 'axios'
import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

const Handle = ({product}) => {

    useEffect(() => {
        const URL = `https://dummyjson.com/products/${product.id}`
        axios.get(URL)
            .then(res => (res.data))
            .catch(err => console.log(err))

    }, [])


    const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/products/${product.id}`)
  }
  return (
    <div>
        <button className='card-btn' onClick={handleClick}>More</button>
    </div>
  )
}

export default Handle