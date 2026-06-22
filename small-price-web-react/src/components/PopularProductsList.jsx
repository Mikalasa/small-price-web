import { badgeStyles, cardStyles, textStyles } from "../theme/styles.js"

function PopularProductsList({ copy, products }) {
  return (
    <section className={cardStyles.popular}>
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className={textStyles.cardEyebrow}>{copy.eyebrow}</p>
          <h2 className={`mt-1 ${textStyles.cardTitle}`}>{copy.title}</h2>
        </div>
        <span className={badgeStyles.muted}>{copy.period}</span>
      </div>

      <ol className="space-y-3">
        {products.map((product, index) => (
          <li
            className={`grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-4 ${cardStyles.productItem}`}
            key={product.id}
          >
            <div
              className={cardStyles.productImage}
              aria-label={product.imageAlt}
              role="img"
            >
              <span className={badgeStyles.rank}>{index + 1}</span>
              <span className={textStyles.imageInitials}>
                {product.name.slice(0, 2).toUpperCase()}
              </span>
            </div>

            <div className="min-w-0 py-1">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className={textStyles.productName}>{product.name}</h3>
                  <p className={`mt-1 ${textStyles.productMeta}`}>{product.category}</p>
                </div>
                <div className="text-right">
                  <p className={textStyles.price}>{product.price}</p>
                  <p className={`mt-1 ${textStyles.priceChange}`}>{product.change}</p>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className={textStyles.productHeat}>{product.heat}</span>
                <span className={badgeStyles.productNote}>{product.note}</span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default PopularProductsList
