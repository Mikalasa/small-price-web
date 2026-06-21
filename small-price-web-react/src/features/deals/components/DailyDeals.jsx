import { dailyDealCopy } from "../../../constants/copy.js"
import { dailyDeals } from "../../../data/dailyDeals.js"
import { dailyDealStyles, textStyles } from "../../../theme/styles.js"

function DailyDeals() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 pb-16" id="daily-deal">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h2 className="text-2xl font-bold text-slate-950 dark:text-slate-50">
            {dailyDealCopy.title}
          </h2>
          <span className="text-sm font-semibold text-teal-700 dark:text-teal-400">
            {dailyDealCopy.location}
          </span>
        </div>
        <span className={textStyles.productMeta}>{dailyDealCopy.updated}</span>
      </div>

      <div className={dailyDealStyles.grid}>
        {dailyDeals.map((deal) => (
          <article className={dailyDealStyles.card} key={deal.id}>
            <div
              className={dailyDealStyles.image}
              role="img"
              aria-label={deal.imageAlt}
            >
              <span className={dailyDealStyles.discountBadge}>
                ↓ {dailyDealCopy.discount(deal.discount)}
              </span>
              <span className={dailyDealStyles.imageInitials} aria-hidden="true">
                {deal.initials}
              </span>
            </div>

            <div className="flex flex-1 flex-col p-4">
              <p className={textStyles.productMeta}>{deal.category}</p>
              <h3 className="mt-2 min-h-12 text-base font-bold leading-6 text-slate-950 dark:text-slate-50">
                {deal.name}
              </h3>

              <div className="mt-3 flex items-center gap-2 text-sm">
                <span className="font-bold text-amber-500" aria-hidden="true">★</span>
                <span className="font-semibold text-slate-700 dark:text-slate-200">{deal.rating}</span>
                <span className="text-slate-400 dark:text-slate-500">
                  {dailyDealCopy.reviews(deal.reviewCount)}
                </span>
              </div>

              <div className="mt-5">
                <p className={textStyles.productMeta}>{dailyDealCopy.from}</p>
                <div className="mt-1 flex flex-wrap items-baseline gap-2">
                  <span className="text-xl font-bold text-slate-950 dark:text-slate-50">
                    ${deal.price}
                  </span>
                  <span className="text-sm text-slate-400 line-through dark:text-slate-500">
                    ${deal.previousPrice}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-sm text-slate-500 dark:text-slate-400">
                <span className="font-semibold text-slate-700 dark:text-slate-200">
                  {deal.retailer}
                </span>{" "}
                {dailyDealCopy.moreShops(deal.additionalShops)}
              </p>

              <a className={dailyDealStyles.action} href="#search">
                {dailyDealCopy.action}
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default DailyDeals
