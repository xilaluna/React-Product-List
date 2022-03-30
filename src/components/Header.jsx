import React from "react"

import "./Header.css"

const Header = (props) => {
  const { productCount, categoryCount } = props
  return (
    <div className="Header">
      <h1>Productify</h1>
      <p>Product Count: {productCount}</p>
      <p>Categories: {categoryCount}</p>
    </div>
  )
}

export default Header
