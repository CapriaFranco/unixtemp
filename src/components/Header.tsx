"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Globe, Clock, Home, FileText, Code } from "lucide-react"

interface HeaderProps {
  logo: string
  language: "en" | "es" | "pt"
  setLanguage: (lang: "en" | "es" | "pt") => void
  translations: {
    home: string
    docs: string
    languageSelector: string
    api: string
  }
  currentPage: "home" | "docs" | "api"
  setCurrentPage: (page: "home" | "docs" | "api") => void
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
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const languages = {
    en: "English",
    es: "Español",
    pt: "Português",
  }

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-row">
          <div className="logo-section">
            <img src={logo || "/placeholder.svg"} alt="UnixTemp Logo" className="logo" />
            {windowWidth > 500 && <span className="site-name">UnixTemp</span>}
          </div>
          <nav className="nav-section">
            <div className="pages-nav">
              <button onClick={() => setCurrentPage("home")} className={currentPage === "home" ? "active" : ""}>
                <Home className="icon" size={18} />
                {translations.home}
              </button>
              <button onClick={() => setCurrentPage("docs")} className={currentPage === "docs" ? "active" : ""}>
                <FileText className="icon" size={18} />
                {translations.docs}
              </button>
              <button onClick={() => setCurrentPage("api")} className={currentPage === "api" ? "active" : ""}>
                <Code className="icon" size={18} />
                {translations.api}
              </button>
            </div>
            {windowWidth > 400 && (
              <div className="config-nav">
                <div className="gmt-indicator">
                  <Clock className="icon" />
                  <span>{userGMT}</span>
                </div>
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
            )}
          </nav>
        </div>
        {windowWidth <= 400 && (
          <div className="config-nav">
            <div className="gmt-indicator">
              <Clock className="icon" />
              <span>{userGMT}</span>
            </div>
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
        )}
      </div>
    </header>
  )
}

export default Header

