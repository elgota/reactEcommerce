import React from 'react'
import { Fragment } from 'react'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import ShoppingCar from '../components/shoppingCar/ShoppingCar'
import Slider from '../components/slider/Slider'

const Carrito = () => {
  return (
    <Fragment>
      <Header />
      <ShoppingCar />
      <Slider />
      <Footer />
    </Fragment>

  )
}

export default Carrito