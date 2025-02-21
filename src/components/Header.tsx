"use client"

import type React from "react"
import { useState } from "react"
import { Globe, Clock, Home, FileText, Code, Menu, X } from "lucide-react"

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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
            <span className="site-name">UnixTemp</span>
          </div>
          <nav className={`nav-section ${mobileMenuOpen ? "mobile-open" : ""}`}>
            <div className="pages-nav">
              <button
                onClick={() => {
                  setCurrentPage("home")
                  setMobileMenuOpen(false)
                }}
                className={currentPage === "home" ? "active" : ""}
              >
                <Home className="icon" size={18} />
                {translations.home}
              </button>
              <button
                onClick={() => {
                  setCurrentPage("docs")
                  setMobileMenuOpen(false)
                }}
                className={currentPage === "docs" ? "active" : ""}
              >
                <FileText className="icon" size={18} />
                {translations.docs}
              </button>
              <button
                onClick={() => {
                  setCurrentPage("api")
                  setMobileMenuOpen(false)
                }}
                className={currentPage === "api" ? "active" : ""}
              >
                <Code className="icon" size={18} />
                {translations.api}
              </button>
            </div>
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
                          setMobileMenuOpen(false)
                        }}
                      >
                        {name}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </nav>
          <button className="mobile-menu-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header

