import { lazy, Suspense, useState } from "react"
import { watchlistCopy } from "../../../constants/copy.js"
import { watchedProductCount, watchedProducts } from "../../../data/watchedProducts.js"
import { badgeStyles, textStyles, watchlistStyles } from "../../../theme/styles.js"
import WatchedProductCard from "./WatchedProductCard.jsx"

const COLLAPSED_PRODUCT_COUNT = 4
const MAX_VISIBLE_PRODUCTS = 11
const PriceHistoryModal = lazy(() => import("./PriceHistoryModal.jsx"))

function WatchlistSection({ auth }) {
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleProductCount = isExpanded ? MAX_VISIBLE_PRODUCTS : COLLAPSED_PRODUCT_COUNT
  const visibleProducts = watchedProducts.slice(0, visibleProductCount)
  const remainingCount = Math.max(watchedProductCount - MAX_VISIBLE_PRODUCTS, 0)

  if (!auth?.isLoggedIn) {
    return null
  }

  return (
    <section className={watchlistStyles.section} id="watchlist">
      <div className="mx-auto w-full max-w-6xl px-5">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className={textStyles.cardEyebrow}>{watchlistCopy.eyebrow}</p>
            <h2 className="mt-1 text-2xl font-bold text-slate-950 dark:text-slate-50">
              {watchlistCopy.title}
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">
              {watchlistCopy.description}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className={`w-fit ${badgeStyles.muted}`}>
              {watchlistCopy.itemCount(watchedProductCount)}
            </span>
            <button
              className={watchlistStyles.expandButton}
              type="button"
              aria-controls="watched-products-grid"
              aria-expanded={isExpanded}
              onClick={() => setIsExpanded((current) => !current)}
            >
              {isExpanded ? watchlistCopy.collapse : watchlistCopy.expand}
              <span
                className={`text-base leading-none transition-transform ${isExpanded ? "rotate-180" : ""}`}
                aria-hidden="true"
              >
                ↓
              </span>
            </button>
          </div>
        </div>

        <div
          className={isExpanded
            ? "grid gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            : "grid grid-flow-col auto-cols-[minmax(16rem,1fr)] gap-3 overflow-x-auto pb-2 xl:grid-cols-4 xl:auto-cols-auto xl:overflow-visible xl:pb-0"
          }
          id="watched-products-grid"
        >
          {visibleProducts.map((product) => (
            <WatchedProductCard
              key={product.id}
              product={product}
              onOpen={setSelectedProduct}
            />
          ))}

          {isExpanded && remainingCount > 0 ? (
            <button className={watchlistStyles.viewAllCard} type="button">
              <span className="text-lg font-bold text-slate-950 dark:text-slate-50">
                {watchlistCopy.viewAllTitle}
              </span>
              <span className="mt-2 text-sm leading-5 text-slate-500 dark:text-slate-400">
                {watchlistCopy.viewAllDescription(remainingCount)}
              </span>
              <span className="mt-4 text-sm font-bold text-teal-700 dark:text-teal-400" aria-hidden="true">
                {watchlistCopy.viewAllAction} →
              </span>
            </button>
          ) : null}
        </div>
      </div>

      {selectedProduct ? (
        <Suspense fallback={null}>
          <PriceHistoryModal
            product={selectedProduct}
            onClose={() => setSelectedProduct(null)}
          />
        </Suspense>
      ) : null}
    </section>
  )
}

export default WatchlistSection
