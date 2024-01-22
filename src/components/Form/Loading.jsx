import Image from "next/image"
import React from "react"

const Loading = () => {
  return (
    <div className="absolute right-0 top-0 grid h-full w-full place-content-center  bg-gray-200 bg-opacity-50">
      <Image src="spinner.svg" height={150} width={150} alt="spinner"></Image>
    </div>
  )
}

export default Loading
