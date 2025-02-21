import type React from "react"
import { Copy } from "lucide-react"

interface ApiPageProps {
  language: "en" | "es" | "pt"
}

const ApiPage: React.FC<ApiPageProps> = ({ language }) => {
  const translations = {
    en: {
      title: "API Documentation",
      description: "Learn how to use the UnixTemp API to convert timestamps programmatically.",
      endpoint: "Endpoint",
      parameters: "Parameters",
      parameterDescriptions: {
        type: "Conversion type: 'time' (to convert from Unix) or 'unix' (to convert to Unix)",
        format: "Output format: 'utc', 'readable', 'iso8601', or 'unix'",
        value: "Timestamp or date to convert",
      },
      example: "Example",
      response: "Response",
      notes: "Notes",
      notesList: [
        "The API uses GET requests for simplicity.",
        "All timestamps are in seconds.",
        "The 'readable' format returns a human-readable date string.",
      ],
    },
    es: {
      title: "Documentación de la API",
      description: "Aprende a usar la API de UnixTemp para convertir marcas de tiempo de forma programática.",
      endpoint: "Punto de acceso",
      parameters: "Parámetros",
      parameterDescriptions: {
        type: "Tipo de conversión: 'time' (para convertir desde Unix) o 'unix' (para convertir a Unix)",
        format: "Formato de salida: 'utc', 'readable', 'iso8601', o 'unix'",
        value: "Marca de tiempo o fecha a convertir",
      },
      example: "Ejemplo",
      response: "Respuesta",
      notes: "Notas",
      notesList: [
        "La API utiliza solicitudes GET para mayor simplicidad.",
        "Todas las marcas de tiempo están en segundos.",
        "El formato 'readable' devuelve una cadena de fecha legible por humanos.",
      ],
    },
    pt: {
      title: "Documentação da API",
      description: "Aprenda a usar a API do UnixTemp para converter carimbos de data/hora programaticamente.",
      endpoint: "Endpoint",
      parameters: "Parâmetros",
      parameterDescriptions: {
        type: "Tipo de conversão: 'time' (para converter de Unix) ou 'unix' (para converter para Unix)",
        format: "Formato de saída: 'utc', 'readable', 'iso8601', ou 'unix'",
        value: "Carimbo de data/hora ou data para converter",
      },
      example: "Exemplo",
      response: "Resposta",
      notes: "Notas",
      notesList: [
        "A API usa solicitações GET para simplicidade.",
        "Todos os carimbos de data/hora estão em segundos.",
        "O formato 'readable' retorna uma string de data legível por humanos.",
      ],
    },
  }

  const t = translations[language]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="api-page">
      <h1>{t.title}</h1>
      <p>{t.description}</p>

      <section>
        <h2>{t.endpoint}</h2>
        <div className="code-block">
          <pre>
            <code>GET https://api.unix-temp.vercel.app/convert</code>
          </pre>
          <button
            className="copy-button"
            onClick={() => copyToClipboard("GET https://api.unix-temp.vercel.app/convert")}
          >
            <Copy size={16} />
          </button>
        </div>
      </section>

      <section>
        <h2>{t.parameters}</h2>
        <ul>
          <li>
            <strong>type</strong>: {t.parameterDescriptions.type}
          </li>
          <li>
            <strong>format</strong>: {t.parameterDescriptions.format}
          </li>
          <li>
            <strong>value</strong>: {t.parameterDescriptions.value}
          </li>
        </ul>
      </section>

      <section>
        <h2>{t.example}</h2>
        <div className="code-block">
          <pre>
            <code>GET https://api.unix-temp.vercel.app/convert?type=time&format=readable&value=1700000000</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard("GET https://api.unix-temp.vercel.app/convert?type=time&format=readable&value=1700000000")
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </section>

      <section>
        <h2>{t.response}</h2>
        <div className="code-block">
          <pre>
            <code>{`
{
  "original": "1700000000",
  "converted": "November 14, 2023, 12:00:00 PM",
  "format": "readable"
}
            `}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`
{
  "original": "1700000000",
  "converted": "November 14, 2023, 12:00:00 PM",
  "format": "readable"
}
          `)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </section>

      <section>
        <h2>{t.notes}</h2>
        <ul>
          {t.notesList.map((note, index) => (
            <li key={index}>{note}</li>
          ))}
        </ul>
      </section>
    </div>
  )
}

export default ApiPage

