"use client"

import type React from "react"
import { timeUnits } from "../utils/timeFormats"

interface DescriptionProps {
  language: "en" | "es" | "pt"
}

const Description: React.FC<DescriptionProps> = ({ language }) => {
  const translations = {
    en: {
      title: "What is Unix Time?",
      description:
        "Unix time is a way to track time as a running total of seconds. This count starts at the Unix Epoch on January 1st, 1970 at UTC. Therefore, the unix timestamp is merely the number of seconds between a particular date and the Unix Epoch. It's worth noting that this point in time technically does not change no matter where you are in the world. This makes it very useful for computer systems to track and sort dated information in dynamic and distributed applications both online and client side.",
      timeUnits: "Time Units in Seconds",
      hour: "Hour",
      day: "Day",
      week: "Week",
      month: "Month",
      year: "Year",
      seconds: "Seconds",
      y2038: "What happens on January 19, 2038?",
      y2038Description:
        "On this date, the Unix timestamp will cease to work due to a 32-bit overflow. Before this moment, millions of applications will need to either adopt a new timestamp convention or migrate to 64-bit systems, which will give the timestamp a 'bit' more time.",
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
      days: "days",
    },
    es: {
      title: "¿Qué es el Tiempo Unix?",
      description:
        "El tiempo Unix es una forma de rastrear el tiempo como un total de segundos consecutivos. Este recuento comienza en el Unix Epoch el 1 de enero de 1970 en UTC. Por lo tanto, la marca horaria unix es simplemente el número de segundos entre una fecha concreta y la época Unix. También hay que señalar que este punto en el tiempo técnicamente no cambia independientemente de dónde se encuentre en el mundo. Esto resulta muy útil para los sistemas informáticos para rastrear y ordenar información fechada en aplicaciones dinámicas y distribuidas tanto en línea como en el cliente.",
      timeUnits: "Unidades de Tiempo en Segundos",
      hour: "Hora",
      day: "Día",
      week: "Semana",
      month: "Mes",
      year: "Año",
      seconds: "Segundos",
      y2038: "¿Qué pasa el 19 de enero de 2038?",
      y2038Description:
        "En esta fecha, la marca horaria Unix dejará de funcionar debido a un desbordamiento de 32 bits. Antes de este momento, millones de aplicaciones necesitarán adoptar una nueva convención para marcas de tiempo o migrar a sistemas de 64 bits, lo que le dará un 'poco' más de tiempo al sello de tiempo.",
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
      days: "días",
    },
    pt: {
      title: "O que é o Tempo Unix?",
      description:
        "O tempo Unix é uma forma de rastrear o tempo como um total de segundos consecutivos. Esta contagem começa no Unix Epoch em 1º de janeiro de 1970 em UTC. Portanto, o carimbo de data/hora unix é simplesmente o número de segundos entre uma data específica e a época Unix. Vale ressaltar que este ponto no tempo tecnicamente não muda independentemente de onde você esteja no mundo. Isso é muito útil para sistemas de computador rastrearem e ordenarem informações datadas em aplicações dinâmicas e distribuídas, tanto online quanto no cliente.",
      timeUnits: "Unidades de Tempo em Segundos",
      hour: "Hora",
      day: "Dia",
      week: "Semana",
      month: "Mês",
      year: "Ano",
      seconds: "Segundos",
      y2038: "O que acontece em 19 de janeiro de 2038?",
      y2038Description:
        "Nesta data, o carimbo de data/hora Unix deixará de funcionar devido a um overflow de 32 bits. Antes deste momento, milhões de aplicações precisarão adotar uma nova convenção de carimbo de data/hora ou migrar para sistemas de 64 bits, o que dará um 'pouco' mais de tempo ao carimbo.",
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
      days: "dias",
    },
  }

  const t = translations[language]

  return (
    <div className="description">
      <h2>{t.title}</h2>
      <p>{t.description}</p>

      <h3>{t.timeUnits}</h3>
      <table className="time-units-table">
        <thead>
          <tr>
            <th>{t.timeUnits}</th>
            <th>{t.seconds}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1 {t.hour}</td>
            <td>{timeUnits.HOUR.toLocaleString()}</td>
          </tr>
          <tr>
            <td>1 {t.day}</td>
            <td>{timeUnits.DAY.toLocaleString()}</td>
          </tr>
          <tr>
            <td>1 {t.week}</td>
            <td>{timeUnits.WEEK.toLocaleString()}</td>
          </tr>
          <tr>
            <td>
              1 {t.month} (30.44 {t.days})
            </td>
            <td>{timeUnits.MONTH.toLocaleString()}</td>
          </tr>
          <tr>
            <td>
              1 {t.year} (365.24 {t.days})
            </td>
            <td>{timeUnits.YEAR.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>

      <h3>{t.y2038}</h3>
      <p>{t.y2038Description}</p>

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

