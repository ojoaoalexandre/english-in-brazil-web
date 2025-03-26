import { getMe } from "@/actions/get-me"
import { getLastLive } from "@/actions/get-last-live"
import CardThumb from "@/components/card-thumb"
import { ToggleTheme } from "@/components/toggle-theme"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import { IoNotificationsOutline } from "react-icons/io5"
import { TbSettings } from "react-icons/tb"
import { Menu } from "@/components/menu"

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  const [me, live] = await Promise.all([
    getMe(),
    getLastLive()
  ])

  return (
    <div className="flex min-h-screen">
      <Menu />

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
              <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-theme-red px-2 rounded-full text-xs">{me?.data?.notifications}</span>
            </Link>
          </div>
        </div>
        <div className="p-8">
          {children}
        </div>
      </main>
      <aside className="hidden w-full xl:block xl:max-w-sm">
        <div className="flex px-4 py-4 justify-between gap-2">
          <div className="flex gap-2 items-center px-2 bg-backgroundSecondary w-full rounded-lg">
            <div className="relative">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/images/avatar.png" alt="" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <TbSettings className="absolute -bottom-1 -right-1 w-5 h-5" />
            </div>
            <p className="text-white truncate overflow-hidden">{me?.data?.name}</p>
          </div>
          <div className="flex gap-3 px-4 items-center bg-backgroundSecondary rounded-lg">
            <ToggleTheme />
            <Link href="/notifications"  className="relative">
              <IoNotificationsOutline className="w-6 h-6" />
              <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-theme-red px-2 rounded-full text-xs">{me?.data?.notifications}</span>
            </Link>
          </div>
        </div>

        {live?.data.title ? (
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
