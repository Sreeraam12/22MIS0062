import { useEffect, useState } from "react"
import { fetchNotifications } from "../api/notificationApi"
import { Log } from "../api/loggerApi"
import { sortByPriority } from "../utils/prioritySort"
import PriorityInbox from "../components/PriorityInbox"
import NotificationCard from "../components/NotificationCard"
import FilterBar from "../components/FilterBar"
import { Button } from "@mui/material"

export default function Home() {
  const [notifications, setNotifications] = useState([])
  const [priorityNotifications, setPriorityNotifications] = useState([])
  const [filter, setFilter] = useState("All")
 const [currentPage, setCurrentPage] = useState(1)

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

  const filteredNotifications =
  filter === "All"
    ? notifications
    : notifications.filter(
        (item) => item.Type === filter
      )
    
        const notificationsPerPage = 5

        const startIndex =
        (currentPage - 1) *
        notificationsPerPage

        const paginatedNotifications =
        filteredNotifications.slice(
            startIndex,
            startIndex + notificationsPerPage
        )

        const totalPages = Math.ceil(
        filteredNotifications.length /
            notificationsPerPage
        )
    return (
    <div
        style={{
        padding: "30px",
        maxWidth: "1200px",
        margin: "auto",
        }}
    >
        <h1
        style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "56px",
            fontWeight: "bold",
            color: "#1976d2",
        }}
        >
        Campus Notifications
        </h1>

        <PriorityInbox
        notifications={priorityNotifications}
        />

        <FilterBar
        filter={filter}
        setFilter={setFilter}
        />

        <h2
        style={{
            marginTop: "40px",
            marginBottom: "20px",
            fontSize: "32px",
        }}
        >
        All Notifications
        </h2>

        {paginatedNotifications.map((item) => (
        <NotificationCard
            key={item.ID}
            item={item}
        />
        ))
    }

    <div
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        marginTop: "30px",
      }}
    >
      <Button
        variant="contained"
        size="large"
        disabled={currentPage === 1}
        onClick={() =>
          setCurrentPage(currentPage - 1)
        }
      >
        Previous
      </Button>

      <Button
        variant="contained"
        size="large"
        disabled={
          currentPage === totalPages
        }
        onClick={() =>
          setCurrentPage(currentPage + 1)
        }
      >
        Next
      </Button>
    </div>
  </div>
)
}