import React from 'react'
import { NavLink } from 'react-router-dom'

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <nav className='pagination'>
        <ul>
            {pageNumbers.map(number => (
                <NavLink to="/products" className='page-number' key={number} onClick={() => paginate(number)}>
                    <li>{number}</li>
                </NavLink>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination