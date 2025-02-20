export const detectUserGMT = (): string => {
  const offset = -new Date().getTimezoneOffset() / 60
  const sign = offset >= 0 ? "+" : "-"
  const absOffset = Math.abs(offset)
  return `GMT${sign}${absOffset}`
}

