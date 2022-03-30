import React from "react"
import "./ProductList.css"
import Product from "./Product"
import data from "../assets/data"

const ProductList = (props) => {
  const { category } = props
  return (
    <div className="ProductList">
      {data
        .filter((obj) => obj.category === category || category === "All")
        .map((obj) => {
          return <Product {...obj} />
        })}
    </div>
  )
}

export default ProductList
