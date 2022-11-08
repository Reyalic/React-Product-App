import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'

const SelectCategory = ({setFilter}) => {

    const [categories, setCategories] = useState()

    //Get All categories
    useEffect(() => {
        const URL = "https://dummyjson.com/products/categories"
        axios.get(URL)
            .then(res => setCategories(res.data))
            .catch(err => console.log(err))
    }, [])

    const handleChange = e => {
        setFilter({category: e.target.value})
    }
  return (
    <select className='select-category' onChange={handleChange}>
        <option value="All">All products</option>
        {
            categories?.map(category => (
                <option key={category} value={category}>{category}</option>
            ))
        }
    </select>
  )
}

export default SelectCategory