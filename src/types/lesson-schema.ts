import { z } from 'zod'

const ConteudoSchema = z.object({
  __component: z.string(),
  id: z.number(),
  pontos: z.number(),
  titulo: z.string(),
  tipo: z.string(),
  link: z.string(),
  sufixo: z.null(),
  prefixo: z.null(),
  group: z.null(),
  finished: z.boolean(),
});

const ThumbnailSchema = z.object({
  id: z.number(),
  name: z.string(),
  alternativeText: z.string(),
  caption: z.string(),
  width: z.number(),
  height: z.number(),
  formats: z.object({
    large: z.object({
      ext: z.string(),
      url: z.string(),
      hash: z.string(),
      mime: z.string(),
      name: z.string(),
      path: z.null(),
      size: z.number(),
      width: z.number(),
      height: z.number(),
    }),
    small: z.object({
      ext: z.string(),
      url: z.string(),
      hash: z.string(),
      mime: z.string(),
      name: z.string(),
      path: z.null(),
      size: z.number(),
      width: z.number(),
      height: z.number(),
    }),
    medium: z.object({
      ext: z.string(),
      url: z.string(),
      hash: z.string(),
      mime: z.string(),
      name: z.string(),
      path: z.null(),
      size: z.number(),
      width: z.number(),
      height: z.number(),
    }),
    thumbnail: z.object({
      ext: z.string(),
      url: z.string(),
      hash: z.string(),
      mime: z.string(),
      name: z.string(),
      path: z.null(),
      size: z.number(),
      width: z.number(),
      height: z.number(),
    }),
  }),
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  size: z.number(),
  url: z.string(),
  previewUrl: z.null(),
  provider: z.string(),
  provider_metadata: z.null(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const AulaSchema = z.object({
  id: z.number(),
  nome: z.string(),
  titulo: z.string(),
  descricao: z.string(),
  ativo: z.boolean(),
  tipo: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  slug: z.string(),
  postId: z.null(),
  categoria: z.null(),
  conteudo: z.array(ConteudoSchema),
  thumbnail: ThumbnailSchema,
  progress: z.string(),
});

const CursoSchema = z.object({
  id: z.number(),
  Nome: z.string(),
  Slug: z.string(),
  Descricao: z.string(),
  PaginaVenda: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
  ordem: z.number(),
  hotmartCode: z.string(),
});

export const lessonSchema = z.object({
  id: z.number(),
  attributes: z.object({
    id: z.number(),
    Titulo: z.string(),
    Descricao: z.null(),
    Slug: z.string(),
    diasLiberacao: z.number(),
    nome: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    template: z.null(),
    comments: z.boolean(),
    Aulas: z.array(
      z.object({
        id: z.number(),
        aula: AulaSchema,
      })
    ),
    curso: CursoSchema,
  }),
});

export type LessonSchema = z.infer<typeof lessonSchema>
