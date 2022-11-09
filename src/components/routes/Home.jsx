import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setNameCustomer } from '../../store/slices/nameCustomer.slice'
import "../../CSS/home.css"

const Home = () => {

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = e => {
    e.preventDefault()
    const inputValue = e.target.name.value.trim()

    if(inputValue.length !== 0) {
      dispatch(setNameCustomer(inputValue))
      navigate('/products')
    }
    e.target.name.value = ""
  }

  return (
    <div className='home-container'>
      <div className='home-screen'>
        <h2>Welcome!</h2>
        <div className='form-container'>
          <p>To Start give me your name</p>
          <form onSubmit={handleSubmit} className="form-home">
            <input id='name' type="text" placeholder='Type your name'/>
            <button className="fa-solid fa-forward home-btn"></button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Home