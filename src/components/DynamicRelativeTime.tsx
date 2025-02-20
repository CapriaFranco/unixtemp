"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { formatRelativeTime } from "../utils/timeFormats"

interface DynamicRelativeTimeProps {
  timestamp: number
  language: "en" | "es" | "pt"
}

const DynamicRelativeTime: React.FC<DynamicRelativeTimeProps> = ({ timestamp, language }) => {
  const [relativeTime, setRelativeTime] = useState("")

  useEffect(() => {
    const updateRelativeTime = () => {
      setRelativeTime(formatRelativeTime(timestamp, language))
    }

    updateRelativeTime()
    const intervalId = setInterval(updateRelativeTime, 1000)

    return () => clearInterval(intervalId)
  }, [timestamp, language])

  return (
    <div
      className="dynamic-relative-time"
      style={{
        marginTop: "1rem",
        padding: "0.75rem",
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        borderRadius: "var(--border-radius)",
        textAlign: "center",
      }}
    >
      {relativeTime}
    </div>
  )
}

export default DynamicRelativeTime

