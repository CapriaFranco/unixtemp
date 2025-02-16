import type React from "react"
import DocsSidebar from "../components/DocsSidebar"
import DiscordDocs from "../components/docs/DiscordDocs"
import JavaScriptDocs from "../components/docs/JavaScriptDocs"
import PythonDocs from "../components/docs/PythonDocs"
import JavaDocs from "../components/docs/JavaDocs"

interface DocsPageProps {
  language: "en" | "es" | "pt"
  currentDoc: "discord" | "javascript" | "python" | "java"
  setCurrentDoc: (doc: "discord" | "javascript" | "python" | "java") => void
}

const DocsPage: React.FC<DocsPageProps> = ({ language, currentDoc, setCurrentDoc }) => {
  //const [currentDoc, setCurrentDoc] = useState<"discord" | "javascript" | "python" | "java">("discord")

  const renderDoc = () => {
    switch (currentDoc) {
      case "discord":
        return <DiscordDocs language={language} />
      case "javascript":
        return <JavaScriptDocs language={language} />
      case "python":
        return <PythonDocs language={language} />
      case "java":
        return <JavaDocs language={language} />
    }
  }

  return (
    <main className="docs-page">
      <div className="docs-container">
        <DocsSidebar language={language} currentDoc={currentDoc} setCurrentDoc={setCurrentDoc} />
        <div className="docs-content">{renderDoc()}</div>
      </div>
    </main>
  )
}

export default DocsPage

