import type React from "react"
import { MessageSquare, Code, Terminal, Coffee } from "lucide-react"

interface DocsSidebarProps {
  language: "en" | "es" | "pt"
  currentDoc: "discord" | "javascript" | "python" | "java"
  setCurrentDoc: (doc: "discord" | "javascript" | "python" | "java") => void
}

const DocsSidebar: React.FC<DocsSidebarProps> = ({ language, currentDoc, setCurrentDoc }) => {
  const translations = {
    en: {
      sections: [
        { title: "Discord Integration", path: "discord", icon: MessageSquare },
        { title: "JavaScript Usage", path: "javascript", icon: Code },
        { title: "Python Implementation", path: "python", icon: Terminal },
        { title: "Java Development", path: "java", icon: Coffee },
      ],
    },
    es: {
      sections: [
        { title: "Integración con Discord", path: "discord", icon: MessageSquare },
        { title: "Uso en JavaScript", path: "javascript", icon: Code },
        { title: "Implementación en Python", path: "python", icon: Terminal },
        { title: "Desarrollo en Java", path: "java", icon: Coffee },
      ],
    },
    pt: {
      sections: [
        { title: "Integração com Discord", path: "discord", icon: MessageSquare },
        { title: "Uso em JavaScript", path: "javascript", icon: Code },
        { title: "Implementación em Python", path: "python", icon: Terminal },
        { title: "Desenvolvimento em Java", path: "java", icon: Coffee },
      ],
    },
  }

  return (
    <div className="docs-sidebar">
      <nav>
        {translations[language].sections.map((section) => {
          const Icon = section.icon
          return (
            <a
              key={section.path}
              href="#"
              onClick={(e) => {
                e.preventDefault()
                setCurrentDoc(section.path as "discord" | "javascript" | "python" | "java")
              }}
              className={`sidebar-item ${currentDoc === section.path ? "active" : ""}`}
            >
              <Icon className="icon" />
              <span>{section.title}</span>
            </a>
          )
        })}
      </nav>
    </div>
  )
}

export default DocsSidebar

