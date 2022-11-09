import React from 'react'
import { NavLink } from 'react-router-dom'
import MoonIcon from '../../assets/MoonIcon'
import SunIcon from '../../assets/SunIcon'
import "../../CSS/header.css"
import Theme from './Theme'

const Header = ({theme, setTheme}) => {

  const isDarkTheme = theme === "dark"

  const themeToggler = () => {
    setTheme(isDarkTheme ? "light" : "dark")

  }
  return (
    <header className='header'>
        <div>
          <SunIcon />
          <Theme themeToggler={themeToggler} />
          <MoonIcon />
        </div>
        <NavLink to="/products" className='title'>
          <h1>Product App</h1>
        </NavLink>
        <a href="https://github.com/Reyalic/React-Product-App" target="_blank" className="fa-brands fa-github git-logo"></a>
    </header>
  )
}

export default Header