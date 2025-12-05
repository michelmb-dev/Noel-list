import { WishList } from './components/WishList.tsx'
import { useState } from 'preact/hooks'
import type { Item } from './types'
import { WishListItem } from './components/WishListItem.tsx'
import { useEffect } from 'react'
import Snowflakes from './components/SnowFlakes.tsx'

export function App() {
  const [items, setItems] = useState<Item[]>([])

  async function fetchItems() {
    const res = await fetch('content.json')
    const data = await res.json()
    return setItems(data)
  }

  useEffect(() => {
    fetchItems().catch(console.error)
  }, [items])

  return (
    <>
      <Snowflakes />
      <div className="container">
        <h1 className="title">
          🎄 Liste de Noël 🎁 <br />
          Noélyne
        </h1>

        <WishList>
          {items &&
            items.map((item, index) => (
              <WishListItem item={item} key={index} />
            ))}
        </WishList>
      </div>
    </>
  )
}
