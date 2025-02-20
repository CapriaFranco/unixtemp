"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Globe, Clock, Home, FileText } from "lucide-react"

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
  userGMT: string
}

const Header: React.FC<HeaderProps> = ({
  logo,
  language,
  setLanguage,
  translations,
  currentPage,
  setCurrentPage,
  userGMT,
}) => {
  const [showLanguages, setShowLanguages] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 370)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  const languages = {
    en: "English",
    es: "Español",
    pt: "Português",
  }

  return (
    <header>
      <div className="header-main">
        <div className="logo-section">
          <button onClick={() => setCurrentPage("home")} className="logo-button">
            <img src={logo || "/placeholder.svg"} alt="UnixTemp Logo" className="logo" />
          </button>
          {!isMobile && <span className="site-name">UnixTemp</span>}
        </div>
        <nav className="main-nav">
          <ul className="nav-list">
            <li onClick={() => setCurrentPage("home")} className={currentPage === "home" ? "active" : ""}>
              <Home className="icon" size={18} />
              {translations.home}
            </li>
            <li onClick={() => setCurrentPage("docs")} className={currentPage === "docs" ? "active" : ""}>
              <FileText className="icon" size={18} />
              {translations.docs}
            </li>
            <li className="gmt-indicator">
              <Clock className="icon" />
              <span>{userGMT}</span>
            </li>
          </ul>
        </nav>
      </div>
      <div className="selectors">
        <div className="language-selector">
          <button className="selected-language" onClick={() => setShowLanguages(!showLanguages)}>
            <Globe className="icon" />
            <span>{languages[language]}</span>
          </button>
          {showLanguages && (
            <div className="language-options">
              {Object.entries(languages).map(([code, name]) => (
                <button
                  key={code}
                  className="option"
                  onClick={() => {
                    setLanguage(code as "en" | "es" | "pt")
                    setShowLanguages(false)
                  }}
                >
                  {name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header

