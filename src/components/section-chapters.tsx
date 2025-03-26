'use client'

import { LessonSchema } from "@/types/lesson-schema";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ProgressCircle } from "./progress-circle";

const complementary = [
  "learningToLearn",
  "pronunciationDrop"
]

export const SectionChapters = ({ lessons }: { lessons: LessonSchema }) => {
  const [showResources, setShowResources] = useState(false);

  const groupItemsByCategory = (items) => {
    const groups = [];
    let currentGroup: LessonSchema[] = [];

    items.forEach((item: LessonSchema) => {
      if (item.aula.categoria === null) {
        if (currentGroup.length > 0) {
          groups.push(currentGroup);
        }

        currentGroup = [item]

      } else {
        currentGroup.push(item);
      }
    });

    if (currentGroup.length > 0) {
      groups.push(currentGroup);
    }

    return groups;
  };


  return lessons.attributes.template ? (
    <div className="flex flex-col gap-2">
      <div className="flex">
        <button className="px-4 py-2 rounded-full bg-background" onClick={() => setShowResources(!showResources)}>Materiais Complementares</button>
      </div>

      {groupItemsByCategory(lessons?.attributes.Aulas).map((lesson, index) => {
          return (
            <div key={index} className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {lesson.filter(
                task => showResources ?
                  complementary.includes(task.aula.categoria)
                  : !complementary.includes(task.aula.categoria)
                ).map(task => (
                  <Link
                  key={task.id}
                  className="relative w-full max-w-md rounded-lg overflow-hidden bg-gray-900 shadow-md my-2 hover:scale-105 mt-4"
                  href={`/class/${lessons.attributes.curso.Slug}/${lessons.attributes.Slug}/${task.aula.slug}/${task.aula.conteudo[0].__component}/${task.aula.conteudo[0].id}`}
                  >
                  <div className="relative w-full h-44">
                    <Image
                      src={task.aula.thumbnail.url}
                      alt={task.aula.titulo}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>

                  <div className="flex items-center justify-between absolute top-4 right-4 bg-white rounded-full text-black">
                    <ProgressCircle progress={Number(task.aula.progress)} />
                  </div>

                </Link>
              ))}
            </div>
          )
        }
      )}
    </div>
  ): (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      {lessons?.attributes.Aulas.map(lesson => (
        <Link
          key={lesson.id}
          className="relative w-full max-w-md rounded-lg overflow-hidden bg-gray-900 shadow-md hover:scale-105 mt-4"
          href={`/class/${lessons.attributes.curso.Slug}/${lessons.attributes.Slug}/${lesson.aula.slug}/${lesson.aula.conteudo[0].__component}/${lesson.aula.conteudo[0].id}`}
          >
          <div className="relative w-full h-44">
            <Image
              src={lesson.aula.thumbnail.url}
              alt={lesson.aula.titulo}
              layout="fill"
              objectFit="cover"
            />
          </div>

          <div className="flex items-center justify-between absolute top-4 right-4 bg-white rounded-full text-black">
            <ProgressCircle progress={Number(lesson.aula.progress)} />
          </div>

        </Link>
      ))}
    </div>
  )
}
