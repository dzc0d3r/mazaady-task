"use client"
import { IoEyeOutline } from "react-icons/io5"
import { GoShareAndroid } from "react-icons/go"
import { PiFileArrowDown } from "react-icons/pi"
import { TfiArrowCircleDown } from "react-icons/tfi"
import { useState } from "react"
import Image from "next/image"

const QRCard = () => {
  const [collapse, setCollapse] = useState(false)
  return (
    <div className="mx-auto flex h-fit w-full max-w-full flex-col rounded-2xl bg-white p-5 md:max-w-none">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl font-semibold capitalize text-black/70">
          QR Code
        </h2>
        <div className="group flex flex-row gap-2">
          <IoEyeOutline className="text-2xl text-black/70 group-hover:cursor-pointer" />
          <GoShareAndroid className="text-2xl text-black/70 group-hover:cursor-pointer" />
          <PiFileArrowDown className="text-2xl text-black/70 group-hover:cursor-pointer" />
          <div className=" relative inline-flex lg:hidden">
            <input
              onClick={() => setCollapse(!collapse)}
              type="checkbox"
              id="faq1"
              className="peer absolute left-0 top-0 z-10 h-full w-full appearance-none text-center hover:cursor-pointer"
            />
            <TfiArrowCircleDown className="rounded-full bg-orange-200 bg-opacity-60 text-2xl text-black/70 " />
          </div>
        </div>
      </div>
      <div className={`${collapse ? "hidden" : "mt-4 flex flex-col"}`}>
        <div className="flex flex-row items-center gap-3 rounded-xl bg-orange-200 bg-opacity-40 p-5">
          <PiFileArrowDown className="text-3xl text-orange-400" />
          <p className="text-xs font-light text-black/70">
            Download the QR code or share it with your friends.
          </p>
        </div>
        <div className="mt-5 flex h-full w-full justify-center">
          <Image
            src={"qr.svg"}
            width={100}
            height={100}
            alt="Profile image"
            className="h-80 w-96 rounded-2xl"
          ></Image>
        </div>
      </div>
    </div>
  )
}

export default QRCard
