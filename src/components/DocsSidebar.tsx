"use client"

import type React from "react"
import { useState } from "react"
import { MessageSquare, Code, Terminal, Coffee, ChevronDown } from "lucide-react"

interface DocsSidebarProps {
  language: "en" | "es" | "pt"
  currentDoc: "discord" | "javascript" | "python" | "java"
  setCurrentDoc: (doc: "discord" | "javascript" | "python" | "java") => void
}

const DocsSidebar: React.FC<DocsSidebarProps> = ({ language, currentDoc, setCurrentDoc }) => {
  const [isOpen, setIsOpen] = useState(false)

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

  const currentSection = translations[language].sections.find((section) => section.path === currentDoc)

  return (
    <div className="docs-sidebar">
      <nav className="desktop-nav">
        {translations[language].sections.map((section) => {
          const Icon = section.icon
          return (
            <button
              key={section.path}
              onClick={() => setCurrentDoc(section.path as "discord" | "javascript" | "python" | "java")}
              className={`sidebar-item ${currentDoc === section.path ? "active" : ""}`}
            >
              <Icon className="icon" />
              <span>{section.title}</span>
            </button>
          )
        })}
      </nav>
      <div className="mobile-nav">
        <button className="selected-doc" onClick={() => setIsOpen(!isOpen)}>
          {currentSection && <currentSection.icon className="icon" />}
          <span>{currentSection?.title}</span>
          <ChevronDown className={`chevron ${isOpen ? "open" : ""}`} />
        </button>
        {isOpen && (
          <div className="doc-options">
            {translations[language].sections.map((section) => (
              <button
                key={section.path}
                className={`option ${currentDoc === section.path ? "active" : ""}`}
                onClick={() => {
                  setCurrentDoc(section.path as "discord" | "javascript" | "python" | "java")
                  setIsOpen(false)
                }}
              >
                <section.icon className="icon" />
                {section.title}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default DocsSidebar

