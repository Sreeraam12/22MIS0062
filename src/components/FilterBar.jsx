import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material"

export default function FilterBar({
  filter,
  setFilter,
}) {
  return (
    <FormControl
      fullWidth
      sx={{ marginBottom: 3 }}
    >
      <InputLabel>
        Filter Notifications
      </InputLabel>

      <Select
        value={filter}
        label="Filter Notifications"
        onChange={(e) =>
          setFilter(e.target.value)
        }
      >
        <MenuItem value="All">
          All
        </MenuItem>

        <MenuItem value="Event">
          Event
        </MenuItem>

        <MenuItem value="Result">
          Result
        </MenuItem>

        <MenuItem value="Placement">
          Placement
        </MenuItem>
      </Select>
    </FormControl>
  )
}