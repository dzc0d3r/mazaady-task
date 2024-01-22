"use client"

import { useState } from "react"
import { Select } from "@/components/ui/Select"
import { fetchData } from "@/lib/data/functions/api"

import { useQuery } from "@tanstack/react-query"

const Form = () => {
  const [mainCategoryId, setMainCategoryId] = useState(null)
  const [subCategoryId, setSubCategoryId] = useState(null)

  const {
    data: mainCategories,
    isLoading: mainLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["mainCategories"],
    queryFn: getMainCategories,
    select: (data) => [{ id: 0, name: "Other" }, ...data],
  })

  const { data: subCategories, isLoading: subLoading } = useQuery({
    queryKey: ["subCategories", mainCategoryId],
    queryFn: getSubCategories,
    select: (data) => [{ id: 0, name: "Other" }, ...data?.[0]?.children],
  })

  function getMainCategories() {
    return fetchData("get_all_cats").then(
      (response) => response.data.categories,
    )
  }
  function getSubCategories() {
    return fetchData("get_all_cats").then((response) =>
      response.data.categories.filter(
        (cat) => cat.id == parseInt(mainCategoryId),
      ),
    )
  }

  return (
    <form className="h-full w-full rounded-2xl bg-white p-5">
      <h1 className=" mb-5 text-2xl font-normal capitalize text-black/70">
        Please fill all the fields
      </h1>
      <div className="w-full">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Main category <span className="font-semibold text-red-500 ">*</span>
        </label>
        <Select
          name="category"
          placeholder="Select category"
          options={mainCategories}
          isLoading={mainLoading}
          selectCategory={(id) => setMainCategoryId(id)}
        />
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Sub category <span className="font-semibold text-red-500 ">*</span>
        </label>
        <Select
          name="subCategory"
          isLoading={subLoading}
          placeholder="Select sub category"
          options={subCategories}
          selectCategory={(id) => setSubCategoryId(id)}
        />
      </div>
    </form>
  )
}

export default Form
