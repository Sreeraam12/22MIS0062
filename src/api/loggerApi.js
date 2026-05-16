import axios from "axios"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzcmVlcmFtLnMxMjAyQGdtYWlsLmNvbSIsImV4cCI6MTc3ODkzMTA1MCwiaWF0IjoxNzc4OTMwMTUwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiZTQyY2VlNGItNThlZi00NTNlLWIxMGYtNThkODBlNGE3NTcyIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3JlZSByYW0iLCJzdWIiOiIyOWE5OTVkNC01Mjc1LTQwYTYtYjk0My1hYzYxYmYxNDc0Y2UifSwiZW1haWwiOiJzcmVlcmFtLnMxMjAyQGdtYWlsLmNvbSIsIm5hbWUiOiJzcmVlIHJhbSIsInJvbGxObyI6IjIybWlzMDA2MiIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6IjI5YTk5NWQ0LTUyNzUtNDBhNi1iOTQzLWFjNjFiZjE0NzRjZSIsImNsaWVudFNlY3JldCI6Ikp0Z1N5Z0tTQmRuQ056VFAifQ._EH3UXHkFJEad7B3neU-VozIgklgxFTZCJP9utBCvHceyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzcmVlcmFtLnMxMjAyQGdtYWlsLmNvbSIsImV4cCI6MTc3ODkzMjMxOSwiaWF0IjoxNzc4OTMxNDE5LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMjlmNWM1NmUtYjkxYS00NmY2LThlYmYtMzQwMDA5Y2Q4MWRiIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3JlZSByYW0iLCJzdWIiOiIyOWE5OTVkNC01Mjc1LTQwYTYtYjk0My1hYzYxYmYxNDc0Y2UifSwiZW1haWwiOiJzcmVlcmFtLnMxMjAyQGdtYWlsLmNvbSIsIm5hbWUiOiJzcmVlIHJhbSIsInJvbGxObyI6IjIybWlzMDA2MiIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6IjI5YTk5NWQ0LTUyNzUtNDBhNi1iOTQzLWFjNjFiZjE0NzRjZSIsImNsaWVudFNlY3JldCI6Ikp0Z1N5Z0tTQmRuQ056VFAifQ.Q759YesuLLPRb6O_P6PH9o3mAiOMfEiOj5op4oJbgbA"

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