import { Typography, Box } from "@mui/material"
import NotificationCard from "./NotificationCard"

export default function PriorityInbox({
  notifications,
}) {
  return (
    <Box sx={{ marginBottom: 5 }}>
      <Typography
        variant="h4"
        sx={{
          marginBottom: 2,
          color: "#1976d2",
          fontWeight: "bold",
        }}
      >
        Priority Inbox
      </Typography>

      {notifications.map((item) => (
        <NotificationCard
          key={item.ID}
          item={item}
        />
      ))}
    </Box>
  )
}