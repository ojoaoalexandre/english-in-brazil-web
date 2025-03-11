import { getMe } from "@/actions/get-me"
import { ToggleTheme } from "@/components/toggle-theme"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"
import Link from "next/link"
import { FaCirclePlay } from "react-icons/fa6"
import { HiHome } from "react-icons/hi"
import { IoChatbubbleEllipsesSharp, IoNotificationsOutline } from "react-icons/io5"
import { TbDoorExit, TbSettings } from "react-icons/tb"

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  const me = await getMe()

  return (
    <div className="flex min-h-screen">
      <div className="flex">
      <nav className="hidden md:flex flex-col px-2 justify-between border-r-2 border-gray-200 dark:border-gray-800 dark:bg-theme-gray-900">
        <div className="sticky">
        <Image src="/images/logo.webp" className="flex py-10 w-16" width={64} height={64} alt="Logo" />
        <ul className="flex flex-col gap-3 py-4">
          <li>
            <Link className="flex flex-col hover:bg-theme-blue-dark dark:hover:bg-gray-700 rounded-md p-2 items-center dark:text-gray-200 text-gray-500" href="/">
              <HiHome className="h-8 w-8" />
              <p className="text-xs tracking-wider">Início</p>
            </Link>
          </li>
          <li>
            <Link className="flex flex-col hover:bg-theme-blue-dark dark:hover:bg-gray-700 rounded-md p-2 items-center dark:text-gray-200  bg-theme-red-500 text-white" href="/lives">
              <FaCirclePlay className="h-8 w-8" />
              <p className="text-xs tracking-wider">Lives</p>
              </Link>
          </li>
          <li>
            <Link className="flex flex-col hover:bg-theme-blue-dark dark:hover:bg-gray-700 rounded-md p-2 items-center dark:text-gray-200  text-gray-500" href="/space">
              <IoChatbubbleEllipsesSharp className="h-8 w-8" />
              <p className="text-xs tracking-wider">Space</p>
            </Link>
          </li>
        </ul>
        </div>
        <ul className="flex flex-col sticky bottom-0 gap-3 py-4">
          <li>
            <button className="w-full">
              <a className="flex flex-col hover:bg-theme-blue-dark dark:hover:bg-gray-700 rounded-md p-2 items-center dark:text-gray-200 text-gray-500">
              <TbDoorExit className="h-8 w-8" />
                <p className="text-xs tracking-wider">Sair</p>
              </a>
            </button>
          </li>
        </ul>
      </nav>
      </div>
      <main className="flex flex-col bg-backgroundSecondary grow">
        <div className="flex px-4 py-4 justify-between gap-2 bg-background xl:hidden mb-4">
          <div className="flex gap-2 items-center px-2 bg-backgroundSecondary w-full rounded-lg">
            <div className="relative">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/images/avatar.png" alt="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <TbSettings className="absolute -bottom-1 -right-1 w-5 h-5" />
            </div>
            <p className="text-white">{me?.data?.name}</p>
          </div>
          <div className="flex gap-3 px-4 items-center bg-backgroundSecondary rounded-lg">
            <ToggleTheme />
            <Link href="/notifications" className="relative">
              <IoNotificationsOutline className="w-6 h-6" />
              <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-red-500 px-2 rounded-full text-xs">{me?.data?.notifications}</span>
            </Link>
          </div>
        </div>
        {children}
      </main>
    </div>
  )
}
