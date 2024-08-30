/* eslint-disable no-unused-vars */
import React from 'react'
import Container from "../components/Container";
import Breadcrumb from '../components/Breadcrumb';
import CartSection from '../components/CartSection';

const MyCart = () => {
  return (
    <section className='px-5 p-5'>
      <Container>
        <Breadcrumb currentPageTitle="My Cart" />
        <CartSection/>
      </Container>
    </section>
  )
}

export default MyCart