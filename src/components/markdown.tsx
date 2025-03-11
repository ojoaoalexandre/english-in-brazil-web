/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { ButtonPlayer } from './button-player';
import { useFormContext } from 'react-hook-form';
import Image from 'next/image';
import { ReactNode } from 'react';

interface MarkdownProps {
  children: React.ReactNode;
  optionId?: string | number;
  exerciseCompleted?: boolean;
  errors?: Record<string, any>;
}

export const Markdown: React.FC<MarkdownProps> = ({
  children,
  optionId,
  exerciseCompleted,
  errors
}) => {
  const form = useFormContext();

  const convertVideoLinksToIframe = (content: string) => {
    const videoUrlRegex = /\[\{\{(.*?)\}\}\]/g;

    return content.replace(videoUrlRegex, (_, url: string) => {
      return `<div class="flex flex-col w-full items-center justify-center py-2"><iframe width="560" height="315" src="${url}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe><div>`;
    });
  };

  const customRender = (content: string | ReactNode) => {
    const options: string[] = [];

    const gap = typeof content === 'string' ? content.split(/(\[\(.*?\)\])/g).map((sentence: string) => {
        const gapSentence = /\[\((.*?)\)\]/g.test(sentence);

        if (gapSentence) {
          options.push("1");

          return (
            `<gap value="${sentence.replace(/\[\(|\)\]/g, "").toLowerCase()}" key="${options.length}">${optionId}${options.length - 1}</gap>`
          );
        }
        return sentence;
      }).join('') : ""

    const video = convertVideoLinksToIframe(gap);

    return video
  }

  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypeRaw]}
      components={{
        u: ({ ...props }) => <u style={{ textDecoration: 'underline' }} {...props} />,
        ol: ({ children }) => <ol className="pl-5">{children}</ol>,
        li: ({ children }) => <li className="list-decimal">{children}</li>,
        a: ({ children, ...props }) => (
          <a target="_blank" className="underline text-red-500" {...props}>
            {children}
          </a>
        ),
        p: ({ children, ...props }) => <p {...props}>{children}</p>,
        h2: ({ children, ...props }) => (
          <div className="flex justify-center w-full items-center">
            <h2 className="font-semibold text-2xl" {...props}>
              {children}
            </h2>
          </div>
        ),
        img: ({ src }) => (
          <Image src={`https://cadastro.englishinbrazil.com.br${src}`} alt="src" />
        ),
        table: ({ children, ...props }) => (
          <table className="table-fixed text-black w-full border-collapse my-4" {...props}>
            {children}
          </table>
        ),
        th: ({ children }) => <th className="border pl-2 py-2 bg-gray-200 first">{children}</th>,
        td: ({ children }) => (
          <td className="py-2 border pl-2">
            {typeof children === 'string' && children.indexOf(".mp3") >= 0 ? (
              <ButtonPlayer path={children?.replace("{", "").replace("}", "")} />
            ) : (
              children
            )}
          </td>
        ),
        tr: ({ children }) => <tr className="bg-white hover:bg-gray-50">{children}</tr>,
        thead: ({ children }) => <thead className="first:w-14">{children}</thead>,
        br: () => <div className="py-4" />,
        gap: ({ children, value }: {
          children: string;
          value: string;
        }) => {
          return exerciseCompleted ? (
            <span className="border rounded border-green-500 py-1 px-4 bg-green-200 text-gray-700">
              {value}
            </span>
          ) : (
            <div className="inline-block relative">
              <input
                type="text"
                className={`${
                  errors && (errors[children] === null || errors[children] === "wrong")
                    ? "border-red-500"
                    : ""
                } text-sm w-32 appearance-none border rounded py-1 px-2 text-black bg-white focus:outline-none focus:shadow-outline`}
                {...form.register(children)}
              />

              {errors && errors[children] === "wrong" && (
                <span className="absolute -top-5 bg-red-300 text-red-800 text-sm rounded-full px-2 right-0">
                  {value}
                </span>
              )}
            </div>
          )
        },
        border: ({ children }: { children: string }) => <div className="border-2 border-red-500 rounded-md p-4">{children}</div>,
      }}
    >
      {customRender(children)}
    </ReactMarkdown>
  );
}
