import Image from "next/image"
import { PiHeart } from "react-icons/pi"
import { PiHeartFill } from "react-icons/pi"

const SingleProduct = ({ products }) => {
  return (
    <>
      {products.map((product, index) => (
        <div key={index} className="my-2 grid grid-cols-4 gap-4 p-0 md:p-4">
          <div className="group relative col-span-1 h-24 w-24 hover:cursor-pointer md:h-40 md:w-40">
            <Image
              src={product.imageSrc}
              fill
              alt="Profile image"
              className="absolute cursor-pointer rounded-2xl transition-all duration-300 group-hover:scale-[1.01] "
            ></Image>
            <div
              className={`-botton-px absolute right-0 flex md:-right-px md:bottom-[.55rem]  
                            ${product.tag.includes("live") ? "bg-primary" : "bg-orange-500"} h-fit w-fit rounded-ee-full rounded-ss-full px-2 py-[2px] text-[.6rem]  font-light capitalize text-white md:px-6 md:py-2 lg:text-sm`}
            >
              <p>{product.tag}</p>
            </div>
          </div>
          <div className="col-span-3 mx-7 mt-1 flex flex-row items-start md:mx-1 md:mt-4 md:justify-between">
            <div className="flex flex-col gap-3 ">
              <h3 className="max-w-52 break-words break-all text-sm font-medium text-black/70 lg:max-w-full lg:text-lg">
                {product.title}
              </h3>

              <p className="text-xs font-light text-black/70 md:mt-1 md:text-base ">
                Starting Price{" "}
                <span className="text-lg font-semibold text-black/80 md:text-2xl">
                  {product.starting_price} EGP
                </span>
              </p>
              <div className="flex flex-col items-start gap-2 md:flex-row md:items-center">
                <p className="flex items-center gap-2 text-xs font-light text-black/70 md:mt-1 md:flex-row md:text-base ">
                  Lot Starts In
                </p>
                <div className="flex flex-row gap-1 md:gap-2">
                  <span className="rounded-2xl bg-orange-200 px-2 py-[6px] text-xs font-semibold text-orange-500  md:px-4 md:py-1 md:text-xl">
                    {product.start_in.days}
                    <span className="mx-1 text-[.6rem] font-medium md:text-sm">
                      Days
                    </span>
                  </span>
                  <span className="rounded-2xl bg-orange-200 px-2 py-[6px] text-xs font-semibold text-orange-500  md:px-4 md:py-1 md:text-xl">
                    {product.start_in.hours}
                    <span className="mx-1 text-[.6rem] font-medium md:text-sm">
                      Hours
                    </span>
                  </span>
                  <span className="rounded-2xl bg-orange-200 px-2 py-[6px] text-xs font-semibold text-orange-500  md:px-4 md:py-1 md:text-xl">
                    {product.start_in.minutes}
                    <span className="mx-1 text-[.6rem] font-medium md:text-sm">
                      Minutes
                    </span>
                  </span>
                </div>
              </div>
            </div>
            {/* heart icon */}
            {product.liked ? (
              <PiHeartFill className="text-3xl text-primary transition-all duration-300 hover:scale-105 hover:cursor-pointer" />
            ) : (
              <PiHeart className="text-3xl text-gray-500 transition-all duration-300 hover:scale-105 hover:cursor-pointer" />
            )}
          </div>
        </div>
      ))}
    </>
  )
}

export default SingleProduct
