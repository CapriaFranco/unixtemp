import type React from "react"
import { Copy } from "lucide-react"

interface JavaDocsProps {
  language: "en" | "es" | "pt"
}

const JavaDocs: React.FC<JavaDocsProps> = ({ language }) => {
  const translations = {
    en: {
      title: "Java Development",
      introduction:
        "Learn how to work with Unix timestamps in Java. This guide covers various operations and best practices for handling Unix time in your Java applications.",
      currentTimestamp: "Get Current Unix Timestamp",
      convertToDate: "Convert Unix Timestamp to Date",
      convertToUnix: "Convert Date to Unix Timestamp",
      formatUnixTimestamp: "Format Unix Timestamp",
      timezoneConversion: "Timezone Conversion",
      addingTime: "Adding Time to Unix Timestamp",
      subtractingTime: "Subtracting Time from Unix Timestamp",
      comparingTimestamps: "Comparing Unix Timestamps",
      databaseUsage: "Using Unix Timestamps in Databases",
    },
    es: {
      title: "Desarrollo en Java",
      introduction:
        "Aprende a trabajar con marcas de tiempo Unix en Java. Esta guía cubre varias operaciones y mejores prácticas para manejar el tiempo Unix en tus aplicaciones Java.",
      currentTimestamp: "Obtener la Marca de Tiempo Unix Actual",
      convertToDate: "Convertir Marca de Tiempo Unix a Fecha",
      convertToUnix: "Convertir Fecha a Marca de Tiempo Unix",
      formatUnixTimestamp: "Formatear Marca de Tiempo Unix",
      timezoneConversion: "Conversión de Zona Horaria",
      addingTime: "Agregar Tiempo a una Marca de Tiempo Unix",
      subtractingTime: "Restar Tiempo de una Marca de Tiempo Unix",
      comparingTimestamps: "Comparar Marcas de Tiempo Unix",
      databaseUsage: "Usar Marcas de Tiempo Unix en Bases de Datos",
    },
    pt: {
      title: "Desenvolvimento em Java",
      introduction:
        "Aprenda a trabalhar com carimbos de data/hora Unix em Java. Este guia abrange várias operações e melhores práticas para lidar com o tempo Unix em suas aplicações Java.",
      currentTimestamp: "Obter o Carimbo de Data/Hora Unix Atual",
      convertToDate: "Converter Carimbo de Data/Hora Unix para Data",
      convertToUnix: "Converter Data para Carimbo de Data/Hora Unix",
      formatUnixTimestamp: "Formatar Carimbo de Data/Hora Unix",
      timezoneConversion: "Conversão de Fuso Horário",
      addingTime: "Adicionar Tempo a um Carimbo de Data/Hora Unix",
      subtractingTime: "Subtrair Tempo de um Carimbo de Data/Hora Unix",
      comparingTimestamps: "Comparar Carimbos de Data/Hora Unix",
      databaseUsage: "Usar Carimbos de Data/Hora Unix em Bancos de Dados",
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
      <div className="section">
        <h2>{t.formatUnixTimestamp}</h2>
        <div className="code-block">
          <pre>
            <code>{`import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

long unixTimestamp = 1623456789L;
Instant instant = Instant.ofEpochSecond(unixTimestamp);
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
    .withZone(ZoneId.systemDefault());
String formattedDate = formatter.format(instant);
System.out.println(formattedDate);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

long unixTimestamp = 1623456789L;
Instant instant = Instant.ofEpochSecond(unixTimestamp);
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")
    .withZone(ZoneId.systemDefault());
String formattedDate = formatter.format(instant);
System.out.println(formattedDate);`)
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
            <code>{`import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

long unixTimestamp = 1623456789L;
Instant instant = Instant.ofEpochSecond(unixTimestamp);
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss z")
    .withZone(ZoneId.of("America/New_York"));
String formattedDate = formatter.format(instant);
System.out.println(formattedDate);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`import java.time.Instant;
import java.time.ZoneId;
import java.time.format.DateTimeFormatter;

long unixTimestamp = 1623456789L;
Instant instant = Instant.ofEpochSecond(unixTimestamp);
DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss z")
    .withZone(ZoneId.of("America/New_York"));
String formattedDate = formatter.format(instant);
System.out.println(formattedDate);`)
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
            <code>{`import java.time.Instant;
import java.time.temporal.ChronoUnit;

long unixTimestamp = 1623456789L;
Instant instant = Instant.ofEpochSecond(unixTimestamp);
Instant newInstant = instant.plus(24, ChronoUnit.HOURS);
long newUnixTimestamp = newInstant.getEpochSecond();
System.out.println(newUnixTimestamp);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`import java.time.Instant;
import java.time.temporal.ChronoUnit;

long unixTimestamp = 1623456789L;
Instant instant = Instant.ofEpochSecond(unixTimestamp);
Instant newInstant = instant.plus(24, ChronoUnit.HOURS);
long newUnixTimestamp = newInstant.getEpochSecond();
System.out.println(newUnixTimestamp);`)
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
            <code>{`import java.time.Instant;
import java.time.temporal.ChronoUnit;

long unixTimestamp = 1623456789L;
Instant instant = Instant.ofEpochSecond(unixTimestamp);
Instant newInstant = instant.minus(7, ChronoUnit.DAYS);
long newUnixTimestamp = newInstant.getEpochSecond();
System.out.println(newUnixTimestamp);`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`import java.time.Instant;
import java.time.temporal.ChronoUnit;

long unixTimestamp = 1623456789L;
Instant instant = Instant.ofEpochSecond(unixTimestamp);
Instant newInstant = instant.minus(7, ChronoUnit.DAYS);
long newUnixTimestamp = newInstant.getEpochSecond();
System.out.println(newUnixTimestamp);`)
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
            <code>{`long timestamp1 = 1623456789L;
long timestamp2 = 1623470000L;

if (timestamp1 < timestamp2) {
    System.out.println("timestamp1 is earlier than timestamp2");
} else if (timestamp1 > timestamp2) {
    System.out.println("timestamp1 is later than timestamp2");
} else {
    System.out.println("The timestamps are equal");
}

long differenceInSeconds = Math.abs(timestamp2 - timestamp1);
System.out.println("The difference is " + differenceInSeconds + " seconds");`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`long timestamp1 = 1623456789L;
long timestamp2 = 1623470000L;

if (timestamp1 < timestamp2) {
    System.out.println("timestamp1 is earlier than timestamp2");
} else if (timestamp1 > timestamp2) {
    System.out.println("timestamp1 is later than timestamp2");
} else {
    System.out.println("The timestamps are equal");
}

long differenceInSeconds = Math.abs(timestamp2 - timestamp1);
System.out.println("The difference is " + differenceInSeconds + " seconds");`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h2>{t.databaseUsage}</h2>
        <p>
          When working with databases, it's common to store Unix timestamps as long integers. Here's an example using
          JDBC:
        </p>
        <div className="code-block">
          <pre>
            <code>{`import java.sql.*;

// Inserting a Unix timestamp
long unixTimestamp = System.currentTimeMillis() / 1000L;
String insertSQL = "INSERT INTO events (event_name, event_time) VALUES (?, ?)";
try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
     PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {
    pstmt.setString(1, "Sample Event");
    pstmt.setLong(2, unixTimestamp);
    pstmt.executeUpdate();
}

// Retrieving and converting a Unix timestamp
String selectSQL = "SELECT event_name, event_time FROM events WHERE id = ?";
try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
     PreparedStatement pstmt = conn.prepareStatement(selectSQL)) {
    pstmt.setInt(1, 1);  // Assuming we're querying for the event with id 1
    try (ResultSet rs = pstmt.executeQuery()) {
        if (rs.next()) {
            String eventName = rs.getString("event_name");
            long eventTime = rs.getLong("event_time");
            Date date = new Date(eventTime * 1000L);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            System.out.println(eventName + " occurred at " + sdf.format(date));
        }
    }
}`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`import java.sql.*;

// Inserting a Unix timestamp
long unixTimestamp = System.currentTimeMillis() / 1000L;
String insertSQL = "INSERT INTO events (event_name, event_time) VALUES (?, ?)";
try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
     PreparedStatement pstmt = conn.prepareStatement(insertSQL)) {
    pstmt.setString(1, "Sample Event");
    pstmt.setLong(2, unixTimestamp);
    pstmt.executeUpdate();
}

// Retrieving and converting a Unix timestamp
String selectSQL = "SELECT event_name, event_time FROM events WHERE id = ?";
try (Connection conn = DriverManager.getConnection(DB_URL, USER, PASS);
     PreparedStatement pstmt = conn.prepareStatement(selectSQL)) {
    pstmt.setInt(1, 1);  // Assuming we're querying for the event with id 1
    try (ResultSet rs = pstmt.executeQuery()) {
        if (rs.next()) {
            String eventName = rs.getString("event_name");
            long eventTime = rs.getLong("event_time");
            Date date = new Date(eventTime * 1000L);
            SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
            System.out.println(eventName + " occurred at " + sdf.format(date));
        }
    }
}`)
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

