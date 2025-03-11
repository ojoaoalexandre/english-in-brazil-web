import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getUrl = (slug?: string) => {
  return slug ? `${process.env.API_URL}${slug}` : '/images/avatar.png'
}

export const letters = [
  "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "U", "V", "W", "X", "Y", "Z"
];

export const imageURL = (path: string) => path ? `https://cadastro.englishinbrazil.com.br${path}` : null;

export const shuffle = (array: []) => {
  const list = [...array];
  for (let i = list.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [list[i], list[j]] = [list[j], list[i]];
  }
  return list;
};

export const getLetter = (position: number) => letters[position];

export const getLettersRange = (startIn: number, endIn: number) => letters.slice(startIn, endIn);

export const convertDate = (date: Date | string, basic = true) => {
  const convertedDate = new Date(date).toLocaleDateString("pt-BR", {
      hour: "numeric",
      minute: "numeric"
  });
  return basic ? convertedDate.split(" ")[0].replace(/,/g, "") : convertedDate;
};
