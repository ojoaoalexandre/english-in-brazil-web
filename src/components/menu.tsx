'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { signOut } from '@/actions/auth/sign-out'
// import { Mobile } from './Mobile'

export const Menu = () => {
  const router = usePathname()
  const { theme } = useTheme()

  const isActive: (pathname: string) => boolean = pathname => {
    const path = router.indexOf('/', 1)
    return (
      (path > 0 ? router.substring(0, path) : router) ===
      pathname
    )
  }

  const logout = async () => {
    await signOut()
  }

  const homeButton = (
    <li>
      <Link href={'/'}           className={`flex flex-col hover:bg-theme-blue-dark dark:hover:bg-gray-700 rounded-md p-2 items-center dark:text-gray-200 ${
            isActive('/') ? 'bg-theme-red-500 text-white' : 'text-gray-500'
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 "
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
          <p className="text-xs tracking-wider">Início</p>
      </Link>
    </li>
  )

  const spaceButton = (
    <li>
      <Link href={'/space'} className={`flex flex-col hover:bg-theme-blue-dark dark:hover:bg-gray-700 rounded-md p-2 items-center dark:text-gray-200  ${
            isActive('/space') ? 'bg-theme-red-500 text-white' : 'text-gray-500'
          }`}>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs tracking-wider">Space</p>
      </Link>
    </li>
  )

  const liveButton = (
    <li>
      <Link href={'/lives'}           className={`flex flex-col hover:bg-theme-blue-dark dark:hover:bg-gray-700 rounded-md p-2 items-center dark:text-gray-200  ${
            isActive('/lives') ? 'bg-theme-red-500 text-white' : 'text-gray-500'
          }`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs tracking-wider">Lives</p>
      </Link>
    </li>
  )

  const logoffButton = (
    <li>
      <button onClick={logout} className="w-full">
        <div
          className={`flex flex-col hover:bg-theme-blue-dark dark:hover:bg-gray-700 rounded-md p-2 items-center dark:text-gray-200 ${
            isActive('/logoff') ? 'bg-menu-active' : 'text-gray-500'
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
              clipRule="evenodd"
            />
          </svg>
          <p className="text-xs tracking-wider">Sair</p>
        </div>
      </button>
    </li>
  )

  return (
    <section className={`flex`}>
      <aside className="hidden md:flex flex-col px-2 justify-between border-r-2 border-gray-200 dark:border-gray-800 dark:bg-theme-gray-900">
        <div className="sticky top-0">
          <div className="flex py-10 w-16">
            {theme !== 'dark' && <Image src="/logo.png" width={80}  height={80} alt="English in Brazil" />}
            {theme === 'dark' && <Image src="/logoDark.png" width={80}  height={80} alt="English in Brazil" />}
          </div>
          <ul className="flex flex-col gap-3 py-4">
            {homeButton}
            {liveButton}
            {spaceButton}
          </ul>
        </div>

        <ul className="flex flex-col sticky bottom-0 gap-3 py-4">
          {logoffButton}
        </ul>
      </aside>

      {/* <Mobile /> */}
    </section>
  )
}
