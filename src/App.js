import { useState } from "react"
import "./App.css"
import data, { uniqueCategories } from "./assets/data"
import CategoryList from "./components/CategoryList"
import ProductList from "./components/ProductList"
import Header from "./components/Header"
import Inventory from "./components/Inventory"

function App() {
  const [category, setCategory] = useState("All")

  return (
    <div className="App">
      <Header
        productCount={data.length}
        categoryCount={uniqueCategories.length}
      />
      <CategoryList
        category={category}
        onClick={(newCategory) => {
          setCategory(newCategory)
        }}
      />
      <ProductList category={category} />
      <Inventory />
    </div>
  )
}

export default App
