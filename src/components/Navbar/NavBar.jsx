"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { HiMenu } from "react-icons/hi"
import { MdOutlineClose } from "react-icons/md"
import { PiGlobe } from "react-icons/pi"
import { IoChatbubbleOutline } from "react-icons/io5"
import { GoBell } from "react-icons/go"
import { FiPlusCircle } from "react-icons/fi"

const NavBar = () => {
  const [navbar, setNavbar] = useState(false)
  return (
    <div className="sticky top-0 z-50 w-full bg-white">
      <div className="container mx-auto max-w-7xl bg-white">
        <div className=" relative flex h-16 flex-row justify-between bg-white md:items-center md:px-8">
          <div className=" md:flex md:flex-row md:items-center">
            <div className=" flex items-center py-3 md:py-0 ">
              <div className="flex items-center gap-x-4 md:hidden ">
                <button
                  className="mx-2 rounded-md p-2 text-gray-500  outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <>
                      <MdOutlineClose className="m-0 p-0 text-3xl text-gray-300" />
                    </>
                  ) : (
                    <HiMenu className="m-0 p-0 text-3xl text-gray-300" />
                  )}
                </button>
              </div>
              {/* LOGO */}
              <Link href="/">
                <Image
                  src="logo.svg"
                  width={100}
                  height={100}
                  alt="logo"
                  className="mr-10 h-max w-24 md:h-28 md:w-28"
                />
              </Link>
            </div>

            <div
              className={`md:flex ${navbar ? "block w-screen md:w-auto lg:w-0" : "hidden"}`}
            >
              <ul className="-mt-2 flex h-screen flex-col items-center justify-start space-y-2 bg-white pt-10 capitalize md:mt-0 md:flex md:h-auto md:flex-row md:items-center md:justify-center  md:space-x-10 md:space-y-0 md:pt-0">
                <li
                  className={`active mx-auto block w-48 rounded-full py-2 text-center text-lg text-gray-500 md:w-auto md:py-0
                                     `}
                >
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    home
                  </Link>
                </li>
                <li className="mx-auto block w-48 rounded-full py-2 text-center text-lg text-gray-500 md:w-auto md:py-0">
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    blogs
                  </Link>
                </li>

                <li className="mx-auto block w-48 rounded-full py-2 text-center text-lg text-gray-500 md:w-auto md:py-0">
                  <Link href="/contact" onClick={() => setNavbar(!navbar)}>
                    gifts
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <div className="group flex h-full w-full ">
              <div className="mx-5 flex items-center group-hover:cursor-pointer md:divide-x-2 md:divide-gray-100 ">
                {/* Conversations */}

                <div className="p-2">
                  <IoChatbubbleOutline className="m-1 rotate-[280deg] text-xl text-gray-700" />
                </div>

                {/* Notifications */}
                <div className="p-2">
                  <GoBell className="m-1 text-xl text-gray-700" />
                </div>
                {/* Profile image */}

                <div className="mx-auto w-full px-3">
                  <Image
                    src="profile.svg"
                    height={50}
                    width={50}
                    alt="Profile image"
                    className="mx-auto h-11 w-11 rounded-full"
                  ></Image>
                </div>

                {/* Add Porduct button */}
              </div>

              <Link href="/add-product">
                <button className="hidden w-full flex-row items-center justify-center gap-x-2 rounded-xl bg-gradient-to-r from-primary to-orange-600 px-1 py-1 text-sm font-semibold text-white hover:to-orange-500 disabled:pointer-events-none disabled:opacity-50  md:flex lg:w-fit lg:px-4 lg:py-2 lg:text-base">
                  <FiPlusCircle className="text-2xl" />
                  Add New Product
                </button>
              </Link>
              <div className="mx-5 hidden grid-cols-2 items-center md:grid lg:divide-x-2 ">
                <button className="mx-auto flex w-20  items-center  justify-center px-1 text-xl md:w-auto">
                  <PiGlobe className="text-2xl" />
                </button>

                <div className="hidden w-full px-1 text-end lg:flex">EN</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
