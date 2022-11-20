import React from 'react'
import BottomFooter from './BottomFooter'
import Footer from './Footer'
import Navbar from './Navbar'

export default function Layout({children}) {
  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
        <BottomFooter/>
    </>
  )
}
