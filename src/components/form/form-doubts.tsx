'use client'

import { useForm } from "react-hook-form"
import { Form } from "../ui/form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import Image from "next/image"
import { toast } from "sonner"
import { createDoubt } from "@/actions/create-doubt"

export const formDoubtsSchema = z.object({
    content: z.string().min(10, {
      message: 'A dúvida deve ter no mínimo 10 caracteres'
    }),
})

export type FormDoubtsSchema = z.infer<typeof formDoubtsSchema>

export const FormDoubts = ({
  course_slug,
  chapter_slug,
  lesson_slug,
  component,
  component_id,
  avatar,
}: {
  course_slug: string
  chapter_slug: string
  lesson_slug: string
  component: string
  component_id: string
  avatar?: string
}) => {
  const form = useForm<FormDoubtsSchema>({
    resolver: zodResolver(formDoubtsSchema),
    defaultValues: {
      content: '',
    }
  })

  const handleSubmit = async (data: FormDoubtsSchema) => {
      const response = await createDoubt({
        lesson: lesson_slug,
        course: course_slug,
        chapter: chapter_slug,
        __component: component,
        id: component_id,
        message: data.content
      })

      if(response?.error) {
        toast.error('Não foi possível adicionar a sua dúvida')
        return
      }

      toast.success('Dúvida adicionada com sucesso')
      form.reset()
  }

  return (
    <Form {...form}>
      <form className="flex gap-2" onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="w-12">
            <Image
              src={avatar || '/avatar.png'}
              alt="Avatar"
              width={80}
              height={80}
              className="rounded-full"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <textarea
              placeholder="Adicionar Dúvida..."
              {...form.register('content')}
              className="px-4 py-1 rounded-sm bg-gray-200 dark:bg-theme-gray-600 dark:text-white"
              rows={3}
            ></textarea>
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-4 py-1 bg-white rounded-md dark:bg-theme-gray-800 dark:text-white"
              >
                Adicionar
              </button>
            </div>
          </div>
        </form>
    </Form>
  )
}
