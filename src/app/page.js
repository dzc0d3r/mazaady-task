import { Products, ProfileCard, QRCard } from "@/components/Profile"
import { profileData } from "@/lib/data"

export default function Home() {
  return (
    <div className="container mx-auto max-w-7xl">
      <main className=" mx-2 mt-5 grid min-h-screen  gap-3 p-0 md:gap-5 lg:grid-cols-3 lg:gap-7 lg:p-5">
        <section className="mt-0 flex flex-col gap-3 md:gap-5 lg:col-span-1 ">
          <ProfileCard
            fullname={profileData.fullname}
            bio={profileData.bio}
            followers={profileData.followers}
            following={profileData.following}
            rate={profileData.rate}
          />
          <QRCard />
        </section>

        <section className="mx-auto h-full w-full max-w-full md:max-w-none lg:col-span-2">
          <Products products={profileData.products} />
        </section>
      </main>
    </div>
  )
}
