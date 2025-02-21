import type React from "react"
import { Code, Terminal, Coffee, MessageSquare, ArrowRight } from "lucide-react"
import { scrollToTop } from "../utils/scrollToTop"

interface ExamplesProps {
  language: "en" | "es" | "pt"
  setCurrentPage: (page: "home" | "docs") => void
  setCurrentDoc: (doc: "discord" | "javascript" | "python" | "java") => void
}

const Examples: React.FC<ExamplesProps> = ({ language, setCurrentPage, setCurrentDoc }) => {
  const translations = {
    en: {
      title: "Usage Examples",
      learnMore: "Learn more",
      examples: [
        {
          title: "Discord",
          icon: MessageSquare,
          path: "discord",
          description: "Create dynamic timestamps in Discord messages using Unix time.",
        },
        {
          title: "JavaScript",
          icon: Code,
          path: "javascript",
          description: "Learn how to work with Unix time in JavaScript and Node.js applications.",
        },
        {
          title: "Java",
          icon: Coffee,
          path: "java",
          description: "Explore Unix time operations and best practices in Java development.",
        },
        {
          title: "Python",
          icon: Terminal,
          path: "python",
          description: "Discover Unix time manipulation techniques in Python programming.",
        },
      ],
    },
    es: {
      title: "Ejemplos de Uso",
      learnMore: "Aprender más",
      examples: [
        {
          title: "JavaScript",
          icon: Code,
          path: "javascript",
          description: "Aprende a trabajar con tiempo Unix en aplicaciones JavaScript y Node.js.",
        },
        {
          title: "Python",
          icon: Terminal,
          path: "python",
          description: "Descubre técnicas de manipulación de tiempo Unix en programación Python.",
        },
        {
          title: "Java",
          icon: Coffee,
          path: "java",
          description: "Explora operaciones de tiempo Unix y mejores prácticas en desarrollo Java.",
        },
        {
          title: "Discord",
          icon: MessageSquare,
          path: "discord",
          description: "Crea marcas de tiempo dinámicas en mensajes de Discord usando tiempo Unix.",
        },
      ],
    },
    pt: {
      title: "Exemplos de Uso",
      learnMore: "Saiba mais",
      examples: [
        {
          title: "JavaScript",
          icon: Code,
          path: "javascript",
          description: "Aprenda a trabalhar com tempo Unix em aplicações JavaScript e Node.js.",
        },
        {
          title: "Python",
          icon: Terminal,
          path: "python",
          description: "Descubra técnicas de manipulação de tempo Unix na programação Python.",
        },
        {
          title: "Java",
          icon: Coffee,
          path: "java",
          description: "Explore operações de tempo Unix e melhores práticas no desenvolvimento Java.",
        },
        {
          title: "Discord",
          icon: MessageSquare,
          path: "discord",
          description: "Crie carimbos de data/hora dinâmicos em mensagens do Discord usando tempo Unix.",
        },
      ],
    },
  }

  const t = translations[language]

  const handleExampleClick = (path: string) => {
    setCurrentPage("docs")
    setCurrentDoc(path as "discord" | "javascript" | "python" | "java")
    scrollToTop()
  }

  return (
    <div className="examples">
      <div className="examples-grid">
        {t.examples.map((example, index) => {
          const Icon = example.icon
          return (
            <div key={index} className="example-card">
              <h3>
                <Icon className="icon" />
                {example.title}
              </h3>
              <p>{example.description}</p>
              <button onClick={() => handleExampleClick(example.path)} className="learn-more">
                {t.learnMore}
                <ArrowRight className="icon" />
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Examples

