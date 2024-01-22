import { Form } from "@/components/Form"

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl">
      <main className=" mx-2 mt-5 grid min-h-screen  gap-3 p-0 md:gap-5 lg:grid-cols-3 lg:gap-7 lg:p-5">
        <section className="mt-0 flex flex-col gap-3 md:gap-5 lg:col-span-1 ">
          <Form />
        </section>

        <section className="mx-auto h-full w-full max-w-full md:max-w-none lg:col-span-2">
          <div className="h-full w-full rounded-2xl bg-white"></div>
        </section>
      </main>
    </div>
  )
}
