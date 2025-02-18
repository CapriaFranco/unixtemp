import type React from "react"
import { Copy } from "lucide-react"

interface JavaScriptDocsProps {
  language: "en" | "es" | "pt"
}

const JavaScriptDocs: React.FC<JavaScriptDocsProps> = ({ language }) => {
  const translations = {
    en: {
      title: "JavaScript Usage",
      introduction:
        "Learn how to work with Unix timestamps in JavaScript. This guide covers various operations and best practices for handling Unix time in your JavaScript applications.",
      currentTimestamp: "Get Current Unix Timestamp",
      convertToDate: "Convert Unix Timestamp to Date",
      convertToUnix: "Convert Date to Unix Timestamp",
      formatUnixTimestamp: "Format Unix Timestamp",
      timezoneConversion: "Timezone Conversion",
      addingTime: "Adding Time to Unix Timestamp",
      subtractingTime: "Subtracting Time from Unix Timestamp",
      comparingTimestamps: "Comparing Unix Timestamps",
    },
    es: {
      title: "Uso en JavaScript",
      introduction:
        "Aprende a trabajar con marcas de tiempo Unix en JavaScript. Esta guía cubre varias operaciones y mejores prácticas para manejar el tiempo Unix en tus aplicaciones JavaScript.",
      currentTimestamp: "Obtener la Marca de Tiempo Unix Actual",
      convertToDate: "Convertir Marca de Tiempo Unix a Fecha",
      convertToUnix: "Convertir Fecha a Marca de Tiempo Unix",
      formatUnixTimestamp: "Formatear Marca de Tiempo Unix",
      timezoneConversion: "Conversión de Zona Horaria",
      addingTime: "Agregar Tiempo a una Marca de Tiempo Unix",
      subtractingTime: "Restar Tiempo de una Marca de Tiempo Unix",
      comparingTimestamps: "Comparar Marcas de Tiempo Unix",
    },
    pt: {
      title: "Uso em JavaScript",
      introduction:
        "Aprenda a trabalhar com carimbos de data/hora Unix em JavaScript. Este guia abrange várias operações e melhores práticas para lidar com o tempo Unix em suas aplicações JavaScript.",
      currentTimestamp: "Obter o Carimbo de Data/Hora Unix Atual",
      convertToDate: "Converter Carimbo de Data/Hora Unix para Data",
      convertToUnix: "Converter Data para Carimbo de Data/Hora Unix",
      formatUnixTimestamp: "Formatar Carimbo de Data/Hora Unix",
      timezoneConversion: "Conversão de Fuso Horário",
      addingTime: "Adicionar Tempo a um Carimbo de Data/Hora Unix",
      subtractingTime: "Subtrair Tempo de um Carimbo de Data/Hora Unix",
      comparingTimestamps: "Comparar Carimbos de Data/Hora Unix",
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
      <div className="section">
        <h2>{t.formatUnixTimestamp}</h2>
        <div className="code-block">
          <pre>
            <code>{`const unixTimestamp = 1623456789;
const date = new Date(unixTimestamp * 1000);
const formattedDate = date.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
});
console.log(formattedDate);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const unixTimestamp = 1623456789;
const date = new Date(unixTimestamp * 1000);
const formattedDate = date.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
});
console.log(formattedDate);`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h2>{t.timezoneConversion}</h2>
        <div className="code-block">
          <pre>
            <code>{`const unixTimestamp = 1623456789;
const date = new Date(unixTimestamp * 1000);
const options = { timeZone: 'America/New_York', timeZoneName: 'short' };
console.log(date.toLocaleString('en-US', options));`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const unixTimestamp = 1623456789;
const date = new Date(unixTimestamp * 1000);
const options = { timeZone: 'America/New_York', timeZoneName: 'short' };
console.log(date.toLocaleString('en-US', options));`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h2>{t.addingTime}</h2>
        <div className="code-block">
          <pre>
            <code>{`const unixTimestamp = 1623456789;
const hoursToAdd = 24;
const newTimestamp = unixTimestamp + (hoursToAdd * 3600);
console.log(new Date(newTimestamp * 1000).toLocaleString());`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const unixTimestamp = 1623456789;
const hoursToAdd = 24;
const newTimestamp = unixTimestamp + (hoursToAdd * 3600);
console.log(new Date(newTimestamp * 1000).toLocaleString());`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h2>{t.subtractingTime}</h2>
        <div className="code-block">
          <pre>
            <code>{`const unixTimestamp = 1623456789;
const daysToSubtract = 7;
const newTimestamp = unixTimestamp - (daysToSubtract * 24 * 3600);
console.log(new Date(newTimestamp * 1000).toLocaleString());`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const unixTimestamp = 1623456789;
const daysToSubtract = 7;
const newTimestamp = unixTimestamp - (daysToSubtract * 24 * 3600);
console.log(new Date(newTimestamp * 1000).toLocaleString());`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h2>{t.comparingTimestamps}</h2>
        <div className="code-block">
          <pre>
            <code>{`const timestamp1 = 1623456789;
const timestamp2 = 1623470000;

if (timestamp1 < timestamp2) {
  console.log('timestamp1 is earlier than timestamp2');
} else if (timestamp1 > timestamp2) {
  console.log('timestamp1 is later than timestamp2');
} else {
  console.log('The timestamps are equal');
}

const differenceInSeconds = Math.abs(timestamp2 - timestamp1);
console.log(\`The difference is \${differenceInSeconds} seconds\`);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const timestamp1 = 1623456789;
const timestamp2 = 1623470000;

if (timestamp1 < timestamp2) {
  console.log('timestamp1 is earlier than timestamp2');
} else if (timestamp1 > timestamp2) {
  console.log('timestamp1 is later than timestamp2');
} else {
  console.log('The timestamps are equal');
}

const differenceInSeconds = Math.abs(timestamp2 - timestamp1);
console.log(\`The difference is \${differenceInSeconds} seconds\`);`)
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

