import logo from './logo.svg'
import './App.css'
import { useState } from 'react'

function App() {
  let groceries = [
    {
      item: 'Broccoli',
      brand: 'Veggies',
      units: '3',
      quantity: 2,
      isPurchased: false
    },
    {
      item: 'chicken',
      brand: 'farm',
      units: '5',
      quantity: 9,
      isPurchased: false
    },
    {
      item: 'ramen',
      brand: 'soup',
      units: '16',
      quantity: 3,
      isPurchased: false
    }
  ]

  // groceries.forEach((item) => {
  //   if (item.isPurchased === false) {
  //     groceriesNotPurchased.push(item)
  //   }
  // })

  console.log(groceries)

  // I tried to use the filter method here on groceries but it wasn't working for
  // whatever reason
  const filteredGroceries = []

  groceries.forEach((item) => {
    if (item.isPurchased === false) {
      filteredGroceries.push(item)
    }
  })

  groceries = filteredGroceries

  console.log(groceries)

  return (
    <div>
      {groceries.map((item) => (
        <div key={item.units}>{item.item}</div>
      ))}
    </div>
  )
}

export default App
