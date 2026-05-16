export function getViewedNotifications() {
  const viewed =
    localStorage.getItem(
      "viewedNotifications"
    )

  return viewed ? JSON.parse(viewed) : []
}

export function markAsViewed(id) {
  const viewed =
    getViewedNotifications()

  if (!viewed.includes(id)) {
    viewed.push(id)

    localStorage.setItem(
      "viewedNotifications",
      JSON.stringify(viewed)
    )
  }
}