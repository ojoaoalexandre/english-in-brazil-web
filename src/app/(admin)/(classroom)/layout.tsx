import { getMe } from "@/actions/get-me"
import { Menu } from "@/components/menu"
import { ToggleTheme } from "@/components/toggle-theme"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { IoNotificationsOutline } from "react-icons/io5"
import { TbSettings } from "react-icons/tb"

export default async function AdminLayout({
  children
}: {
  children: React.ReactNode
}) {
  const me = await getMe()

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
        <div className="p-4">
        {children}
        </div>
      </main>
    </div>
  )
}
