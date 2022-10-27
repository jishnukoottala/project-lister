import React from 'react'
import Footer from './Footer'
import Header from './Header'

const Layout = (props) => {
    const { children } = props
  return (
    <div className="flex flex-col min-h-screen bg-grey-200">
        <Header />
        <main className="flex-1 flex flex-col p-4">{children}</main>
        <Footer />
    </div>
  )
}

export default Layout
