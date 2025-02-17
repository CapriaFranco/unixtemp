import type React from "react"
import { useState } from "react"
import Header from "./components/Header"
import HomePage from "./pages/HomePage"
import DocsPage from "./pages/DocsPage"
import Footer from "./components/Footer"
import { getStoredLanguage, setStoredLanguage } from "./utils/storage"
import { scrollToTop } from "./utils/scrollToTop"
import "./style.scss"

const App: React.FC = () => {
  const [language, setLanguage] = useState<"en" | "es" | "pt">(getStoredLanguage())
  const [currentPage, setCurrentPage] = useState<"home" | "docs">("home")
  const [currentDoc, setCurrentDoc] = useState<"discord" | "javascript" | "python" | "java">("discord")

  const handleLanguageChange = (newLanguage: "en" | "es" | "pt") => {
    setLanguage(newLanguage)
    setStoredLanguage(newLanguage)
  }

  const handleSetCurrentPage = (page: "home" | "docs") => {
    setCurrentPage(page)
    scrollToTop()
  }
  const handleSetCurrentDoc = (doc: "discord" | "javascript" | "python" | "java") => setCurrentDoc(doc)

  const translations = {
    en: {
      title: "Unix Timestamp Converter",
      home: "Home",
      docs: "Documentation",
      languageSelector: "Select Language",
    },
    es: {
      title: "Conversor de Tiempo Unix",
      home: "Inicio",
      docs: "Documentación",
      languageSelector: "Seleccionar Idioma",
    },
    pt: {
      title: "Conversor de Timestamp Unix",
      home: "Início",
      docs: "Documentação",
      languageSelector: "Selecionar Idioma",
    },
  }

  return (
    <div className="app">
      <Header
        logo="/img/UnixTemp512.png"
        language={language}
        setLanguage={handleLanguageChange}
        translations={translations[language]}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
      <main>
        {currentPage === "home" ? (
          <HomePage language={language} setCurrentPage={handleSetCurrentPage} setCurrentDoc={handleSetCurrentDoc} />
        ) : (
          <DocsPage language={language} currentDoc={currentDoc} setCurrentDoc={handleSetCurrentDoc} />
        )}
      </main>
      <Footer language={language} />
    </div>
  )
}

export default App

