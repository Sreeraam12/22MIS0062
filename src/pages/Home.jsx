import { useEffect, useState } from "react"
import { fetchNotifications } from "../api/notificationApi"
import { Log } from "../api/loggerApi"
import { sortByPriority } from "../utils/prioritySort"
import PriorityInbox from "../components/PriorityInbox"
import NotificationCard from "../components/NotificationCard"

export default function Home() {
  const [notifications, setNotifications] = useState([])
  const [priorityNotifications, setPriorityNotifications] = useState([])

  useEffect(() => {
    async function loadNotifications() {
      Log(
        "frontend",
        "info",
        "api",
        "Fetching notifications"
      )

      const data = await fetchNotifications()

      setNotifications(data)

      const sortedNotifications =
        sortByPriority(data)

      setPriorityNotifications(
        sortedNotifications
      )

      Log(
        "frontend",
        "info",
        "api",
        "Priority inbox generated"
      )
    }

    loadNotifications()
  }, [])

  return (
  <div style={{ padding: "20px" }}>
    <h1
      style={{
        textAlign: "center",
        marginBottom: "30px",
      }}
    >
      Campus Notifications
    </h1>

    <PriorityInbox
      notifications={priorityNotifications}
    />

    <h2
      style={{
        marginBottom: "20px",
      }}
    >
      All Notifications
    </h2>

    {notifications.map((item) => (
      <NotificationCard
        key={item.ID}
        item={item}
      />
    ))}
  </div>
)
}