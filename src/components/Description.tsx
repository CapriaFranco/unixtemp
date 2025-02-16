import type React from "react"

interface DescriptionProps {
  language: "en" | "es" | "pt"
}

const Description: React.FC<DescriptionProps> = ({ language }) => {
  const translations = {
    en: {
      title: "What is Unix Time?",
      description:
        "Unix time, also known as POSIX time or Epoch time, is a system for describing a point in time. It is the number of seconds that have elapsed since the Unix epoch, minus leap seconds; the Unix epoch is 00:00:00 UTC on 1 January 1970.",
      uses: "Uses of Unix Time:",
      usesList: [
        "Simplifying date and time calculations",
        "Storing timestamps in databases",
        "Synchronizing time across different systems and time zones",
        "Generating unique identifiers",
      ],
      howItWorks: "How It Works:",
      howItWorksList: [
        "Unix time is typically stored as a 32-bit or 64-bit integer",
        "It represents the number of seconds since the epoch",
        "It's independent of time zones, making it useful for global applications",
      ],
    },
    es: {
      title: "¿Qué es el Tiempo Unix?",
      description:
        "El tiempo Unix, también conocido como tiempo POSIX o tiempo Epoch, es un sistema para describir un punto en el tiempo. Es el número de segundos transcurridos desde la época Unix, menos los segundos bisiestos; la época Unix es 00:00:00 UTC del 1 de enero de 1970.",
      uses: "Usos del Tiempo Unix:",
      usesList: [
        "Simplificar cálculos de fecha y hora",
        "Almacenar marcas de tiempo en bases de datos",
        "Sincronizar el tiempo entre diferentes sistemas y zonas horarias",
        "Generar identificadores únicos",
      ],
      howItWorks: "Cómo Funciona:",
      howItWorksList: [
        "El tiempo Unix se almacena típicamente como un entero de 32 o 64 bits",
        "Representa el número de segundos desde la época",
        "Es independiente de las zonas horarias, lo que lo hace útil para aplicaciones globales",
      ],
    },
    pt: {
      title: "O que é o Tempo Unix?",
      description:
        "O tempo Unix, também conhecido como tempo POSIX ou tempo Epoch, é um sistema para descrever um ponto no tempo. É o número de segundos decorridos desde a época Unix, menos os segundos bissextos; a época Unix é 00:00:00 UTC em 1 de janeiro de 1970.",
      uses: "Usos do Tempo Unix:",
      usesList: [
        "Simplificar cálculos de data e hora",
        "Armazenar carimbos de data/hora em bancos de dados",
        "Sincronizar o tempo entre diferentes sistemas e fusos horários",
        "Gerar identificadores únicos",
      ],
      howItWorks: "Como Funciona:",
      howItWorksList: [
        "O tempo Unix é tipicamente armazenado como um inteiro de 32 ou 64 bits",
        "Representa o número de segundos desde a época",
        "É independente de fusos horários, tornando-o útil para aplicações globais",
      ],
    },
  }

  const t = translations[language]

  return (
    <div className="description">
      <h2>{t.title}</h2>
      <p>{t.description}</p>
      <h3>{t.uses}</h3>
      <ul>
        {t.usesList.map((use, index) => (
          <li key={index}>{use}</li>
        ))}
      </ul>
      <h3>{t.howItWorks}</h3>
      <ul>
        {t.howItWorksList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default Description

