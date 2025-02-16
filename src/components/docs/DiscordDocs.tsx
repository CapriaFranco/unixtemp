import type React from "react"
import { Copy } from "lucide-react"

interface DiscordDocsProps {
  language: "en" | "es" | "pt"
}

const DiscordDocs: React.FC<DiscordDocsProps> = ({ language }) => {
  const translations = {
    en: {
      title: "Discord Integration",
      introduction: "Learn how to use Unix timestamps in Discord messages to create dynamic time displays.",
      usage: "Usage",
      usageDescription: "To use Unix timestamps in Discord, you can use the following format:",
      example: "Example",
      exampleDescription: "This will display the time as:",
      formats: "Available Formats",
      formatsList: [
        { format: "t", description: "Short Time" },
        { format: "T", description: "Long Time" },
        { format: "d", description: "Short Date" },
        { format: "D", description: "Long Date" },
        { format: "f", description: "Short Date/Time" },
        { format: "F", description: "Long Date/Time" },
        { format: "R", description: "Relative Time" },
      ],
    },
    es: {
      title: "Integración con Discord",
      introduction:
        "Aprende a usar marcas de tiempo Unix en mensajes de Discord para crear visualizaciones de tiempo dinámicas.",
      usage: "Uso",
      usageDescription: "Para usar marcas de tiempo Unix en Discord, puedes usar el siguiente formato:",
      example: "Ejemplo",
      exampleDescription: "Esto mostrará el tiempo como:",
      formats: "Formatos Disponibles",
      formatsList: [
        { format: "t", description: "Hora Corta" },
        { format: "T", description: "Hora Larga" },
        { format: "d", description: "Fecha Corta" },
        { format: "D", description: "Fecha Larga" },
        { format: "f", description: "Fecha/Hora Corta" },
        { format: "F", description: "Fecha/Hora Larga" },
        { format: "R", description: "Tiempo Relativo" },
      ],
    },
    pt: {
      title: "Integração com Discord",
      introduction:
        "Aprenda a usar carimbos de data/hora Unix em mensagens do Discord para criar exibições de tempo dinâmicas.",
      usage: "Uso",
      usageDescription: "Para usar carimbos de data/hora Unix no Discord, você pode usar o seguinte formato:",
      example: "Exemplo",
      exampleDescription: "Isso exibirá o tempo como:",
      formats: "Formatos Disponíveis",
      formatsList: [
        { format: "t", description: "Hora Curta" },
        { format: "T", description: "Hora Longa" },
        { format: "d", description: "Data Curta" },
        { format: "D", description: "Data Longa" },
        { format: "f", description: "Data/Hora Curta" },
        { format: "F", description: "Data/Hora Longa" },
        { format: "R", description: "Tempo Relativo" },
      ],
    },
  }

  const t = translations[language]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="discord-docs">
      <h1>{t.title}</h1>
      <div className="section">
        <p>{t.introduction}</p>
      </div>
      <div className="section">
        <h2>{t.usage}</h2>
        <p>{t.usageDescription}</p>
        <div className="code-block">
          <pre>
            <code>{"<t:UNIX_TIMESTAMP:FORMAT>"}</code>
          </pre>
          <button className="copy-button" onClick={() => copyToClipboard("<t:UNIX_TIMESTAMP:FORMAT>")}>
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h2>{t.example}</h2>
        <div className="code-block">
          <pre>
            <code>{"The event starts at <t:1623456789:F>"}</code>
          </pre>
          <button className="copy-button" onClick={() => copyToClipboard("The event starts at <t:1623456789:F>")}>
            <Copy size={16} />
          </button>
        </div>
        <p>{t.exampleDescription}</p>
        <div className="example-preview">The event starts at June 11, 2021 8:39 PM</div>
      </div>
      <div className="section">
        <h2>{t.formats}</h2>
        <ul>
          {t.formatsList.map((format, index) => (
            <li key={index}>
              <strong>{format.format}</strong>: {format.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DiscordDocs

