import React, { useRef } from 'react'
import { Link } from 'react-router-dom'

const SearchProduct = ({setFilter}) => {

  //Getting the value of the input
  const searchText = useRef(null)


  const handleClick = () => {
    setFilter({name: searchText.current.value})
  }
  return (
    <form className='search-form' onClick={handleClick} href="!#/products">
        <input type="text" ref={searchText} />
        <Link href="#!/products">
          <button className="fa-solid fa-magnifying-glass btn-search"></button>
        </Link>
    </form>
  )
}

export default SearchProduct