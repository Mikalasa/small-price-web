import { watchlistCopy } from "../../../constants/copy.js"
import { textStyles, watchlistStyles } from "../../../theme/styles.js"

function WatchedProductCard({ product, onOpen }) {
  return (
    <button
      className={watchlistStyles.card}
      type="button"
      aria-label={watchlistCopy.openProductLabel(product.name)}
      onClick={() => onOpen(product)}
    >
      <div className={watchlistStyles.image} aria-hidden="true">
        {product.initials}
      </div>

      <div className="min-w-0 flex-1">
        <p className={textStyles.productMeta}>{product.category}</p>
        <h3 className={`mt-1 ${textStyles.productName}`}>{product.name}</h3>
        <div className="mt-3 flex items-baseline gap-2">
          <span className={textStyles.price}>${product.price}</span>
          <span className="text-xs text-slate-400 line-through dark:text-slate-500">
            ${product.previousPrice}
          </span>
        </div>
      </div>
    </button>
  )
}

export default WatchedProductCard
