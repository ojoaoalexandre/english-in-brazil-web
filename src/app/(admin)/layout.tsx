import { getLastLive } from "@/actions/lives/get-last-live"
import CardThumb from "@/components/card-thumb"
import { Navbar } from "@/components/navbar"
import { ToggleTheme } from "@/components/toggle-theme"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown } from "lucide-react"
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
  const live = await getLastLive()

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
      <main className="flex flex-col bg-backgroundSecondary grow p-8">
        <Navbar />
        {children}
      </main>
      <aside className="w-full max-w-sm">
        <div className="flex px-4 py-4 justify-between gap-2">
          <div className="flex gap-2 items-center px-2 bg-backgroundSecondary w-full rounded-lg">
            <div className="relative">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <TbSettings className="absolute -bottom-1 -right-1 w-5 h-5" />
            </div>
            <p className="text-white">João Alexandre</p>
          </div>
          <div className="flex gap-3 px-4 items-center bg-backgroundSecondary rounded-lg">
            <ToggleTheme />
            <IoNotificationsOutline className="w-6 h-6" />
          </div>
        </div>

        {live?.data ? (
          <section className="px-4">
            <header className="flex justify-between py-2">
              <h3 className="text-xl font-semibold">Live</h3>
              <ChevronDown className="w-6 h-6" />
            </header>
            <CardThumb
              title={live.data.title}
              subtitle={live.data.publishedAt}
              imageUrl={live.data.thumbnail}
              link={live.data.link}
            />
          </section>
        ): null}
      </aside>
    </div>
  )
}
