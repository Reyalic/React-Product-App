import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import Pagination from '../products/Pagination'
import CardProduct from "../products/CardProduct"
import "../../CSS/products.css"
import { useChecker, useComplex} from 'react-simplify'
import SelectCategory from '../products/SelectCategory'
import SearchProduct from '../products/SearchProduct'
import { useSelector } from 'react-redux'

const Products = () => {

  //Getting the products
   const [products, setProducts] = useState([])
   const [filter, setFilter] = useComplex({name: "", category: "All"})

   //pagination
   const [page, setPage] = useState(1)
   const [productsPerPage] = useState(10)
 
   useEffect(() => {
      let URL = `https://dummyjson.com/products/search?q=${filter.name}`
      axios.get(URL)
        .then(res => {
          setProducts(res.data.products.filter((product) => filter.category === "All" ? true : product.category === filter.category))
        })
        .catch(err => console.log(err));
    }, [useChecker(filter)])

   //Get current products
   const lastIndex = page * productsPerPage
   const firstIndex = lastIndex - productsPerPage
   const currentProducts = products.slice(firstIndex, lastIndex)
 
   //Change page
   const paginate = (pageNumber) => setPage(pageNumber)

   const nameCustomer = useSelector(state => state.nameCustomer)
 
   return (
     <div>
      <div className='products-menu'>
        <h2>Welcome {nameCustomer}!</h2>
        <SearchProduct setFilter={setFilter} />
        <SelectCategory
          setFilter={setFilter}
        />
      </div>
          <CardProduct products={currentProducts}/>
         <div>
             <Pagination 
             productsPerPage={productsPerPage}
             totalProducts={products.length}
             paginate={paginate}
             />
         </div>
     </div>
   )
}

export default Products