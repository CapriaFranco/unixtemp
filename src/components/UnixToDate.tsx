import type React from "react"
import { useState } from "react"

const UnixToDate: React.FC = () => {
  const [unixTimestamp, setUnixTimestamp] = useState<string>("")
  const [convertedDate, setConvertedDate] = useState<string>("")

  const handleConvert = () => {
    const timestamp = Number.parseInt(unixTimestamp)
    if (!isNaN(timestamp)) {
      const date = new Date(timestamp * 1000)
      setConvertedDate(date.toLocaleString())
    } else {
      setConvertedDate("Invalid Unix timestamp")
    }
  }

  return (
    <div className="converter">
      <h2>Unix to Date</h2>
      <input
        type="text"
        value={unixTimestamp}
        onChange={(e) => setUnixTimestamp(e.target.value)}
        placeholder="Enter Unix timestamp"
      />
      <button onClick={handleConvert}>Convert</button>
      <p>Converted Date: {convertedDate}</p>
    </div>
  )
}

export default UnixToDate

  