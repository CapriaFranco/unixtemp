"use client"

import type React from "react"
import { useState } from "react"
import { Home, FileText, Globe, ChevronDown } from "lucide-react"

interface HeaderProps {
  logo: string
  language: "en" | "es" | "pt"
  setLanguage: (lang: "en" | "es" | "pt") => void
  translations: {
    home: string
    docs: string
    languageSelector: string
  }
  currentPage: "home" | "docs"
  setCurrentPage: (page: "home" | "docs") => void
}

const Header: React.FC<HeaderProps> = ({ logo, language, setLanguage, translations, currentPage, setCurrentPage }) => {
  const [showLanguages, setShowLanguages] = useState(false)

  const languages = {
    en: "English",
    es: "Español",
    pt: "Português",
  }

  return (
    <header>
      <div className="logo-container noselect">
        <button onClick={() => setCurrentPage("home")} className="logo-button">
          <img src={logo || "/placeholder.svg"} alt="UnixTemp Logo" className="logo" />
        </button>
      </div>
      <nav>
        <ul className="noselect">
          <li onClick={() => setCurrentPage("home")} className={currentPage === "home" ? "active" : ""}>
            <Home className="icon" />
            {translations.home}
          </li>
          <li onClick={() => setCurrentPage("docs")} className={currentPage === "docs" ? "active" : ""}>
            <FileText className="icon" />
            {translations.docs}
          </li>
        </ul>
        <div className="language-selector noselect">
          <div className="selected-language" onClick={() => setShowLanguages(!showLanguages)}>
            <Globe className="icon" />
            <span>{languages[language]}</span>
            <ChevronDown className="icon" />
          </div>
          <div className={`language-options ${showLanguages ? "show" : ""}`}>
            {Object.entries(languages).map(([code, name]) => (
              <div
                key={code}
                className="option"
                onClick={() => {
                  setLanguage(code as "en" | "es" | "pt")
                  setShowLanguages(false)
                }}
              >
                {name}
              </div>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

