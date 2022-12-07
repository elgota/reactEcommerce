import React from 'react'
import { Fragment } from 'react'
import Footer from '../components/footer/Footer';
import Header from '../components/header/Header';
import Hero from '../components/hero/Hero';
import Products from '../components/products/Products';
import Slider from '../components/slider/Slider';
import Testimonial from '../components/testimonials/Testimonial';
import Virtual from '../components/virtual/Virtual';

const Home = () => {
  return (
    <Fragment>
      <Header />
      <Hero/>
      <Products/>
      <Virtual/>
      <Testimonial/>
      <Footer />
    </Fragment>

  )
}

export default Home