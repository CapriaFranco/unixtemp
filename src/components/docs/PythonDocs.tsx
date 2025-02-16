import type React from "react"
import { Copy } from "lucide-react"

interface PythonDocsProps {
  language: "en" | "es" | "pt"
}

const PythonDocs: React.FC<PythonDocsProps> = ({ language }) => {
  const translations = {
    en: {
      title: "Python Implementation",
      introduction: "Learn how to work with Unix timestamps in Python.",
      currentTimestamp: "Get Current Unix Timestamp",
      convertToDate: "Convert Unix Timestamp to Date",
      convertToUnix: "Convert Date to Unix Timestamp",
    },
    es: {
      title: "Implementación en Python",
      introduction: "Aprende a trabajar con marcas de tiempo Unix en Python.",
      currentTimestamp: "Obtener la Marca de Tiempo Unix Actual",
      convertToDate: "Convertir Marca de Tiempo Unix a Fecha",
      convertToUnix: "Convertir Fecha a Marca de Tiempo Unix",
    },
    pt: {
      title: "Implementação em Python",
      introduction: "Aprenda a trabalhar com carimbos de data/hora Unix em Python.",
      currentTimestamp: "Obter o Carimbo de Data/Hora Unix Atual",
      convertToDate: "Converter Carimbo de Data/Hora Unix para Data",
      convertToUnix: "Converter Data para Carimbo de Data/Hora Unix",
    },
  }

  const t = translations[language]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="python-docs">
      <h1>{t.title}</h1>
      <div className="section">
        <p>{t.introduction}</p>
      </div>
      <div className="section">
        <h2>{t.currentTimestamp}</h2>
        <div className="code-block">
          <pre>
            <code>{`import time

current_unix_timestamp = int(time.time())
print(current_unix_timestamp)`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`import time

current_unix_timestamp = int(time.time())
print(current_unix_timestamp)`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h2>{t.convertToDate}</h2>
        <div className="code-block">
          <pre>
            <code>{`from datetime import datetime

unix_timestamp = 1623456789
date = datetime.fromtimestamp(unix_timestamp)
print(date.strftime('%Y-%m-%d %H:%M:%S'))`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`from datetime import datetime

unix_timestamp = 1623456789
date = datetime.fromtimestamp(unix_timestamp)
print(date.strftime('%Y-%m-%d %H:%M:%S'))`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h2>{t.convertToUnix}</h2>
        <div className="code-block">
          <pre>
            <code>{`from datetime import datetime

date = datetime(2021, 6, 12)
unix_timestamp = int(date.timestamp())
print(unix_timestamp)`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`from datetime import datetime

date = datetime(2021, 6, 12)
unix_timestamp = int(date.timestamp())
print(unix_timestamp)`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PythonDocs

