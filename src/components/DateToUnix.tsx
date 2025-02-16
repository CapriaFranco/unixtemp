import type React from "react"
import { useState } from "react"

const DateToUnix: React.FC = () => {
  const [dateTime, setDateTime] = useState<string>("")
  const [convertedUnix, setConvertedUnix] = useState<string>("")

  const handleConvert = () => {
    const date = new Date(dateTime)
    if (!isNaN(date.getTime())) {
      const unixTimestamp = Math.floor(date.getTime() / 1000)
      setConvertedUnix(unixTimestamp.toString())
    } else {
      setConvertedUnix("Invalid date/time")
    }
  }

  return (
    <div className="converter">
      <h2>Date to Unix</h2>
      <input type="datetime-local" value={dateTime} onChange={(e) => setDateTime(e.target.value)} />
      <button onClick={handleConvert}>Convert</button>
      <p>Converted Unix Timestamp: {convertedUnix}</p>
    </div>
  )
}

export default DateToUnix

