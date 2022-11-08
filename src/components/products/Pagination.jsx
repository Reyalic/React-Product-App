import React from 'react'
import { Link } from 'react-router-dom'

const Pagination = ({productsPerPage, totalProducts, paginate}) => {
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalProducts / productsPerPage); i++) {
        pageNumbers.push(i)
    }
  return (
    <nav className='pagination'>
        <ul>
            {pageNumbers.map(number => (
                <Link className='page-number' key={number} onClick={() => paginate(number)} href="!#/products">
                    <li>{number}</li>
                </Link>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination