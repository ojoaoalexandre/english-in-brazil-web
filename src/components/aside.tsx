import { TbSettings } from "react-icons/tb"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import Link from "next/link"
import { IoNotificationsOutline } from "react-icons/io5"
import { ChevronDown } from "lucide-react"
import CardThumb from "./card-thumb"
import { ToggleTheme } from "./toggle-theme"

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Aside = ({ me, live }: { me: any, live?: any }) => {
  return (
    <aside className="hidden w-full xl:block xl:max-w-sm bg-background">
        <div className="flex px-4 py-4 justify-between gap-2">
          <div className="flex gap-2 items-center px-2 bg-backgroundSecondary w-full rounded-lg">
            <div className="relative">
              <Avatar className="w-16 h-16">
                <AvatarImage src="/images/avatar.png" alt="" />
                <AvatarFallback>EB</AvatarFallback>
              </Avatar>
              <TbSettings className="absolute -bottom-1 -right-1 w-5 h-5" />
            </div>
            <p className="text-white truncate overflow-hidden">{me?.data?.name}</p>
          </div>
          <div className="flex gap-3 px-4 items-center bg-backgroundSecondary rounded-lg">
            <ToggleTheme />
            <Link href="/notifications"  className="relative">
              <IoNotificationsOutline className="w-6 h-6" />
              <span className="absolute left-1/2 -translate-x-1/2 -top-2 bg-red-500 px-2 rounded-full text-xs">{me?.data?.notifications}</span>
            </Link>
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
              subtitle={live.data.publishedAt ?? ''}
              imageUrl={live.data.thumbnail}
              link={live.data.link}
            />
          </section>
        ): null}
      </aside>
  )
}
