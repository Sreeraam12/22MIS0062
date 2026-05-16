const priorityMap = {
  Placement: 3,
  Result: 2,
  Event: 1,
}

export function sortByPriority(notifications) {
  return [...notifications]
    .sort((a, b) => {
      const priorityDifference =
        priorityMap[b.Type] - priorityMap[a.Type]

      if (priorityDifference !== 0) {
        return priorityDifference
      }

      return (
        new Date(b.Timestamp) -
        new Date(a.Timestamp)
      )
    })
    .slice(0, 10)
}