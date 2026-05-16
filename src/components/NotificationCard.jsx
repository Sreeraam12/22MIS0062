import {
  Card,
  CardContent,
  Typography,
  Chip,
} from "@mui/material"

export default function NotificationCard({
  item,
}) {
  return (
    <Card
      sx={{
        marginBottom: 2,
        borderRadius: 3,
        boxShadow: 3,
      }}
    >
      <CardContent>
        <Chip
          label={item.Type}
          color="primary"
          sx={{ marginBottom: 1 }}
        />

        <Typography variant="h6">
          {item.Message}
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
        >
          {item.Timestamp}
        </Typography>
      </CardContent>
    </Card>
  )
}