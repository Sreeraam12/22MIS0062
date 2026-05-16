import { useEffect, useState } from "react"
import { fetchNotifications } from "../api/notificationApi"
import { Log } from "../api/loggerApi"

export default function Home() {
  const [notifications, setNotifications] = useState([])

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

      Log(
        "frontend",
        "info",
        "api",
        "Notifications fetched successfully"
      )
    }

    loadNotifications()
  }, [])

  return (
    <div>
      <h1>Campus Notifications</h1>

      {notifications.map((item) => (
        <div key={item.ID}>
          <h3>{item.Type}</h3>
          <p>{item.Message}</p>
          <small>{item.Timestamp}</small>
          <hr />
        </div>
      ))}
    </div>
  )
}