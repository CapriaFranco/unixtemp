import type React from "react"
import { Copy } from "lucide-react"

interface JavaScriptDocsProps {
  language: "en" | "es" | "pt"
}

const JavaScriptDocs: React.FC<JavaScriptDocsProps> = ({ language }) => {
  const translations = {
    en: {
      title: "JavaScript Usage",
      introduction: "Learn how to work with Unix timestamps in JavaScript.",
      currentTimestamp: "Get Current Unix Timestamp",
      convertToDate: "Convert Unix Timestamp to Date",
      convertToUnix: "Convert Date to Unix Timestamp",
    },
    es: {
      title: "Uso en JavaScript",
      introduction: "Aprende a trabajar con marcas de tiempo Unix en JavaScript.",
      currentTimestamp: "Obtener la Marca de Tiempo Unix Actual",
      convertToDate: "Convertir Marca de Tiempo Unix a Fecha",
      convertToUnix: "Convertir Fecha a Marca de Tiempo Unix",
    },
    pt: {
      title: "Uso em JavaScript",
      introduction: "Aprenda a trabalhar com carimbos de data/hora Unix em JavaScript.",
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
    <div className="javascript-docs">
      <h1>{t.title}</h1>
      <div className="section">
        <p>{t.introduction}</p>
      </div>
      <div className="section">
        <h2>{t.currentTimestamp}</h2>
        <div className="code-block">
          <pre>
            <code>{`const currentUnixTimestamp = Math.floor(Date.now() / 1000);
console.log(currentUnixTimestamp);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const currentUnixTimestamp = Math.floor(Date.now() / 1000);
console.log(currentUnixTimestamp);`)
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
            <code>{`const unixTimestamp = 1623456789;
const date = new Date(unixTimestamp * 1000);
console.log(date.toLocaleString());`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const unixTimestamp = 1623456789;
const date = new Date(unixTimestamp * 1000);
console.log(date.toLocaleString());`)
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
            <code>{`const date = new Date('2021-06-12T00:00:00Z');
const unixTimestamp = Math.floor(date.getTime() / 1000);
console.log(unixTimestamp);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const date = new Date('2021-06-12T00:00:00Z');
const unixTimestamp = Math.floor(date.getTime() / 1000);
console.log(unixTimestamp);`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default JavaScriptDocs

