import {
  Card,
  CardContent,
  Typography,
  Button,
} from "@mui/material"

import { useState } from "react"

import {
  getViewedNotifications,
  markAsViewed,
} from "../utils/viewedStorage"

export default function NotificationCard({
  item,
}) {
  const viewedNotifications =
    getViewedNotifications()

  const [isViewed, setIsViewed] =
    useState(
      viewedNotifications.includes(
        item?.ID
      )
    )

  function handleViewed() {
    if (item?.ID) {
      markAsViewed(item.ID)

      setIsViewed(true)
    }
  }

  return (
    <Card
      onClick={handleViewed}
      sx={{
        marginBottom: 3,
        borderRadius: 4,
        boxShadow: 4,
        padding: 3,
        backgroundColor: isViewed
          ? "#f5f5f5"
          : "#ffffff",
        cursor: "pointer",
        transition: "0.3s",

        "&:hover": {
          transform: "scale(1.01)",
        },
      }}
    >
      <CardContent>

        <div
          style={{
            display: "flex",
            gap: "12px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          <Button
            variant="contained"
            color={
              item.Type === "Placement"
                ? "success"
                : item.Type === "Result"
                ? "primary"
                : "warning"
            }
            sx={{
              fontWeight: "bold",
              borderRadius: "10px",
              textTransform: "none",
              fontSize: "16px",
              padding: "8px 16px",
            }}
          >
            {item.Type}
          </Button>

          <Button
            variant="contained"
            color={
              isViewed
                ? "inherit"
                : "success"
            }
            sx={{
              fontWeight: "bold",
              borderRadius: "10px",
              textTransform: "none",
              fontSize: "16px",
              padding: "8px 16px",
            }}
          >
            {isViewed
              ? "Viewed"
              : "New Notification"}
          </Button>
        </div>

        <Typography
          sx={{
            fontWeight: "bold",
            marginBottom: 1,
            fontSize:
              "clamp(20px, 3vw, 28px)",
          }}
        >
          {item.Message}
        </Typography>

        <Typography
          sx={{
            color: "gray",
            fontSize:
              "clamp(14px, 2vw, 18px)",
          }}
        >
          {item.Timestamp}
        </Typography>

      </CardContent>
    </Card>
  )
}