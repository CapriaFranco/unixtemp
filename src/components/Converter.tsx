"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { ArrowLeftRight } from "lucide-react"

interface ConverterProps {
  language: "en" | "es" | "pt"
}

const Converter: React.FC<ConverterProps> = ({ language }) => {
  const [isTimeToUnix, setIsTimeToUnix] = useState(true)
  const [hour, setHour] = useState("00")
  const [minute, setMinute] = useState("00")
  const [second, setSecond] = useState("00")
  const [year, setYear] = useState(new Date().getFullYear().toString())
  const [month, setMonth] = useState((new Date().getMonth() + 1).toString().padStart(2, "0"))
  const [day, setDay] = useState(new Date().getDate().toString().padStart(2, "0"))
  const [unixTimestamp, setUnixTimestamp] = useState("")
  const [result, setResult] = useState("")

  useEffect(() => {
    resetFields()
  }, [])

  const resetFields = () => {
    setHour("00")
    setMinute("00")
    setSecond("00")
    setYear(new Date().getFullYear().toString())
    setMonth((new Date().getMonth() + 1).toString().padStart(2, "0"))
    setDay(new Date().getDate().toString().padStart(2, "0"))
    setUnixTimestamp("")
    setResult("")
  }

  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month, 0).getDate()
  }

  // Remove this function:
  // const isLeapYear = (year: number) => {
  //   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
  // }

  const handleTimeInputChange = (value: string, setter: React.Dispatch<React.SetStateAction<string>>, max: number) => {
    if (value === "") {
      setter("00")
    } else {
      const numValue = Number.parseInt(value, 10)
      if (!isNaN(numValue)) {
        setter(Math.min(numValue, max).toString().padStart(2, "0"))
      }
    }
  }

  const handleDateInputChange = (
    value: string,
    setter: React.Dispatch<React.SetStateAction<string>>,
    maxDays: number,
  ) => {
    if (value === "") {
      setter("01")
    } else {
      const numValue = Number.parseInt(value, 10)
      if (!isNaN(numValue)) {
        setter(Math.min(Math.max(numValue, 1), maxDays).toString().padStart(2, "0"))
      }
    }
  }

  const handleYearChange = (value: string) => {
    if (value === "") {
      setYear(new Date().getFullYear().toString())
    } else {
      const numValue = Number.parseInt(value, 10)
      if (!isNaN(numValue)) {
        setYear(Math.min(Math.max(numValue, 1970), 9999).toString())
      }
    }
    updateDaysInMonth(Number(value), Number(month))
  }

  const handleMonthChange = (value: string) => {
    handleTimeInputChange(value, setMonth, 12)
    updateDaysInMonth(Number(year), Number(value))
  }

  const updateDaysInMonth = (year: number, month: number) => {
    const daysInMonth = getDaysInMonth(year, month)
    setDay((prev) => Math.min(Number(prev), daysInMonth).toString().padStart(2, "0"))
  }

  const handleConvert = () => {
    if (isTimeToUnix) {
      const date = new Date(`${year}-${month}-${day}T${hour}:${minute}:${second}`)
      const unix = Math.floor(date.getTime() / 1000)
      setResult(unix.toString())
    } else {
      const date = new Date(Number.parseInt(unixTimestamp) * 1000)
      setResult(date.toLocaleString(language))
    }
  }

  const translations = {
    en: {
      timeToUnix: "Time to Unix",
      unixToTime: "Unix to Time",
      hour: "Hour",
      minute: "Minute",
      second: "Second",
      year: "Year",
      month: "Month",
      day: "Day",
      unixTimestamp: "Unix Timestamp",
      convert: "Convert",
    },
    es: {
      timeToUnix: "Tiempo a Unix",
      unixToTime: "Unix a Tiempo",
      hour: "Hora",
      minute: "Minuto",
      second: "Segundo",
      year: "Año",
      month: "Mes",
      day: "Día",
      unixTimestamp: "Timestamp Unix",
      convert: "Convertir",
    },
    pt: {
      timeToUnix: "Tempo para Unix",
      unixToTime: "Unix para Tempo",
      hour: "Hora",
      minute: "Minuto",
      second: "Segundo",
      year: "Ano",
      month: "Mês",
      day: "Dia",
      unixTimestamp: "Timestamp Unix",
      convert: "Converter",
    },
  }

  const t = translations[language]

  return (
    <div className="converter">
      <div className="converter-toggle">
        <div className="toggle-container">
          <span>{t.timeToUnix}</span>
          <button className="toggle-button" onClick={() => setIsTimeToUnix(!isTimeToUnix)}>
            <ArrowLeftRight size={20} />
          </button>
          <span>{t.unixToTime}</span>
        </div>
      </div>
      {isTimeToUnix ? (
        <div className="time-inputs">
          <div className="input-group">
            <input
              type="text"
              value={hour}
              onChange={(e) => handleTimeInputChange(e.target.value, setHour, 23)}
              onFocus={() => setHour("")}
              onBlur={() => hour === "" && setHour("00")}
            />
            <label>{t.hour}</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              value={minute}
              onChange={(e) => handleTimeInputChange(e.target.value, setMinute, 59)}
              onFocus={() => setMinute("")}
              onBlur={() => minute === "" && setMinute("00")}
            />
            <label>{t.minute}</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              value={second}
              onChange={(e) => handleTimeInputChange(e.target.value, setSecond, 59)}
              onFocus={() => setSecond("")}
              onBlur={() => second === "" && setSecond("00")}
            />
            <label>{t.second}</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              value={year}
              onChange={(e) => handleYearChange(e.target.value)}
              onBlur={() => year === "" && setYear(new Date().getFullYear().toString())}
            />
            <label>{t.year}</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              value={month}
              onChange={(e) => handleMonthChange(e.target.value)}
              onBlur={() => month === "" && setMonth("01")}
            />
            <label>{t.month}</label>
          </div>
          <div className="input-group">
            <input
              type="text"
              value={day}
              onChange={(e) =>
                handleDateInputChange(e.target.value, setDay, getDaysInMonth(Number(year), Number(month)))
              }
              onBlur={() => day === "" && setDay("01")}
            />
            <label>{t.day}</label>
          </div>
        </div>
      ) : (
        <div className="unix-input">
          <input
            type="text"
            value={unixTimestamp}
            onChange={(e) => setUnixTimestamp(e.target.value)}
            placeholder={t.unixTimestamp}
          />
        </div>
      )}
      <button onClick={handleConvert}>{t.convert}</button>
      {result && <div className="result">{result}</div>}
    </div>
  )
}

export default Converter

