import { getNotificationById } from "@/actions/get-notification-by-id";
import Breadcrump from "@/components/breadcrump";
import Markdown from "@/components/markdown";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const id = (await params).id
  const notification = await getNotificationById(id)

  return (
    <div>
      <Breadcrump path={[{ title: 'Notifications', url: '/notifications' }]} />
      <div className="bg-background p-4 rounded-md mt-4">
        <h2 className="font-semibold">{notification?.data?.title}</h2>
        <p>{notification?.data?.createdAt}</p>

        {notification?.data?.content ? (
          <Markdown content={notification.data.content} />
        ): null}
      </div>
    </div>
  )
}
