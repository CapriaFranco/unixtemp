import type React from "react"
import { Copy } from "lucide-react"

interface DiscordDocsProps {
  language: "en" | "es" | "pt"
}

const DiscordDocs: React.FC<DiscordDocsProps> = ({ language }) => {
  const translations = {
    en: {
      title: "Discord Integration",
      introduction:
        "Learn how to use Unix timestamps in Discord messages to create dynamic time displays and schedule events.",
      usage: "Basic Usage",
      usageDescription: "To use Unix timestamps in Discord, you can use the following format:",
      example: "Example",
      exampleDescription: "This will display the time as:",
      formats: "Available Formats",
      formatsList: [
        { format: "t", description: "Short Time (e.g., 9:41 PM)" },
        { format: "T", description: "Long Time (e.g., 9:41:30 PM)" },
        { format: "d", description: "Short Date (e.g., 06/11/2021)" },
        { format: "D", description: "Long Date (e.g., June 11, 2021)" },
        { format: "f", description: "Short Date/Time (e.g., June 11, 2021 9:41 PM)" },
        { format: "F", description: "Long Date/Time (e.g., Friday, June 11, 2021 9:41 PM)" },
        { format: "R", description: "Relative Time (e.g., 2 hours ago, in 3 days)" },
      ],
      advancedUsage: "Advanced Usage",
      eventScheduling: "Event Scheduling",
      countdownTimer: "Countdown Timer",
      dynamicMessages: "Dynamic Messages",
      botIntegration: "Bot Integration",
    },
    es: {
      title: "Integración con Discord",
      introduction:
        "Aprende a usar marcas de tiempo Unix en mensajes de Discord para crear visualizaciones de tiempo dinámicas y programar eventos.",
      usage: "Uso Básico",
      usageDescription: "Para usar marcas de tiempo Unix en Discord, puedes usar el siguiente formato:",
      example: "Ejemplo",
      exampleDescription: "Esto mostrará el tiempo como:",
      formats: "Formatos Disponibles",
      formatsList: [
        { format: "t", description: "Hora Corta (ej., 9:41 PM)" },
        { format: "T", description: "Hora Larga (ej., 9:41:30 PM)" },
        { format: "d", description: "Fecha Corta (ej., 11/06/2021)" },
        { format: "D", description: "Fecha Larga (ej., 11 de junio de 2021)" },
        { format: "f", description: "Fecha/Hora Corta (ej., 11 de junio de 2021 9:41 PM)" },
        { format: "F", description: "Fecha/Hora Larga (ej., viernes, 11 de junio de 2021 9:41 PM)" },
        { format: "R", description: "Tiempo Relativo (ej., hace 2 horas, en 3 días)" },
      ],
      advancedUsage: "Uso Avanzado",
      eventScheduling: "Programación de Eventos",
      countdownTimer: "Temporizador de Cuenta Regresiva",
      dynamicMessages: "Mensajes Dinámicos",
      botIntegration: "Integración de Bots",
    },
    pt: {
      title: "Integração com Discord",
      introduction:
        "Aprenda a usar carimbos de data/hora Unix em mensagens do Discord para criar exibições de tempo dinâmicas e agendar eventos.",
      usage: "Uso Básico",
      usageDescription: "Para usar carimbos de data/hora Unix no Discord, você pode usar o seguinte formato:",
      example: "Exemplo",
      exampleDescription: "Isso exibirá o tempo como:",
      formats: "Formatos Disponíveis",
      formatsList: [
        { format: "t", description: "Hora Curta (ex., 21:41)" },
        { format: "T", description: "Hora Longa (ex., 21:41:30)" },
        { format: "d", description: "Data Curta (ex., 11/06/2021)" },
        { format: "D", description: "Data Longa (ex., 11 de junho de 2021)" },
        { format: "f", description: "Data/Hora Curta (ex., 11 de junho de 2021 21:41)" },
        { format: "F", description: "Data/Hora Longa (ex., sexta-feira, 11 de junho de 2021 21:41)" },
        { format: "R", description: "Tempo Relativo (ex., há 2 horas, em 3 dias)" },
      ],
      advancedUsage: "Uso Avançado",
      eventScheduling: "Agendamento de Eventos",
      countdownTimer: "Temporizador de Contagem Regressiva",
      dynamicMessages: "Mensagens Dinâmicas",
      botIntegration: "Integração de Bots",
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
      <div className="section">
        <h2>{t.advancedUsage}</h2>
        <h3>{t.eventScheduling}</h3>
        <div className="code-block">
          <pre>
            <code>{`🎉 Join our community event!
Start: <t:1623456789:F>
End: <t:1623470189:F>
Countdown: <t:1623456789:R>`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`🎉 Join our community event!
Start: <t:1623456789:F>
End: <t:1623470189:F>
Countdown: <t:1623456789:R>`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h3>{t.countdownTimer}</h3>
        <div className="code-block">
          <pre>
            <code>{`The giveaway ends <t:1623556789:R>!`}</code>
          </pre>
          <button className="copy-button" onClick={() => copyToClipboard(`The giveaway ends <t:1623556789:R>!`)}>
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h3>{t.dynamicMessages}</h3>
        <div className="code-block">
          <pre>
            <code>{`Server stats as of <t:${Math.floor(Date.now() / 1000)}:f>:
- Members: 1000
- Online: 250
- Messages today: 5000`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`Server stats as of <t:${Math.floor(Date.now() / 1000)}:f>:
- Members: 1000
- Online: 250
- Messages today: 5000`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h3>{t.botIntegration}</h3>
        <p>For bot developers, you can use Discord.js to create dynamic timestamps:</p>
        <div className="code-block">
          <pre>
            <code>{`const { time } = require('discord.js');

const now = Math.floor(Date.now() / 1000);
const futureTime = now + 3600; // 1 hour from now

message.channel.send(\`The event starts \${time(futureTime, 'F')} (\${time(futureTime, 'R')})\`);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`const { time } = require('discord.js');

const now = Math.floor(Date.now() / 1000);
const futureTime = now + 3600; // 1 hour from now

message.channel.send(\`The event starts \${time(futureTime, 'F')} (\${time(futureTime, 'R')})\`);`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default DiscordDocs

