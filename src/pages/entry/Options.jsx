import axios from 'axios'
import { useEffect, useState } from 'react'
import ScoopOptions from './ScoopOptions'

export default function Options({ optionType }) {
  const [items, setItems] = useState()

  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then(response => {
        setItems(response)
      })
      .catch(error => {
        console.error(error)
      })
  }, [optionType])

  const ItemComponent = optionType === 'scoops' ? <ScoopOptions /> : null

  const optionItems = items.map(item => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ))

  return <div />
}
