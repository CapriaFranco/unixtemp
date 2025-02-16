import type React from "react"
import { Copy } from "lucide-react"

interface JavaDocsProps {
  language: "en" | "es" | "pt"
}

const JavaDocs: React.FC<JavaDocsProps> = ({ language }) => {
  const translations = {
    en: {
      title: "Java Development",
      introduction: "Learn how to work with Unix timestamps in Java.",
      currentTimestamp: "Get Current Unix Timestamp",
      convertToDate: "Convert Unix Timestamp to Date",
      convertToUnix: "Convert Date to Unix Timestamp",
    },
    es: {
      title: "Desarrollo en Java",
      introduction: "Aprende a trabajar con marcas de tiempo Unix en Java.",
      currentTimestamp: "Obtener la Marca de Tiempo Unix Actual",
      convertToDate: "Convertir Marca de Tiempo Unix a Fecha",
      convertToUnix: "Convertir Fecha a Marca de Tiempo Unix",
    },
    pt: {
      title: "Desenvolvimento em Java",
      introduction: "Aprenda a trabalhar com carimbos de data/hora Unix em Java.",
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
    <div className="java-docs">
      <h1>{t.title}</h1>
      <div className="section">
        <p>{t.introduction}</p>
      </div>
      <div className="section">
        <h2>{t.currentTimestamp}</h2>
        <div className="code-block">
          <pre>
            <code>{`long currentUnixTimestamp = System.currentTimeMillis() / 1000L;
System.out.println(currentUnixTimestamp);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`long currentUnixTimestamp = System.currentTimeMillis() / 1000L;
System.out.println(currentUnixTimestamp);`)
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
            <code>{`import java.util.Date;
import java.text.SimpleDateFormat;

long unixTimestamp = 1623456789L;
Date date = new Date(unixTimestamp * 1000L);
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
String formattedDate = sdf.format(date);
System.out.println(formattedDate);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`import java.util.Date;
import java.text.SimpleDateFormat;

long unixTimestamp = 1623456789L;
Date date = new Date(unixTimestamp * 1000L);
SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
String formattedDate = sdf.format(date);
System.out.println(formattedDate);`)
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
            <code>{`import java.time.LocalDateTime;
import java.time.ZoneOffset;

LocalDateTime date = LocalDateTime.of(2021, 6, 12, 0, 0);
long unixTimestamp = date.toEpochSecond(ZoneOffset.UTC);
System.out.println(unixTimestamp);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`import java.time.LocalDateTime;
import java.time.ZoneOffset;

LocalDateTime date = LocalDateTime.of(2021, 6, 12, 0, 0);
long unixTimestamp = date.toEpochSecond(ZoneOffset.UTC);
System.out.println(unixTimestamp);`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default JavaDocs

