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
        "Unix time, also known as POSIX time or Epoch time, is a system for describing a point in time. It is the number of seconds that have elapsed since the Unix Epoch, which is 00:00:00 UTC on 1 January 1970 (excluding leap seconds). Essentially, it is a way to track time as a running total of seconds.",
      importance: "Importance and Applications",
      importanceList: [
        "Universality: Unix timestamps are independent of time zones, making them ideal for global applications.",
        "Simplicity: They are easy to store as a single integer and perform date/time calculations.",
        "Efficiency: Comparing two Unix timestamps is as simple as comparing two numbers.",
        "Standardization: Widely adopted in computing, making it a common language for time representation across systems.",
      ],
      history: "Historical Context",
      historyText:
        "The concept of Unix time was introduced in the early 1970s with the development of the Unix operating system at Bell Labs. The choice of the epoch (January 1, 1970) was arbitrary, based on the convenience for the developers at that time.",
      timeUnits: "Time Units in Seconds",
      hour: "Hour",
      day: "Day",
      week: "Week",
      month: "Month",
      year: "Year",
      seconds: "Seconds",
      y2038: "The Year 2038 Problem",
      y2038Description:
        "On January 19, 2038, at 03:14:07 UTC, 32-bit systems using Unix time will experience an integer overflow. This is similar to the Y2K problem and is known as the 'Year 2038 problem' or 'Y2038'. After this time, these systems will be unable to encode times correctly. The solution involves migrating to 64-bit timestamps, which can represent dates up to the year 292,277,026,596.",
      uses: "Common Uses of Unix Time:",
      usesList: [
        "Logging events in computer systems",
        "Synchronizing time across distributed systems",
        "Storing timestamps in databases",
        "Version control systems for tracking changes",
        "Cryptography and digital signatures",
        "Network protocols for time synchronization",
      ],
      howItWorks: "How It Works:",
      howItWorksList: [
        "Unix time is typically stored as a signed 32-bit or 64-bit integer",
        "It represents the number of seconds since the epoch",
        "Negative values represent times before the epoch",
        "It doesn't account for leap seconds, which can lead to discrepancies in precise time calculations",
      ],
      timeZones: "Time Zones and Unix Time",
      timeZonesText:
        "Unix time is always in UTC (Coordinated Universal Time). When displaying Unix time in a specific time zone, conversion is necessary. This makes Unix time particularly useful for storing and comparing times across different time zones.",
      bestPractices: "Best Practices",
      bestPracticesList: [
        "Always store timestamps in UTC/Unix time",
        "Convert to local time only when displaying to users",
        "Be aware of daylight saving time when converting Unix time to local time",
        "Use 64-bit integers for Unix timestamps to avoid the Year 2038 problem",
        "Consider using specialized libraries for complex date/time operations",
      ],
      days: "days",
    },
    es: {
      title: "¿Qué es el Tiempo Unix?",
      description:
        "El tiempo Unix, también conocido como tiempo POSIX o tiempo Epoch, es un sistema para describir un punto en el tiempo. Es el número de segundos transcurridos desde el Unix Epoch, que es 00:00:00 UTC del 1 de enero de 1970 (excluyendo los segundos intercalares). Esencialmente, es una forma de rastrear el tiempo como un total acumulado de segundos.",
      importance: "Importancia y Aplicaciones",
      importanceList: [
        "Universalidad: Las marcas de tiempo Unix son independientes de las zonas horarias, lo que las hace ideales para aplicaciones globales.",
        "Simplicidad: Son fáciles de almacenar como un solo número entero y realizar cálculos de fecha/hora.",
        "Eficiencia: Comparar dos marcas de tiempo Unix es tan simple como comparar dos números.",
        "Estandarización: Ampliamente adoptado en informática, convirtiéndolo en un lenguaje común para la representación del tiempo en diferentes sistemas.",
      ],
      history: "Contexto Histórico",
      historyText:
        "El concepto de tiempo Unix se introdujo a principios de la década de 1970 con el desarrollo del sistema operativo Unix en Bell Labs. La elección de la época (1 de enero de 1970) fue arbitraria, basada en la conveniencia para los desarrolladores en ese momento.",
      timeUnits: "Unidades de Tiempo en Segundos",
      hour: "Hora",
      day: "Día",
      week: "Semana",
      month: "Mes",
      year: "Año",
      seconds: "Segundos",
      y2038: "El Problema del Año 2038",
      y2038Description:
        "El 19 de enero de 2038, a las 03:14:07 UTC, los sistemas de 32 bits que utilizan tiempo Unix experimentarán un desbordamiento de enteros. Esto es similar al problema Y2K y se conoce como el 'Problema del año 2038' o 'Y2038'. Después de este momento, estos sistemas no podrán codificar los tiempos correctamente. La solución implica migrar a marcas de tiempo de 64 bits, que pueden representar fechas hasta el año 292,277,026,596.",
      uses: "Usos Comunes del Tiempo Unix:",
      usesList: [
        "Registro de eventos en sistemas informáticos",
        "Sincronización de tiempo en sistemas distribuidos",
        "Almacenamiento de marcas de tiempo en bases de datos",
        "Sistemas de control de versiones para rastrear cambios",
        "Criptografía y firmas digitales",
        "Protocolos de red para sincronización de tiempo",
      ],
      howItWorks: "Cómo Funciona:",
      howItWorksList: [
        "El tiempo Unix se almacena típicamente como un entero con signo de 32 o 64 bits",
        "Representa el número de segundos desde la época",
        "Los valores negativos representan tiempos anteriores a la época",
        "No tiene en cuenta los segundos intercalares, lo que puede llevar a discrepancias en cálculos precisos de tiempo",
      ],
      timeZones: "Zonas Horarias y Tiempo Unix",
      timeZonesText:
        "El tiempo Unix siempre está en UTC (Tiempo Universal Coordinado). Cuando se muestra el tiempo Unix en una zona horaria específica, es necesaria una conversión. Esto hace que el tiempo Unix sea particularmente útil para almacenar y comparar tiempos en diferentes zonas horarias.",
      bestPractices: "Mejores Prácticas",
      bestPracticesList: [
        "Siempre almacene las marcas de tiempo en UTC/tiempo Unix",
        "Convierta a hora local solo cuando se muestre a los usuarios",
        "Tenga en cuenta el horario de verano al convertir el tiempo Unix a hora local",
        "Use enteros de 64 bits para marcas de tiempo Unix para evitar el problema del año 2038",
        "Considere usar bibliotecas especializadas para operaciones complejas de fecha/hora",
      ],
      days: "días",
    },
    pt: {
      title: "O que é o Tempo Unix?",
      description:
        "O tempo Unix, também conhecido como tempo POSIX ou tempo Epoch, é um sistema para descrever um ponto no tempo. É o número de segundos que se passaram desde o Unix Epoch, que é 00:00:00 UTC em 1º de janeiro de 1970 (excluindo segundos bissextos). Essencialmente, é uma forma de rastrear o tempo como um total acumulado de segundos.",
      importance: "Importância e Aplicações",
      importanceList: [
        "Universalidade: Os carimbos de data/hora Unix são independentes de fusos horários, tornando-os ideais para aplicações globais.",
        "Simplicidade: São fáceis de armazenar como um único número inteiro e realizar cálculos de data/hora.",
        "Eficiência: Comparar dois carimbos de data/hora Unix é tão simples quanto comparar dois números.",
        "Padronização: Amplamente adotado na computação, tornando-se uma linguagem comum para representação de tempo em diferentes sistemas.",
      ],
      history: "Contexto Histórico",
      historyText:
        "O conceito de tempo Unix foi introduzido no início dos anos 1970 com o desenvolvimento do sistema operacional Unix nos Bell Labs. A escolha da época (1º de janeiro de 1970) foi arbitrária, baseada na conveniência para os desenvolvedores naquela época.",
      timeUnits: "Unidades de Tempo em Segundos",
      hour: "Hora",
      day: "Dia",
      week: "Semana",
      month: "Mês",
      year: "Ano",
      seconds: "Segundos",
      y2038: "O Problema do Ano 2038",
      y2038Description:
        "Em 19 de janeiro de 2038, às 03:14:07 UTC, sistemas de 32 bits usando tempo Unix experimentarão um estouro de inteiro. Isso é semelhante ao problema Y2K e é conhecido como o 'Problema do ano 2038' ou 'Y2038'. Após esse momento, esses sistemas não poderão codificar os tempos corretamente. A solução envolve migrar para carimbos de data/hora de 64 bits, que podem representar datas até o ano 292.277.026.596.",
      uses: "Usos Comuns do Tempo Unix:",
      usesList: [
        "Registro de eventos em sistemas de computador",
        "Sincronização de tempo em sistemas distribuídos",
        "Armazenamento de carimbos de data/hora em bancos de dados",
        "Sistemas de controle de versão para rastrear mudanças",
        "Criptografia e assinaturas digitais",
        "Protocolos de rede para sincronização de tempo",
      ],
      howItWorks: "Como Funciona:",
      howItWorksList: [
        "O tempo Unix é tipicamente armazenado como um inteiro com sinal de 32 ou 64 bits",
        "Representa o número de segundos desde a época",
        "Valores negativos representam tempos antes da época",
        "Não leva em conta segundos bissextos, o que pode levar a discrepâncias em cálculos precisos de tempo",
      ],
      timeZones: "Fusos Horários e Tempo Unix",
      timeZonesText:
        "O tempo Unix está sempre em UTC (Tempo Universal Coordenado). Ao exibir o tempo Unix em um fuso horário específico, é necessária uma conversão. Isso torna o tempo Unix particularmente útil para armazenar e comparar tempos em diferentes fusos horários.",
      bestPractices: "Melhores Práticas",
      bestPracticesList: [
        "Sempre armazene carimbos de data/hora em UTC/tempo Unix",
        "Converta para hora local apenas ao exibir para usuários",
        "Esteja ciente do horário de verão ao converter tempo Unix para hora local",
        "Use inteiros de 64 bits para carimbos de data/hora Unix para evitar o problema do ano 2038",
        "Considere usar bibliotecas especializadas para operações complexas de data/hora",
      ],
      days: "dias",
    },
  }

  const t = translations[language]

  return (
    <div className="description">
      <h2>{t.title}</h2>
      <p>{t.description}</p>

      <h3>{t.importance}</h3>
      <ul>
        {t.importanceList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h3>{t.history}</h3>
      <p>{t.historyText}</p>

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

      <h3>{t.timeZones}</h3>
      <p>{t.timeZonesText}</p>

      <h3>{t.bestPractices}</h3>
      <ul>
        {t.bestPracticesList.map((practice, index) => (
          <li key={index}>{practice}</li>
        ))}
      </ul>
    </div>
  )
}

export default Description

