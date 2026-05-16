import axios from "axios"

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzcmVlcmFtLnMxMjAyQGdtYWlsLmNvbSIsImV4cCI6MTc3ODkzNDA5OCwiaWF0IjoxNzc4OTMzMTk4LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiM2Y4M2Y0Y2YtNDJlNC00NjQyLThkZDUtZTBiNGM2MmJhODk5IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3JlZSByYW0iLCJzdWIiOiIyOWE5OTVkNC01Mjc1LTQwYTYtYjk0My1hYzYxYmYxNDc0Y2UifSwiZW1haWwiOiJzcmVlcmFtLnMxMjAyQGdtYWlsLmNvbSIsIm5hbWUiOiJzcmVlIHJhbSIsInJvbGxObyI6IjIybWlzMDA2MiIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6IjI5YTk5NWQ0LTUyNzUtNDBhNi1iOTQzLWFjNjFiZjE0NzRjZSIsImNsaWVudFNlY3JldCI6Ikp0Z1N5Z0tTQmRuQ056VFAifQ.Y3-LFeAhu8yddqDyw8JI1T65-eNK-pby6mNC0eRcOGweyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJzcmVlcmFtLnMxMjAyQGdtYWlsLmNvbSIsImV4cCI6MTc3ODkzNTI4NSwiaWF0IjoxNzc4OTM0Mzg1LCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiMmIwNTEyMTQtNDJjOS00OWY0LTlmZGMtN2M2MWJmZGZhMGU0IiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoic3JlZSByYW0iLCJzdWIiOiIyOWE5OTVkNC01Mjc1LTQwYTYtYjk0My1hYzYxYmYxNDc0Y2UifSwiZW1haWwiOiJzcmVlcmFtLnMxMjAyQGdtYWlsLmNvbSIsIm5hbWUiOiJzcmVlIHJhbSIsInJvbGxObyI6IjIybWlzMDA2MiIsImFjY2Vzc0NvZGUiOiJTZkZ1V2ciLCJjbGllbnRJRCI6IjI5YTk5NWQ0LTUyNzUtNDBhNi1iOTQzLWFjNjFiZjE0NzRjZSIsImNsaWVudFNlY3JldCI6Ikp0Z1N5Z0tTQmRuQ056VFAifQ.BDWmy5avbNRWKluC4oFmTwBKxD3JesX6RV0E2mh1Bs4"

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