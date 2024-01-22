import { FiPlusCircle } from "react-icons/fi"
import { SingleProduct } from "@/components/Profile"

const Products = ({ products }) => {
  return (
    <div className="h-full w-full rounded-2xl bg-white p-5">
      <div className="flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
        <div className="flex flex-row gap-2">
          <button className="flex flex-row items-center gap-x-2 rounded-2xl border border-orange-500 bg-orange-200 bg-opacity-40 px-2 py-1 text-sm font-semibold text-orange-500 hover:to-orange-500 disabled:pointer-events-none disabled:opacity-50 md:px-5 md:py-2 md:text-base">
            Products
          </button>
          <button className="flex flex-row items-center gap-x-2 rounded-2xl border border-gray-300 bg-white/30 px-2 py-1 text-sm font-semibold text-gray-500 disabled:pointer-events-none disabled:opacity-50 md:px-5  md:py-2 md:text-base">
            Articles
          </button>
          <button className="flex flex-row items-center gap-x-2 rounded-2xl border border-gray-300 bg-white/30 px-2 py-1 text-sm font-semibold text-gray-500 disabled:pointer-events-none disabled:opacity-50 md:px-5  md:py-2 md:text-base">
            Reviews
          </button>
        </div>
        <button className="flex flex-row items-center gap-x-2 rounded-xl bg-gradient-to-r from-primary to-orange-600 px-2 py-2 text-sm font-semibold text-white hover:to-orange-500  disabled:pointer-events-none disabled:opacity-50 md:px-5 md:py-2 md:text-base">
          <FiPlusCircle className="text-lg md:text-2xl" />
          Add Review
        </button>
      </div>

      <div className="relative my-5 flex flex-col gap-2">
        <h1 className=" text-3xl font-semibold text-black/80 md:text-4xl ">
          Products
          <span className="absolute top-0 mx-3 text-base font-light  text-gray-700">
            (12)
          </span>
        </h1>
        <SingleProduct products={products} />
      </div>
    </div>
  )
}

export default Products
