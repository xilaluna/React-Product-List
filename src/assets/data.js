import data from "./data.json"

const allCategories = data.map((item) => item.category)

const categoriesCount = allCategories.reduce((accumulator, category) => {
  if (accumulator[category]) {
    accumulator[category] += 1
  } else {
    accumulator[category] = 1
  }
  return accumulator
}, {})

const uniqueCategories = Object.keys(categoriesCount)

const catsAndCounts = uniqueCategories.map((name) => {
  return { name, count: categoriesCount[name] }
})

catsAndCounts.push({ name: "All", count: data.length })

export { allCategories, uniqueCategories, categoriesCount, catsAndCounts }
export default data
