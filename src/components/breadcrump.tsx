import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { HiHome } from "react-icons/hi";

interface BreadcrumpProps {
  path: { title: string; url: string }[];
}

export default function Breadcrump({ path }: BreadcrumpProps) {
  return (
    <div className="flex gap-2 p-4 bg-background items-center rounded-md">
      <HiHome className="w-6 h-6" />
      <FaChevronRight className="text-black dark:text-white" />

      {path.map((crumb, index) => (
        <span key={index} className="flex items-center gap-2 text-theme-red-500 font-semibold">
          <Link href={index === path.length - 1 ? '' : crumb.url}>
            {crumb.title}
          </Link>
          {index < path.length - 1 && <FaChevronRight className="text-black dark:text-white" />}
        </span>
      ))}
    </div>
  );
}
