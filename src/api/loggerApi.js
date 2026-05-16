import axios from "axios"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzcmVlcmFtLnMxMjAyQGdtYWlsLmNvbSIsImV4cCI6MTc3ODkyOTkyNSwiaWF0IjoxNzc4OTI5MDI1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZmU4NWQ1M2QtYjNjMS00Y2E0LWE2YmItYzdkNzVkZWM2MGQwIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3JlZSByYW0iLCJzdWIiOiIyOWE5OTVkNC01Mjc1LTQwYTYtYjk0My1hYzYxYmYxNDc0Y2UifSwiZW1haWwiOiJzcmVlcmFtLnMxMjAyQGdtYWlsLmNvbSIsIm5hbWUiOiJzcmVlIHJhbSIsInJvbGxObyI6IjIybWlzMDA2MiIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6IjI5YTk5NWQ0LTUyNzUtNDBhNi1iOTQzLWFjNjFiZjE0NzRjZSIsImNsaWVudFNlY3JldCI6Ikp0Z1N5Z0tTQmRuQ056VFAifQ.EHzcNTclck0RKJKLAGaEJQnIHM5mIv4gnqQnT_rWg3s"

export async function Log(stack, level, packageName, message) {
  try {
    const response = await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: packageName,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    )

    console.log("Log created:", response.data)
  } catch (error) {
    console.error("Logging failed:", error)
  }
}