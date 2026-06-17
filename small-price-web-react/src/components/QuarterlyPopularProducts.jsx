import { quarterlyPopularProducts } from "../data/products.js"

function QuarterlyPopularProducts() {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_14px_40px_rgba(15,23,42,0.06)]">
      <div className="mb-5 flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
            Quarterly
          </p>
          <h2 className="mt-1 text-lg font-bold text-slate-950">Big movers</h2>
        </div>
        <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
          90 days
        </span>
      </div>

      <ol className="space-y-3">
        {quarterlyPopularProducts.map((product, index) => (
          <li
            className="grid grid-cols-[4.5rem_1fr] gap-4 rounded-xl border border-slate-100 bg-slate-50 p-3 transition hover:border-slate-200 hover:bg-white"
            key={product.id}
          >
            <div
              className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl border border-slate-200 bg-white"
              aria-label={product.imageAlt}
              role="img"
            >
              <span className="absolute left-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-slate-100 text-[11px] font-bold text-slate-500">
                {index + 1}
              </span>
              <span className="text-lg font-black text-slate-300">
                {product.name.slice(0, 2).toUpperCase()}
              </span>
            </div>
            <div className="min-w-0">
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h3 className="truncate text-sm font-bold text-slate-950">{product.name}</h3>
                  <p className="mt-1 text-xs font-medium text-slate-500">{product.category}</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-slate-950">{product.price}</p>
                  <p className="mt-1 text-xs font-bold text-green-700">{product.change}</p>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
                <span className="font-semibold text-slate-500">
                  {product.heat}
                </span>
                <span className="rounded-full bg-slate-100 px-2.5 py-1 font-semibold text-slate-600">
                  {product.note}
                </span>
              </div>
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default QuarterlyPopularProducts
