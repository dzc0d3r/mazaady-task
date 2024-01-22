import Image from "next/image"
import { TbUserCheck, TbUsers } from "react-icons/tb"
import { RiMagicLine } from "react-icons/ri"
import { profileData } from "@/lib/data"

const ProfileCard = ({ fullname, bio, followers, following, rate }) => {
  return (
    <div className="mx-auto h-fit w-full max-w-full rounded-2xl bg-white p-5 md:max-w-none">
      <div className="flex flex-col">
        <Image
          src={profileData.imageSrc}
          height={100}
          width={100}
          alt="Profile image"
          className="h-24 w-24 rounded-2xl"
        ></Image>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-semibold text-black/70">{fullname}</h2>
        <p className="mt-2 text-sm font-light text-black/70">{bio}</p>
      </div>
      <div className="my-5 flex flex-row gap-2">
        {/* stats */}
        <div className="flex w-full gap-1 rounded-2xl bg-orange-400 bg-opacity-10 p-2">
          {/* following */}
          <div className="flex items-center justify-center">
            <TbUserCheck className="text-2xl text-orange-400 md:text-3xl" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold text-black/70 md:text-base">
              {following}
            </p>
            <span className="text-xs capitalize text-orange-400  md:text-sm">
              following
            </span>
          </div>
        </div>
        <div className="flex w-full gap-1 rounded-2xl bg-orange-400 bg-opacity-10 p-2">
          {/* followers */}
          <div className="flex items-center justify-center">
            <TbUsers className="text-2xl text-orange-400 md:text-3xl" />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold text-black/70 md:text-base">
              {followers}
            </p>
            <span className="text-xs capitalize text-orange-400  md:text-sm">
              followers
            </span>
          </div>
        </div>
        <div className="flex w-full gap-1 rounded-2xl bg-orange-400 bg-opacity-10 p-2">
          {/* following */}
          <div className="flex items-center justify-center">
            <RiMagicLine className="text-2xl font-semibold text-orange-400 md:text-3xl " />
          </div>
          <div className="flex flex-col">
            <p className="text-sm font-bold text-black/70 md:text-base">
              {rate.value}
              <span className="mx-2 text-xs font-light text-gray-600 md:text-sm">
                {rate.count}
              </span>
            </p>
            <span className="text-xs capitalize text-orange-400  md:text-sm">
              rate
            </span>
          </div>
        </div>
      </div>
      <button className="mt-5 flex w-full flex-row items-center justify-center gap-x-2 rounded-xl bg-gradient-to-r from-primary to-orange-600 px-4 py-2 text-center text-lg   text-white hover:to-orange-500 disabled:pointer-events-none disabled:opacity-50">
        Follow
      </button>
    </div>
  )
}

export default ProfileCard
