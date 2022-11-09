import { Route, Routes } from 'react-router-dom'
import Home from './components/routes/Home'
import ProductDetail from './components/routes/ProductDetail'
import Products from './components/routes/Products'
import Header from './components/Shared/Header'
import ProtectedRoutes from "./components/routes/ProtectedRoutes"
import "./CSS/index.css"
import Footer from './components/Shared/Footer'
import styled, { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme, GlobalStyles } from './themes'
import { useState } from 'react'
import "./CSS/switch.css"

const StyledApp = styled.div``

function App() {

  const [theme, setTheme] = useState("light")

  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <div className="App">
          <Header theme={theme} setTheme={setTheme} />
          <main className='main'>
            <Routes>
              <Route path='/' element={<Home />} />

              <Route element={<ProtectedRoutes />}>
                <Route path="/products" element={<Products />} />
                <Route path="/products/:id" element={<ProductDetail />} />
              </Route>
            </Routes>
          </main>
          <Footer />
        </div>
      </StyledApp>
    </ThemeProvider>
  )
}

export default App
