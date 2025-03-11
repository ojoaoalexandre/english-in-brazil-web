import { z } from 'zod'
import { commentSchema } from './comment-schema';

const MediaPronunciationSchema = z.object({
  id: z.number(),
  name: z.string(),
  alternativeText: z.string(),
  caption: z.string(),
  ext: z.string().regex(/^\.(mp3|wav|ogg)$/i, "Formato de áudio inválido"),
  mime: z.string().regex(/^audio\/(mpeg|wav|ogg)$/, "MIME type inválido"),
  size: z.number(),
  url: z.string().url(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

const OpcaoPronunciationSchema = z.object({
  id: z.number(),
  frase: z.string(),
  prefixo: z.string().nullable(),
  media: MediaPronunciationSchema,
});

const grupoPerguntaPronunciationSchema = z.object({
  id: z.number(),
  pergunta: z.string(),
  perguntaComplemento: z.string().nullable(),
  respostaComentada: z.string(),
  opcoes: z.array(OpcaoPronunciationSchema),
});

export type GrupoPerguntaPronunciationSchema = z.infer<typeof grupoPerguntaPronunciationSchema>

/** EXERCISE PRONUNCIATION */
const ExercicioPronunciaSchema = z.object({
  __component: z.literal("aula.exercicio-pronuncia"),
  id: z.number(),
  prefixo: z.string().nullable(),
  GrupoPergunta: z.array(grupoPerguntaPronunciationSchema),
});

const OpcaoColunaSchema = z.object({
  id: z.number(),
  fraseOpcao: z.string(),
  fraseLacuna: z.string().regex(/\[(.*?)\]/, "Formato inválido para fraseLacuna"),
});

export const grupoPerguntaColunaSchema = z.object({
  id: z.number(),
  pergunta: z.string(),
  perguntaComplemento: z.string().optional(),
  respostaComentada: z.string(),
  preenchimento: z.enum(["Lista", "Texto"]),
  opcoes: z.array(OpcaoColunaSchema),
  media: z.nullable(z.any()),
});

export type GrupoPerguntaColunaSchema = z.infer<typeof grupoPerguntaColunaSchema>

/** EXERCISE GAP RELATION */
const ExercicioColunasSchema = z.object({
  __component: z.literal("aula.exercicio-lacunas-relacao"),
  id: z.number(),
  linkVideo: z.nullable(z.string().url().optional()),
  prefixo: z.string(),
  GrupoPergunta: z.array(grupoPerguntaColunaSchema),
});

const OpcaoGapMusicSchema = z.object({
  id: z.number(),
  frase: z.string(),
  prefixo: z.string().nullable(),
  sufixo: z.string().nullable(),
});

const grupoPerguntaGapMusicSchema = z.object({
  id: z.number(),
  pergunta: z.string(),
  perguntaComplemento: z.string().nullable(),
  respostaComentada: z.string(),
  apresentarOpcoes: z.boolean(),
  preenchimento: z.enum(["Texto", "Lista"]),
  opcoes: z.array(OpcaoGapMusicSchema),
  media: z.string().nullable(),
});

export type GrupoPerguntaGapMusicSchema = z.infer<typeof grupoPerguntaGapMusicSchema>

/** EXERCISE GAP MUSIC */
const ExercicioLacunasMusicaSchema = z.object({
  __component: z.literal("aula.exercicio-lacunas-musica"),
  id: z.number(),
  linkVideo: z.string().nullable(),
  prefixo: z.string(),
  sufixo: z.string().nullable(),
  GrupoPergunta: z.array(grupoPerguntaGapMusicSchema),
});

const MediaSchema = z.object({
  id: z.number(),
  name: z.string(),
  alternativeText: z.string().nullable(),
  caption: z.string().nullable(),
  width: z.number().nullable(),
  height: z.number().nullable(),
  formats: z.unknown().nullable(),
  hash: z.string(),
  ext: z.string(),
  mime: z.string(),
  size: z.number(),
  url: z.string(),
  previewUrl: z.string().nullable(),
  provider: z.string(),
  provider_metadata: z.unknown().nullable(),
  createdAt: z.string(),
  updatedAt: z.string()
});

const OpcaoSchema = z.object({
  id: z.number(),
  opcao: z.string(),
  correta: z.boolean()
});

const grupoPerguntaSchema = z.object({
  id: z.number(),
  pergunta: z.string(),
  perguntaComplemento: z.string().nullable(),
  respostaComentada: z.string().nullable(),
  sufixo: z.string().nullable(),
  opcoes: z.array(OpcaoSchema),
  media: MediaSchema.nullable()
});

export type GrupoPerguntaSchema = z.infer<typeof grupoPerguntaSchema>

/** EXERCISE MULTIPLE CHOICE */
const ExercicioMultiplaEscolhaSchema = z.object({
  __component: z.literal("aula.exercicio-multipla-escolha"),
  id: z.number(),
  linkVideo: z.string().nullable(),
  prefixo: z.string().nullable(),
  GrupoPergunta: z.array(grupoPerguntaSchema),
  media: MediaSchema.nullable()
});

const grupoSimplesSchema = z.object({
  id: z.number(),
  titulo: z.string(),
  subTitulo: z.string(),
  conteudo: z.string(),
  comentarioResposta: z.string(),
  tipo: z.string(),
});

export type GrupoSimplesSchema = z.infer<typeof grupoSimplesSchema>

/** EXERCISE SIMPLE */
const ExercicioSimplesSchema = z.object({
  __component: z.literal("aula.exercicio"),
  id: z.number(),
  linkVideo: z.string().nullable(),
  prefixo: z.string().nullable(),
  GrupoPergunta: z.array(grupoSimplesSchema),
  media: MediaSchema.nullable()
});

const ContentExerciseSchema = z.array(
  z.union([
    ExercicioPronunciaSchema,
    ExercicioColunasSchema,
    ExercicioLacunasMusicaSchema,
    ExercicioMultiplaEscolhaSchema,
    ExercicioSimplesSchema
  ])
);

export const exerciseSchema = z.object({
  id: z.number(),
  titulo: z.string(),
  subTitulo: z.string().nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
  isUniqueValidation: z.boolean().nullable(),
  conteudos: ContentExerciseSchema
});

export type ExerciseSchema = z.infer<typeof exerciseSchema>

/** EXERCISE */
const TaskExerciseSchema = z.object({
  __component: z.literal("aula.exercicio-em-aula"),
  id: z.number(),
  pontos: z.number(),
  prefixo: z.string().nullable(),
  sufixo: z.string().nullable(),
  titulo: z.string(),
  group: z.string().nullable(),
  aula_exercicio: exerciseSchema,
  atividadeConcluida: z.boolean()
});

const FileSchema = z.object({
  id: z.number(),
  name: z.string(),
  alternativeText: z.string(),
  caption: z.string(),
  width: z.null(),
  height: z.null(),
  formats: z.null(),
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

/** FILE */
const FileContentSchema = z.object({
  __component: z.string(),
  id: z.number(),
  titulo: z.string(),
  prefixo: z.null(),
  sufixo: z.null(),
  pontos: z.number(),
  group: z.null(),
  arquivo: z.array(FileSchema),
  conteudoTexto: z.string().optional(),
  atividadeConcluida: z.boolean(),
});

const audioSchema = z.object({
  id: z.number(),
  name: z.string(),
  alternativeText: z.string(),
  caption: z.string(),
  width: z.null(),
  height: z.null(),
  formats: z.null(),
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

export type AudioSchema = z.infer<typeof audioSchema>

const TabelaConteudoSchema = z.object({
  id: z.number(),
  conteudoPt: z.string(),
  conteudoEn: z.string(),
  audio: audioSchema.optional(),
});

const tableSchema = z.object({
  id: z.number(),
  titulo: z.string().optional(),
  prefixo: z.string().optional(),
  sufixo: z.null(),
  TabelaConteudo: z.array(TabelaConteudoSchema),
});

export type TableSchema = z.infer<typeof tableSchema>

/** VOCABULARY */
const VocabularySchema = z.object({
  __component: z.string(),
  id: z.number(),
  pontos: z.number(),
  prefixo: z.string(),
  sufixo: z.null(),
  titulo: z.string(),
  group: z.string(),
  tabelas: z.array(tableSchema),
  conteudoTexto: z.string().optional(),
  atividadeConcluida: z.boolean(),
});

const dialogSchema = z.object({
  id: z.number(),
  inicio: z.string(),
  final: z.string(),
  fraseEn: z.string(),
  frasePt: z.string(),
  dialogo_interlocutor: z.object({
    id: z.number(),
    nome: z.string(),
    createdAt: z.string(),
    updatedAt: z.string(),
    imagem: z.object({
      id: z.number(),
      name: z.string(),
      alternativeText: z.string(),
      caption: z.string(),
      width: z.number().nullable(),
      height: z.number().nullable(),
      formats: z.object({
        small: z.object({
          ext: z.string(),
          url: z.string(),
          hash: z.string(),
          mime: z.string(),
          name: z.string(),
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
    }),
  }),
});

export type DialogSchema = z.infer<typeof dialogSchema>

/** DIALOG */
const DialogContentSchema = z.object({
  __component: z.string(),
  id: z.number(),
  pontos: z.number(),
  titulo: z.string(),
  prefixo: z.null(),
  sufixo: z.null(),
  group: z.null(),
  audio: audioSchema,
  dialogoFrases: z.array(dialogSchema),
  atividadeConcluida: z.boolean(),
});

/** VIDEO */
const VideoContentSchema = z.object({
  __component: z.string(),
  id: z.number(),
  pontos: z.number(),
  titulo: z.string(),
  tipo: z.string(),
  link: z.string(),
  sufixo: z.null(),
  prefixo: z.string(),
  group: z.null(),
  conteudoTexto: z.string().optional(),
  atividadeConcluida: z.boolean(),
});

const NextLessonSchema = z.object({
  moduleSlug: z.string(),
  lessonSlug: z.string(),
  contentType: z.string(),
  contentId: z.number(),
});

const NextModuleSchema = z.object({
  moduleSlug: z.string(),
  lessonSlug: z.string(),
  contentType: z.string(),
  contentId: z.number(),
});

const ContentSchema = z.array(
  z.union([
    TaskExerciseSchema,
    FileContentSchema,
    VocabularySchema,
    DialogContentSchema,
    VideoContentSchema,
  ])
);

export const taskSchema = z.object({
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
  conteudo: ContentSchema,
  commentPending: z.array(commentSchema),
  commentResponse: z.array(commentSchema),
  enabledComments: z.boolean(),
  nextLesson: NextLessonSchema,
  nextModule: NextModuleSchema,
});

export type TaskSchema = z.infer<typeof taskSchema>
