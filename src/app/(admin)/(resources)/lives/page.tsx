import { fetchLives } from "@/actions/lives/fetch-lives"
import Breadcrump from "@/components/breadcrump"
import CardThumb from "@/components/card-thumb"

export default async function Page() {
  const lives = await fetchLives()
  return (
    <div className="flex flex-col">
    <Breadcrump path={[{ title: 'Lives', url: '/lives' }]} />
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 pt-4">
      {lives?.data && lives?.data.map((live) => (
        <CardThumb key={live.id}
          title={live.title}
          subtitle={live.publishedAt || ''}
          imageUrl={live.thumbnail}
          link={live.link}
        />
      ))}
    </div>
    </div>
  )
}
