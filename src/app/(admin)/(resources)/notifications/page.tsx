import { fetchNotifications } from "@/actions/fetch-notifications"
import { getMe } from "@/actions/get-me"
import Breadcrump from "@/components/breadcrump"
import { ButtonReadNotification } from "@/components/button-read-notification"

export default async function Page() {
  const [me, notifications] = await Promise.all([
    getMe(),
    fetchNotifications()
  ])

  return (
    <div className="flex flex-col gap-2">
      <Breadcrump path={[{ title: 'Notifications', url: '/notifications' }]} />
      {notifications?.data?.map((notification, index) => (
        <ButtonReadNotification
          key={`${notification.id}-${index}`}
          notification={notification}
          index={index}
          me={me}
        />
      ))}
    </div>
  )
}
