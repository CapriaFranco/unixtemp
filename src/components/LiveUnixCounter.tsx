"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { formatTime } from "../utils/timeFormats"

interface LiveUnixCounterProps {
  language: "en" | "es" | "pt"
}

const LiveUnixCounter: React.FC<LiveUnixCounterProps> = ({ language }) => {
  const [unixTime, setUnixTime] = useState(Math.floor(Date.now() / 1000))

  useEffect(() => {
    const timer = setInterval(() => {
      setUnixTime(Math.floor(Date.now() / 1000))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const translations = {
    en: {
      title: "Current Unix Time",
      seconds: "SECONDS SINCE JAN 01 1970 (UTC)",
    },
    es: {
      title: "Tiempo Unix Actual",
      seconds: "SEGUNDOS DESDE ENE 01 1970 (UTC)",
    },
    pt: {
      title: "Tempo Unix Atual",
      seconds: "SEGUNDOS DESDE JAN 01 1970 (UTC)",
    },
  }

  const t = translations[language]

  return (
    <div className="live-counter">
      <h2>{t.title}</h2>
      <div className="counter-value">{unixTime}</div>
      <div className="counter-description">{t.seconds}</div>
      <div className="current-time">{formatTime(unixTime, "LEGIBLE", 0, language)}</div>
    </div>
  )
}

export default LiveUnixCounter

