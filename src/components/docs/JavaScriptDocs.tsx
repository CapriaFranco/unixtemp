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
        "JavaScript provides several ways to work with Unix timestamps. Here's a comprehensive guide on how to use Unix time in JavaScript, including various operations and best practices.",
      currentTimestamp: "Get Current Unix Timestamp",
      convertToDate: "Convert Unix Timestamp to Date",
      convertToUnix: "Convert Date to Unix Timestamp",
      formatUnixTimestamp: "Format Unix Timestamp",
      timezoneConversion: "Timezone Conversion",
      addingTime: "Adding Time to Unix Timestamp",
      subtractingTime: "Subtracting Time from Unix Timestamp",
      comparingTimestamps: "Comparing Unix Timestamps",
      bestPractices: "Best Practices",
      commonPitfalls: "Common Pitfalls",
    },
    es: {
      title: "Uso en JavaScript",
      introduction:
        "JavaScript proporciona varias formas de trabajar con marcas de tiempo Unix. Aquí hay una guía completa sobre cómo usar el tiempo Unix en JavaScript, incluyendo varias operaciones y mejores prácticas.",
      currentTimestamp: "Obtener la Marca de Tiempo Unix Actual",
      convertToDate: "Convertir Marca de Tiempo Unix a Fecha",
      convertToUnix: "Convertir Fecha a Marca de Tiempo Unix",
      formatUnixTimestamp: "Formatear Marca de Tiempo Unix",
      timezoneConversion: "Conversión de Zona Horaria",
      addingTime: "Agregar Tiempo a una Marca de Tiempo Unix",
      subtractingTime: "Restar Tiempo de una Marca de Tiempo Unix",
      comparingTimestamps: "Comparar Marcas de Tiempo Unix",
      bestPractices: "Mejores Prácticas",
      commonPitfalls: "Errores Comunes",
    },
    pt: {
      title: "Uso em JavaScript",
      introduction:
        "JavaScript fornece várias maneiras de trabalhar com carimbos de data/hora Unix. Aqui está um guia abrangente sobre como usar o tempo Unix em JavaScript, incluindo várias operações e melhores práticas.",
      currentTimestamp: "Obter o Carimbo de Data/Hora Unix Atual",
      convertToDate: "Converter Carimbo de Data/Hora Unix para Data",
      convertToUnix: "Converter Data para Carimbo de Data/Hora Unix",
      formatUnixTimestamp: "Formatar Carimbo de Data/Hora Unix",
      timezoneConversion: "Conversão de Fuso Horário",
      addingTime: "Adicionar Tempo a um Carimbo de Data/Hora Unix",
      subtractingTime: "Subtrair Tempo de um Carimbo de Data/Hora Unix",
      comparingTimestamps: "Comparar Carimbos de Data/Hora Unix",
      bestPractices: "Melhores Práticas",
      commonPitfalls: "Erros Comuns",
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
            <code>{`// Get current Unix timestamp in seconds
const currentUnixTimestamp = Math.floor(Date.now() / 1000);
console.log(currentUnixTimestamp);

// Get current Unix timestamp in milliseconds
const currentUnixTimestampMs = Date.now();
console.log(currentUnixTimestampMs);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`// Get current Unix timestamp in seconds
const currentUnixTimestamp = Math.floor(Date.now() / 1000);
console.log(currentUnixTimestamp);

// Get current Unix timestamp in milliseconds
const currentUnixTimestampMs = Date.now();
console.log(currentUnixTimestampMs);`)
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
const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
console.log(date.toLocaleString()); // Outputs date in local time zone
console.log(date.toUTCString()); // Outputs date in UTC`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const unixTimestamp = 1623456789;
const date = new Date(unixTimestamp * 1000); // Convert to milliseconds
console.log(date.toLocaleString()); // Outputs date in local time zone
console.log(date.toUTCString()); // Outputs date in UTC`)
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
console.log(unixTimestamp);

// For a specific date
const specificDate = new Date(2021, 5, 12); // Month is 0-indexed
const specificUnixTimestamp = Math.floor(specificDate.getTime() / 1000);
console.log(specificUnixTimestamp);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const date = new Date('2021-06-12T00:00:00Z');
const unixTimestamp = Math.floor(date.getTime() / 1000);
console.log(unixTimestamp);

// For a specific date
const specificDate = new Date(2021, 5, 12); // Month is 0-indexed
const specificUnixTimestamp = Math.floor(specificDate.getTime() / 1000);
console.log(specificUnixTimestamp);`)
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

// Using toLocaleString
const formattedDate = date.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
});
console.log(formattedDate);

// Using Intl.DateTimeFormat
const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'UTC',
  timeZoneName: 'short'
});
console.log(formatter.format(date));`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const unixTimestamp = 1623456789;
const date = new Date(unixTimestamp * 1000);

// Using toLocaleString
const formattedDate = date.toLocaleString('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZoneName: 'short'
});
console.log(formattedDate);

// Using Intl.DateTimeFormat
const formatter = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit',
  timeZone: 'UTC',
  timeZoneName: 'short'
});
console.log(formatter.format(date));`)
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

// Convert to New York time
const nyOptions = { timeZone: 'America/New_York', timeZoneName: 'short' };
console.log(date.toLocaleString('en-US', nyOptions));

// Convert to Tokyo time
const tokyoOptions = { timeZone: 'Asia/Tokyo', timeZoneName: 'short' };
console.log(date.toLocaleString('en-US', tokyoOptions));

// Using Intl.DateTimeFormat for better performance with multiple conversions
const nyFormatter = new Intl.DateTimeFormat('en-US', nyOptions);
const tokyoFormatter = new Intl.DateTimeFormat('en-US', tokyoOptions);

console.log(nyFormatter.format(date));
console.log(tokyoFormatter.format(date));`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const unixTimestamp = 1623456789;
const date = new Date(unixTimestamp * 1000);

// Convert to New York time
const nyOptions = { timeZone: 'America/New_York', timeZoneName: 'short' };
console.log(date.toLocaleString('en-US', nyOptions));

// Convert to Tokyo time
const tokyoOptions = { timeZone: 'Asia/Tokyo', timeZoneName: 'short' };
console.log(date.toLocaleString('en-US', tokyoOptions));

// Using Intl.DateTimeFormat for better performance with multiple conversions
const nyFormatter = new Intl.DateTimeFormat('en-US', nyOptions);
const tokyoFormatter = new Intl.DateTimeFormat('en-US', tokyoOptions);

console.log(nyFormatter.format(date));
console.log(tokyoFormatter.format(date));`)
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
const date = new Date(unixTimestamp * 1000);

// Add 24 hours
const newTimestamp = unixTimestamp + (24 * 60 * 60);
const newDate = new Date(newTimestamp * 1000);
console.log(newDate.toLocaleString());

// Add 1 month (approximately)
const oneMonthLater = new Date(date.getTime() + (30 * 24 * 60 * 60 * 1000));
console.log(oneMonthLater.toLocaleString());

// For more precise date arithmetic, consider using a library like date-fns or moment.js`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const unixTimestamp = 1623456789;
const date = new Date(unixTimestamp * 1000);

// Add 24 hours
const newTimestamp = unixTimestamp + (24 * 60 * 60);
const newDate = new Date(newTimestamp * 1000);
console.log(newDate.toLocaleString());

// Add 1 month (approximately)
const oneMonthLater = new Date(date.getTime() + (30 * 24 * 60 * 60 * 1000));
console.log(oneMonthLater.toLocaleString());

// For more precise date arithmetic, consider using a library like date-fns or moment.js`)
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
const date = new Date(unixTimestamp * 1000);

// Subtract 7 days
const sevenDaysAgo = unixTimestamp - (7 * 24 * 60 * 60);
console.log(new Date(sevenDaysAgo * 1000).toLocaleString());

// Subtract 1 year (approximately)
const oneYearAgo = new Date(date.getTime() - (365 * 24 * 60 * 60 * 1000));
console.log(oneYearAgo.toLocaleString());

// For more precise date arithmetic, consider using a library like date-fns or moment.js`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const unixTimestamp = 1623456789;
const date = new Date(unixTimestamp * 1000);

// Subtract 7 days
const sevenDaysAgo = unixTimestamp - (7 * 24 * 60 * 60);
console.log(new Date(sevenDaysAgo * 1000).toLocaleString());

// Subtract 1 year (approximately)
const oneYearAgo = new Date(date.getTime() - (365 * 24 * 60 * 60 * 1000));
console.log(oneYearAgo.toLocaleString());

// For more precise date arithmetic, consider using a library like date-fns or moment.js`)
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
console.log(\`The difference is \${differenceInSeconds} seconds\`);

// Converting the difference to days, hours, minutes, and seconds
const days = Math.floor(differenceInSeconds / (24 * 60 * 60));
const hours = Math.floor((differenceInSeconds % (24 * 60 * 60)) / (60 * 60));
const minutes = Math.floor((differenceInSeconds % (60 * 60)) / 60);
const seconds = differenceInSeconds % 60;

console.log(\`Difference: \${days} days, \${hours} hours, \${minutes} minutes, \${seconds} seconds\`);`}</code>
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
console.log(\`The difference is \${differenceInSeconds} seconds\`);

// Converting the difference to days, hours, minutes, and seconds
const days = Math.floor(differenceInSeconds / (24 * 60 * 60));
const hours = Math.floor((differenceInSeconds % (24 * 60 * 60)) / (60 * 60));
const minutes = Math.floor((differenceInSeconds % (60 * 60)) / 60);
const seconds = differenceInSeconds % 60;

console.log(\`Difference: \${days} days, \${hours} hours, \${minutes} minutes, \${seconds} seconds\`);`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h2>{t.bestPractices}</h2>
        <ul>
          <li>Always store timestamps in UTC to avoid timezone issues.</li>
          <li>Use millisecond precision when working with modern JavaScript Date objects.</li>
          <li>Consider using a library like date-fns or Luxon for complex date operations.</li>
          <li>Be aware of the limitations of the native Date object, especially for historical dates.</li>
          <li>When displaying dates to users, always format them according to the user's locale and timezone.</li>
        </ul>
      </div>
      <div className="section">
        <h2>{t.commonPitfalls}</h2>
        <ul>
          <li>
            Forgetting to multiply by 1000 when converting Unix timestamps (in seconds) to JavaScript Date objects.
          </li>
          <li>Ignoring timezone differences when comparing dates from different sources.</li>
          <li>
            Assuming that adding fixed numbers of seconds always results in the correct date (e.g., for months or
            years).
          </li>
          <li>Not accounting for daylight saving time changes in date arithmetic.</li>
          <li>
            Using the JavaScript Date constructor with year, month, day parameters without considering that months are
            zero-indexed.
          </li>
        </ul>
      </div>
    </div>
  )
}

export default JavaScriptDocs

