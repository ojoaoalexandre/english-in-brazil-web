import { fetchPosts } from "@/actions/fetch-posts";
import Breadcrump from "@/components/breadcrump";
import Image from "next/image";
import Link from "next/link";

export default async function Page() {
  const posts = await fetchPosts()
  return (
    <div>
      <Breadcrump path={[{ title: 'Space', url: '/space' }]} />
      {posts?.data?.map(category => {
        if(category.posts.length === 0) return null

        return (
          <div key={category.category}>
            <h2 className="font-semibold text-lg py-2 mt-4">{category.category}</h2>
            <ul className="grid grid-cols-3 gap-2">
              {category.posts.map(post => (
                <Link key={post.id} href={`/space/${post.slug}`} className="relative w-full max-w-md rounded-lg overflow-hidden bg-gray-900 shadow-md">
                  <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
                    <Image
                      src={post.thumbnail.url}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/40 p-4 flex flex-col justify-end">
                    <p className="text-xs"><span>{post.messagesTotal} comentários</span></p>
                    <p className="text-xs">Last update: <span>{post.updatedAt}</span></p>
                    <h3 className="font-semibold">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </ul>
          </div>
        )
      })}
    </div>
  )
}
