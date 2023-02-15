const days = [ 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const schedules = { teenth: 13, first: 1, second: 8, third: 15, fourth: 22 }

export const meetup = (year, month, schedule, dayOfWeek) => {
  const firstDay = new Date(
    year,
    month - 1,
    schedules[schedule] || new Date(year, month, 0).getDate() - 6
  )

  return new Date(
    firstDay.getFullYear(),
    firstDay.getMonth(),
    firstDay.getDate() + ((days.indexOf(dayOfWeek) - firstDay.getDay() + 7) % 7)
  )
}
