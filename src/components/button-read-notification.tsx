'use client'

import { editNotificationById } from "@/actions/edit-notification-by-id"
import { Notification } from "@/types/notification-schema"

export function ButtonReadNotification({
  notification,
  index,
  me
}: {
  notification: Notification,
  index: number,
  me: any
}) {
  const handleReadNotification = async (id: string) => {
    await editNotificationById(id)
  }

  return (
    <div
      key={`${notification.id}-${index}`}
      className="flex flex-row bg-background p-4 rounded-md cursor-pointer"
      onClick={() => handleReadNotification(notification.id)}
    >
      <div className="flex justify-between items-start w-full">
        <div>
          <p className="font-semibold">{notification.title}</p>
          <span className="text-sm">{notification.createdAt}</span>
        </div>
        {!me?.data?.notificationsRead.includes(notification.id.toString()) ? (
          <span className="text-sm border rounded-full px-2">Não Lido</span>
        ): null}
      </div>
    </div>
  )
}
