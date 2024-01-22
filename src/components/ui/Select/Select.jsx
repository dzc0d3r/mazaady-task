"use client"

import React, { useEffect, useState } from "react"
import { BiChevronDown } from "react-icons/bi"
import { AiOutlineSearch } from "react-icons/ai"
import { Loading } from "@/components/Form"

const Select = ({
  name,
  placeholder,
  options,
  selectCategory = () => {},
  isLoading,
}) => {
  const [search, setSearch] = useState("")
  const [selected, setSelected] = useState("")
  const [open, setOpen] = useState(false)
  const [other, setOther] = useState("")

  return (
    <>
      <div className="my-1 w-full font-medium" name={name}>
        <div
          onClick={() => setOpen(!open)}
          className={`flex w-full items-center  justify-between rounded bg-white p-2 ${
            !selected && "text-gray-400 "
          }`}
        >
          {selected
            ? selected?.length > 25
              ? selected?.substring(0, 25) + "..."
              : selected
            : placeholder}
          <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
        </div>

        {isLoading ? (
          <Loading />
        ) : (
          <ul
            className={`mb-5 overflow-y-auto bg-white  ${
              open
                ? "absolute bottom-0 left-0 max-h-[85%] min-h-[80%] w-full rounded-2xl p-2 md:relative md:bottom-auto md:left-auto md:min-h-0 md:rounded-none lg:max-h-60 lg:p-0 "
                : "max-h-0"
            } ${options?.length > 0 ? "block" : "hidden"} `}
          >
            <div className="sticky top-0 flex items-center bg-white px-2">
              <AiOutlineSearch size={18} className="text-gray-700" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value.toLowerCase())}
                placeholder="Search"
                className="p-2 text-sm outline-none placeholder:text-gray-400"
              />
            </div>
            {options?.map((option) => (
              <li
                key={option?.id}
                className={`p-2 text-sm hover:bg-primary hover:text-white
                                       ${
                                         option?.name?.toLowerCase() ===
                                           selected?.toLowerCase() &&
                                         "bg-primary text-white"
                                       }
                                       ${
                                         option?.name
                                           ?.toLowerCase()
                                           .includes(search)
                                           ? "block"
                                           : "hidden"
                                       }`}
                onClick={() => {
                  if (option?.name?.toLowerCase() !== selected.toLowerCase()) {
                    setSelected(option?.name)
                    setOpen(false)
                    setSearch("")
                    selectCategory(option?.id)
                  }
                }}
              >
                {option?.name}
              </li>
            ))}
          </ul>
        )}
        {selected.toLowerCase() == "other" && (
          <input
            className="lg:text-normal -mt-10 mb-5 w-full rounded-2xl border border-primary bg-gray-50 p-2 px-4 text-sm outline-none "
            type="text"
            placeholder="Enter category name"
            value={other}
            name="other"
            onChange={(e) => {
              setOther(e.target.value)
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                setSelected(other)
                setOther("")
                setOpen(false)
              }
            }}
          ></input>
        )}
      </div>
    </>
  )
}

export default Select
