import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { watchlistCopy } from "../../../constants/copy.js"
import { buttonStyles, textStyles, watchlistStyles } from "../../../theme/styles.js"

function PriceHistoryModal({ product, onClose }) {
  if (!product) {
    return null
  }

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center ${watchlistStyles.modalBackdrop}`}>
      <button
        className="absolute inset-0 cursor-default"
        type="button"
        aria-label={watchlistCopy.closeBackdropLabel}
        onClick={onClose}
      />

      <section
        className={watchlistStyles.modalPanel}
        role="dialog"
        aria-modal="true"
        aria-labelledby="price-history-title"
      >
        <div className="p-5 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className={textStyles.cardEyebrow}>{watchlistCopy.chartEyebrow}</p>
              <h2 className="mt-2 text-2xl font-bold text-slate-950 dark:text-slate-50" id="price-history-title">
                {product.name}
              </h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {watchlistCopy.chartTitle} · {watchlistCopy.chartDescription}
              </p>
            </div>

            <button
              className={buttonStyles.modalClose}
              type="button"
              aria-label={watchlistCopy.closeModalLabel}
              onClick={onClose}
            >
              ×
            </button>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            <div className={watchlistStyles.priceSummary}>
              <p className={textStyles.productMeta}>{watchlistCopy.currentPrice}</p>
              <p className="mt-1 text-xl font-bold text-slate-950 dark:text-slate-50">${product.price}</p>
            </div>
            <div className={watchlistStyles.priceSummary}>
              <p className={textStyles.productMeta}>{watchlistCopy.previousPrice}</p>
              <p className="mt-1 text-xl font-bold text-slate-500 dark:text-slate-300">${product.previousPrice}</p>
            </div>
          </div>

          <div className={`mt-4 ${watchlistStyles.chart}`}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={product.priceHistory} margin={{ top: 12, right: 12, left: -12, bottom: 0 }}>
                <CartesianGrid stroke="#cbd5e1" strokeDasharray="3 5" vertical={false} />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fill: "#64748b", fontSize: 12 }} tickFormatter={(value) => `$${value}`} />
                <Tooltip
                  formatter={(value) => [`$${value}`, "Price"]}
                  contentStyle={{ borderRadius: 8, borderColor: "#cbd5e1", fontSize: 13 }}
                />
                <Line
                  type="monotone"
                  dataKey="price"
                  stroke="#0f766e"
                  strokeWidth={3}
                  dot={{ r: 4, fill: "#0f766e", strokeWidth: 0 }}
                  activeDot={{ r: 6, fill: "#0f766e", stroke: "#ffffff", strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PriceHistoryModal
