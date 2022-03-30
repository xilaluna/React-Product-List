import React from "react"
import data from "../assets/data"

const total = data
  .reduce((acc, obj) => {
    return acc + parseFloat(obj.price.slice(1))
  }, 0)
  .toFixed(2)

const totalUnits = data.reduce((acc, obj) => {
  return acc + obj.units
}, 0)

const Inventory = () => {
  return (
    <div className="Inventory">
      <h3>${total}</h3>
      <h3>{totalUnits}</h3>
    </div>
  )
}

export default Inventory
