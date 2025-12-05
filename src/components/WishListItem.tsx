import type { Item } from '../types'

type Props = {
  item: Item
}

export function WishListItem({ item }: Props) {
  const priceInEuros = (item.price / 100).toFixed(2)

  return (
    <div className="item">
      <div className="item-ball">
        <img src={item.image} alt={item.name} className="item-ball-image" />
      </div>
      <div className="item-info">
        {item.reserved && <div className="item-reserved">Réservé</div>}
        <div className="item-name">{item.name}</div>
        <div className="item-content">
          <div className="item-price">{priceInEuros} €</div>
          <a href={item.source} target="_blank" className="item-link">
            Voir le produit
          </a>
        </div>
      </div>
    </div>
  )
}
