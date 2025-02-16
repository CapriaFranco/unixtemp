import type React from "react"
import Converter from "../components/Converter"
import Description from "../components/Description"
import Examples from "../components/Examples"

interface HomePageProps {
  language: "en" | "es" | "pt"
  setCurrentPage: (page: "home" | "docs") => void
  setCurrentDoc: (doc: "discord" | "javascript" | "python" | "java") => void
}

const HomePage: React.FC<HomePageProps> = ({ language, setCurrentPage, setCurrentDoc }) => {
  const translations = {
    en: {
      title: "Unix Timestamp Converter",
    },
    es: {
      title: "Conversor de Tiempo Unix",
    },
    pt: {
      title: "Conversor de Timestamp Unix",
    },
  }

  return (
    <main>
      <h1 className="noselect">{translations[language].title}</h1>
      <Converter language={language} />
      <Description language={language} />
      <Examples language={language} setCurrentPage={setCurrentPage} setCurrentDoc={setCurrentDoc} />
    </main>
  )
}

export default HomePage

