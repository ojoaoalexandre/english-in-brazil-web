import { z } from 'zod'

const ConteudoSchema = z.object({
  __component: z.string(),
  id: z.number(),
  pontos: z.number(),
  atividadeConcluida: z.boolean(),
});

const CapaSchema = z.object({
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
  slug: z.string(),
  tipo: z.string(),
  postId: z.null(),
  ativo: z.boolean(),
  conteudo: z.array(ConteudoSchema),
  post: z.null(),
  qtdeConteudo: z.number(),
  link: z.string(),
  qtdePontos: z.number(),
  qtdeConteudoConcluido: z.number(),
  aulaConcluida: z.boolean(),
});

export const chapterSchema = z.object({
  id: z.number(),
  Titulo: z.string(),
  Descricao: z.string(),
  Slug: z.string(),
  diasLiberacao: z.number(),
  capa: CapaSchema,
  Aulas: z.array(z.object({
    id: z.number(),
    aula: AulaSchema,
  })),
  aulas: z.array(AulaSchema),
  qtdeAulas: z.number(),
  qtdeAulasConcluidas: z.number(),
});

export type ChapterSchema = z.infer<typeof chapterSchema>
