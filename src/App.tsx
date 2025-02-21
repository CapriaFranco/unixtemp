"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import DocsPage from "./pages/DocsPage"
import Footer from "./components/Footer"
import { getStoredLanguage, setStoredLanguage } from "./utils/storage"
import { detectUserGMT } from "./utils/regions"
import "./style.scss"
// Añadir el import para la nueva página de API
import ApiPage from "./pages/ApiPage"

const App: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "es" | "pt">(getStoredLanguage())
  // Modificar el estado para incluir la nueva página
  const [currentPage, setCurrentPage] = useState<"home" | "docs" | "api">("home")
  const [currentDoc, setCurrentDoc] = useState<"discord" | "javascript" | "python" | "java">("discord")
  const userGMT = detectUserGMT()

  const handleLanguageChange = (newLanguage: "en" | "es" | "pt") => {
    setLanguage(newLanguage)
    setStoredLanguage(newLanguage)
  }

  const handleSetCurrentPage = (page: "home" | "docs" | "api") => {
    setCurrentPage(page)
    window.scrollTo(0, 0)
  }
  const handleSetCurrentDoc = (doc: "discord" | "javascript" | "python" | "java") => setCurrentDoc(doc)

  // Añadir la traducción para "API" en el objeto translations
  const translations = {
    en: {
      title: "Unix Timestamp Converter",
      home: "Home",
      docs: "Documentation",
      languageSelector: "Select Language",
      api: "API",
    },
    es: {
      title: "Conversor de Tiempo Unix",
      home: "Inicio",
      docs: "Documentación",
      languageSelector: "Seleccionar Idioma",
      api: "API",
    },
    pt: {
      title: "Conversor de Timestamp Unix",
      home: "Início",
      docs: "Documentação",
      languageSelector: "Selecionar Idioma",
      api: "API",
    },
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="app">
      <Header
        logo="/img/UnixTemp512.png"
        language={language}
        setLanguage={handleLanguageChange}
        translations={translations[language]}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        userGMT={userGMT}
      />
      <main>
        {/* Modificar la lógica de renderizado para incluir la nueva página */}
        {currentPage === "home" ? (
          <HomePage language={language} setCurrentPage={handleSetCurrentPage} setCurrentDoc={handleSetCurrentDoc} />
        ) : currentPage === "docs" ? (
          <DocsPage language={language} currentDoc={currentDoc} setCurrentDoc={handleSetCurrentDoc} />
        ) : (
          <ApiPage language={language} />
        )}
      </main>
      <Footer language={language} />
    </div>
  )
}

export default App

