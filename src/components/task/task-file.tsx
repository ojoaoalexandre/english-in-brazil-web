'use client'

import { FileText } from "lucide-react";
import Link from "next/link";

export const TaskFile = ({
  name,
  link,
}: {
  name: string
  link: string
}) => {

  return (
    <Link
      href={`${process.env.NEXT_PUBLIC_API_URL}${link}`}
      passHref
      target="_blank"
      className="flex items-center bg-background px-4 py-2 gap-4 rounded-md"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-backgroundSecondary rounded-full">
      <FileText className="w-6 h-6" />
      </div>
      <span>{name}</span>
    </Link>
  );
}
