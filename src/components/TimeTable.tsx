"use client"

import type React from "react"

import { useState } from "react"
import { Check } from "lucide-react"
import { formatTime, type TimeFormat } from "../utils/timeFormats"

interface TimeTableProps {
  timestamp: number
  language: "en" | "es" | "pt"
}

const TimeTable: React.FC<TimeTableProps> = ({ timestamp, language }) => {
  const [showNotification, setShowNotification] = useState(false)

  const translations = {
    en: {
      format: "Format",
      value: "Value",
      copied: "Copied to clipboard",
    },
    es: {
      format: "Formato",
      value: "Valor",
      copied: "Copiado al portapapeles",
    },
    pt: {
      format: "Formato",
      value: "Valor",
      copied: "Copiado para área de transferência",
    },
  }

  const t = translations[language]

  const formats: { label: string; format: TimeFormat }[] = [
    { label: "Unix Timestamp", format: "UNIX" },
    { label: "GMT", format: "GMT" },
    { label: "GMT (Local)", format: "GMT_LOCAL" },
    { label: "UTC", format: "UTC" },
    { label: "ISO 8601", format: "ISO8601" },
  ]

  const handleCopy = (format: TimeFormat) => {
    const value = formatTime(timestamp, format, 0, language)
    navigator.clipboard.writeText(value)
    setShowNotification(true)
    setTimeout(() => setShowNotification(false), 2500)
  }

  return (
    <div className="time-table">
      <table>
        <thead>
          <tr>
            <th>{t.format}</th>
            <th>{t.value}</th>
          </tr>
        </thead>
        <tbody>
          {formats.map(({ label, format }) => (
            <tr key={format} onClick={() => handleCopy(format)}>
              <td>{label}</td>
              <td>{formatTime(timestamp, format, 0, language)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showNotification && (
        <div className="notification">
          <Check size={18} />
          <span>{t.copied}</span>
        </div>
      )}
    </div>
  )
}

export default TimeTable

