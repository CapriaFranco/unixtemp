export type TimeFormat = "UNIX" | "UNIX_LOCAL" | "LEGIBLE" | "ISO8601" | "UTC" | "GMT" | "GMT_LOCAL"

interface RelativeTimeTranslations {
  ago: string
  fromNow: string
  year: string
  years: string
  month: string
  months: string
  day: string
  days: string
  hour: string
  hours: string
  minute: string
  minutes: string
  second: string
  seconds: string
  and: string
}

const relativeTimeTranslations: Record<"en" | "es" | "pt", RelativeTimeTranslations> = {
  en: {
    ago: "ago",
    fromNow: "from now",
    year: "year",
    years: "years",
    month: "month",
    months: "months",
    day: "day",
    days: "days",
    hour: "hour",
    hours: "hours",
    minute: "minute",
    minutes: "minutes",
    second: "second",
    seconds: "seconds",
    and: "and",
  },
  es: {
    ago: "hace",
    fromNow: "en",
    year: "año",
    years: "años",
    month: "mes",
    months: "meses",
    day: "día",
    days: "días",
    hour: "hora",
    hours: "horas",
    minute: "minuto",
    minutes: "minutos",
    second: "segundo",
    seconds: "segundos",
    and: "y",
  },
  pt: {
    ago: "atrás",
    fromNow: "em",
    year: "ano",
    years: "anos",
    month: "mês",
    months: "meses",
    day: "dia",
    days: "dias",
    hour: "hora",
    hours: "horas",
    minute: "minuto",
    minutes: "segundos",
    second: "segundo",
    seconds: "segundos",
    and: "e",
  },
}

const getLocalizedMonth = (date: Date, lang: string): string => {
  return date.toLocaleString(lang, { month: "long" })
}

const getTimezoneOffset = (date: Date): string => {
  const offset = -date.getTimezoneOffset()
  const sign = offset >= 0 ? "+" : "-"
  const absOffset = Math.abs(offset)
  const hours = Math.floor(absOffset / 60)
  const minutes = absOffset % 60
  const decimalHours = hours + minutes / 60
  return `${sign}${decimalHours.toFixed(2).replace(/\.00$/, "")}`
}

export const formatTime = (
  timestamp: number,
  format: TimeFormat,
  offset = 0,
  language: "en" | "es" | "pt" = "en",
): string => {
  const date = new Date(timestamp * 1000)
  const localDate = new Date(timestamp * 1000)

  const formatOptions: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  }

  switch (format) {
    case "UNIX":
      return Math.floor(timestamp).toString()
    case "UNIX_LOCAL":
      return Math.floor(timestamp).toString()
    case "LEGIBLE":
      return date.toLocaleString(language, formatOptions)
    case "ISO8601":
      return date.toISOString()
    case "UTC":
      return date
        .toLocaleString("en-US", {
          month: "2-digit",
          day: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
          timeZone: "UTC",
        })
        .replace(",", " @")
    case "GMT": {
      const targetDate = new Date(date.toUTCString()) // Asegúrate de usar UTC para GMT
      const day = targetDate.getUTCDate()
      const year = targetDate.getUTCFullYear()
      const monthName = getLocalizedMonth(targetDate, language)

      // Formatear la hora como HH:mm:ss
      const hours = targetDate.getUTCHours().toString().padStart(2, "0") // Usar getUTCHours para GMT
      const minutes = targetDate.getUTCMinutes().toString().padStart(2, "0")
      const seconds = targetDate.getUTCSeconds().toString().padStart(2, "0")
      const timeString = `${hours}:${minutes}:${seconds}`

      return `${monthName} ${day}, ${year} ${timeString} GMT` // Con GMT pero sin offset
    }
    case "GMT_LOCAL": {
      const targetDate = localDate
      const day = targetDate.getDate()
      const year = targetDate.getFullYear()
      const monthName = getLocalizedMonth(targetDate, language)

      const hours = targetDate.getHours().toString().padStart(2, "0")
      const minutes = targetDate.getMinutes().toString().padStart(2, "0")
      const seconds = targetDate.getSeconds().toString().padStart(2, "0")
      const timeString = `${hours}:${minutes}:${seconds}`

      const timezoneOffset = getTimezoneOffset(targetDate)
      return `${monthName} ${day}, ${year} ${timeString} GMT${timezoneOffset}`
    }
    default:
      return date.toLocaleString(language, formatOptions)
  }
}

export const timeUnits = {
  YEAR: 31536000,
  MONTH: 2592000,
  WEEK: 604800,
  DAY: 86400,
  HOUR: 3600,
  MINUTE: 60,
  SECOND: 1,
}

export const parseTime = (timeString: string, format: TimeFormat, offset = 0): number => {
  switch (format) {
    case "UNIX":
    case "UNIX_LOCAL":
      return Number.parseInt(timeString, 10)
    case "LEGIBLE":
    case "ISO8601":
    case "UTC":
    case "GMT":
    case "GMT_LOCAL": {
      const timestamp = Math.floor(new Date(timeString).getTime() / 1000)
      return timestamp + offset * 3600 // Convertir el tiempo local a GMT
    }
    default:
      return Math.floor(new Date(timeString).getTime() / 1000)
  }
}

export const formatRelativeTime = (timestamp: number, language: "en" | "es" | "pt"): string => {
  const now = Math.floor(Date.now() / 1000)
  const diff = timestamp - now
  const absDiff = Math.abs(diff)
  const t = relativeTimeTranslations[language]

  const formatUnit = (value: number, singular: string, plural: string) => {
    return `${value} ${value === 1 ? singular : plural}`
  }

  const units = [
    { value: Math.floor(absDiff / timeUnits.YEAR), singular: t.year, plural: t.years },
    { value: Math.floor((absDiff % timeUnits.YEAR) / timeUnits.MONTH), singular: t.month, plural: t.months },
    { value: Math.floor((absDiff % timeUnits.MONTH) / timeUnits.DAY), singular: t.day, plural: t.days },
    { value: Math.floor((absDiff % timeUnits.DAY) / timeUnits.HOUR), singular: t.hour, plural: t.hours },
    { value: Math.floor((absDiff % timeUnits.HOUR) / timeUnits.MINUTE), singular: t.minute, plural: t.minutes },
    { value: Math.floor(absDiff % timeUnits.MINUTE), singular: t.second, plural: t.seconds },
  ]

  const nonZeroUnits = units.filter((unit) => unit.value > 0)

  const timeString = nonZeroUnits
    .map((unit, index) => {
      const formattedUnit = formatUnit(unit.value, unit.singular, unit.plural)
      if (index === nonZeroUnits.length - 1 && index !== 0) {
        return `${t.and} ${formattedUnit}`
      }
      return formattedUnit
    })
    .join(", ")

  if (language === "es") {
    return diff > 0 ? `${t.fromNow} ${timeString}` : `${t.ago} ${timeString}`
  } else {
    return diff > 0 ? `${timeString} ${t.fromNow}` : `${timeString} ${t.ago}`
  }
}

