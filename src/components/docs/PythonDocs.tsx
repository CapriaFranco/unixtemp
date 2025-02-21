import type React from "react"
import { Copy } from "lucide-react"

interface PythonDocsProps {
  language: "en" | "es" | "pt"
}

const PythonDocs: React.FC<PythonDocsProps> = ({ language }) => {
  const translations = {
    en: {
      title: "Python Implementation",
      introduction:
        "Python provides robust support for working with Unix timestamps through its built-in modules and third-party libraries. This guide covers various operations and best practices for handling Unix time in your Python applications.",
      currentTimestamp: "Get Current Unix Timestamp",
      convertToDate: "Convert Unix Timestamp to Date",
      convertToUnix: "Convert Date to Unix Timestamp",
      formatUnixTimestamp: "Format Unix Timestamp",
      timezoneConversion: "Timezone Conversion",
      addingTime: "Adding Time to Unix Timestamp",
      subtractingTime: "Subtracting Time from Unix Timestamp",
      comparingTimestamps: "Comparing Unix Timestamps",
      databaseUsage: "Using Unix Timestamps in Databases",
      webFrameworks: "Unix Timestamps in Web Frameworks",
      bestPractices: "Best Practices",
      commonPitfalls: "Common Pitfalls",
    },
    es: {
      title: "Implementación en Python",
      introduction:
        "Python proporciona un sólido soporte para trabajar con marcas de tiempo Unix a través de sus módulos integrados y bibliotecas de terceros. Esta guía cubre varias operaciones y mejores prácticas para manejar el tiempo Unix en tus aplicaciones Python.",
      currentTimestamp: "Obtener la Marca de Tiempo Unix Actual",
      convertToDate: "Convertir Marca de Tiempo Unix a Fecha",
      convertToUnix: "Convertir Fecha a Marca de Tiempo Unix",
      formatUnixTimestamp: "Formatear Marca de Tiempo Unix",
      timezoneConversion: "Conversión de Zona Horaria",
      addingTime: "Agregar Tiempo a una Marca de Tiempo Unix",
      subtractingTime: "Restar Tiempo de una Marca de Tiempo Unix",
      comparingTimestamps: "Comparar Marcas de Tiempo Unix",
      databaseUsage: "Usar Marcas de Tiempo Unix en Bases de Datos",
      webFrameworks: "Marcas de Tiempo Unix en Frameworks Web",
      bestPractices: "Mejores Prácticas",
      commonPitfalls: "Errores Comunes",
    },
    pt: {
      title: "Implementação em Python",
      introduction:
        "Python fornece suporte robusto para trabalhar com carimbos de data/hora Unix através de seus módulos integrados e bibliotecas de terceiros. Este guia abrange várias operações e melhores práticas para lidar com o tempo Unix em suas aplicações Python.",
      currentTimestamp: "Obter o Carimbo de Data/Hora Unix Atual",
      convertToDate: "Converter Carimbo de Data/Hora Unix para Data",
      convertToUnix: "Converter Data para Carimbo de Data/Hora Unix",
      formatUnixTimestamp: "Formatar Carimbo de Data/Hora Unix",
      timezoneConversion: "Conversão de Fuso Horário",
      addingTime: "Adicionar Tempo a um Carimbo de Data/Hora Unix",
      subtractingTime: "Subtrair Tempo de um Carimbo de Data/Hora Unix",
      comparingTimestamps: "Comparar Carimbos de Data/Hora Unix",
      databaseUsage: "Usar Carimbos de Data/Hora Unix em Bancos de Dados",
      webFrameworks: "Carimbos de Data/Hora Unix em Frameworks Web",
      bestPractices: "Melhores Práticas",
      commonPitfalls: "Erros Comuns",
    },
  }

  const t = translations[language]

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
  }

  return (
    <div className="python-docs">
      <h1>{t.title}</h1>
      <div className="section">
        <p>{t.introduction}</p>
      </div>
      <div className="section">
        <h2>{t.currentTimestamp}</h2>
        <div className="code-block">
          <pre>
            <code>{`import time

# Get current Unix timestamp in seconds
current_unix_timestamp = int(time.time())
print(f"Current Unix timestamp: {current_unix_timestamp}")

# Get current Unix timestamp with microsecond precision
current_unix_timestamp_micro = time.time()
print(f"Current Unix timestamp (with microseconds): {current_unix_timestamp_micro}")

# Using datetime module
from datetime import datetime
current_unix_timestamp_datetime = int(datetime.now().timestamp())
print(f"Current Unix timestamp (using datetime): {current_unix_timestamp_datetime}")`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`import time

# Get current Unix timestamp in seconds
current_unix_timestamp = int(time.time())
print(f"Current Unix timestamp: {current_unix_timestamp}")

# Get current Unix timestamp with microsecond precision
current_unix_timestamp_micro = time.time()
print(f"Current Unix timestamp (with microseconds): {current_unix_timestamp_micro}")

# Using datetime module
from datetime import datetime
current_unix_timestamp_datetime = int(datetime.now().timestamp())
print(f"Current Unix timestamp (using datetime): {current_unix_timestamp_datetime}")`)
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
            <code>{`from datetime import datetime

unix_timestamp = 1623456789

# Convert to datetime object
date = datetime.fromtimestamp(unix_timestamp)
print(f"Converted date: {date.strftime('%Y-%m-%d %H:%M:%S')}")

# Convert to UTC datetime
date_utc = datetime.utcfromtimestamp(unix_timestamp)
print(f"Converted UTC date: {date_utc.strftime('%Y-%m-%d %H:%M:%S')} UTC")

# Using time module
import time
date_tuple = time.localtime(unix_timestamp)
formatted_date = time.strftime("%Y-%m-%d %H:%M:%S", date_tuple)
print(f"Formatted date using time module: {formatted_date}")`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`from datetime import datetime

unix_timestamp = 1623456789

# Convert to datetime object
date = datetime.fromtimestamp(unix_timestamp)
print(f"Converted date: {date.strftime('%Y-%m-%d %H:%M:%S')}")

# Convert to UTC datetime
date_utc = datetime.utcfromtimestamp(unix_timestamp)
print(f"Converted UTC date: {date_utc.strftime('%Y-%m-%d %H:%M:%S')} UTC")

# Using time module
import time
date_tuple = time.localtime(unix_timestamp)
formatted_date = time.strftime("%Y-%m-%d %H:%M:%S", date_tuple)
print(f"Formatted date using time module: {formatted_date}")`)
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
            <code>{`from datetime import datetime

# Convert current date to Unix timestamp
now = datetime.now()
unix_timestamp = int(now.timestamp())
print(f"Current date as Unix timestamp: {unix_timestamp}")

# Convert specific date to Unix timestamp
specific_date = datetime(2021, 6, 12, 0, 0)
specific_unix_timestamp = int(specific_date.timestamp())
print(f"Specific date as Unix timestamp: {specific_unix_timestamp}")

# Convert UTC date to Unix timestamp
from datetime import timezone
utc_date = datetime(2021, 6, 12, 0, 0, tzinfo=timezone.utc)
utc_unix_timestamp = int(utc_date.timestamp())
print(f"UTC date as Unix timestamp: {utc_unix_timestamp}")

# Using time module
import time
time_tuple = (2021, 6, 12, 0, 0, 0, 0, 0, 0)  # (year, month, day, hour, minute, second, weekday, yearday, isdst)
time_unix_timestamp = int(time.mktime(time_tuple))
print(f"Date as Unix timestamp using time module: {time_unix_timestamp}")`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`from datetime import datetime

# Convert current date to Unix timestamp
now = datetime.now()
unix_timestamp = int(now.timestamp())
print(f"Current date as Unix timestamp: {unix_timestamp}")

# Convert specific date to Unix timestamp
specific_date = datetime(2021, 6, 12, 0, 0)
specific_unix_timestamp = int(specific_date.timestamp())
print(f"Specific date as Unix timestamp: {specific_unix_timestamp}")

# Convert UTC date to Unix timestamp
from datetime import timezone
utc_date = datetime(2021, 6, 12, 0, 0, tzinfo=timezone.utc)
utc_unix_timestamp = int(utc_date.timestamp())
print(f"UTC date as Unix timestamp: {utc_unix_timestamp}")

# Using time module
import time
time_tuple = (2021, 6, 12, 0, 0, 0, 0, 0, 0)  # (year, month, day, hour, minute, second, weekday, yearday, isdst)
time_unix_timestamp = int(time.mktime(time_tuple))
print(f"Date as Unix timestamp using time module: {time_unix_timestamp}")`)
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
            <code>{`from datetime import datetime

unix_timestamp = 1623456789

# Basic formatting
date = datetime.fromtimestamp(unix_timestamp)
formatted_date = date.strftime("%Y-%m-%d %H:%M:%S")
print(f"Formatted date: {formatted_date}")

# Custom formatting
custom_format = date.strftime("%A, %B %d, %Y at %I:%M %p")
print(f"Custom formatted date: {custom_format}")

# ISO 8601 format
iso_format = date.isoformat()
print(f"ISO 8601 format: {iso_format}")

# Using locale-specific formatting
import locale
locale.setlocale(locale.LC_TIME, 'es_ES.UTF-8')  # Set locale to Spanish
spanish_format = date.strftime("%A, %d de %B de %Y a las %H:%M")
print(f"Spanish formatted date: {spanish_format}")

# Reset locale
locale.setlocale(locale.LC_TIME, '')

# Using third-party library: arrow
import arrow
arrow_date = arrow.get(unix_timestamp)
human_readable = arrow_date.humanize()
print(f"Human-readable format: {human_readable}")
specific_format = arrow_date.format('YYYY-MM-DD HH:mm:ss ZZ')
print(f"Specific format using arrow: {specific_format}")`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`from datetime import datetime

unix_timestamp = 1623456789

# Basic formatting
date = datetime.fromtimestamp(unix_timestamp)
formatted_date = date.strftime("%Y-%m-%d %H:%M:%S")
print(f"Formatted date: {formatted_date}")

# Custom formatting
custom_format = date.strftime("%A, %B %d, %Y at %I:%M %p")
print(f"Custom formatted date: {custom_format}")

# ISO 8601 format
iso_format = date.isoformat()
print(f"ISO 8601 format: {iso_format}")

# Using locale-specific formatting
import locale
locale.setlocale(locale.LC_TIME, 'es_ES.UTF-8')  # Set locale to Spanish
spanish_format = date.strftime("%A, %d de %B de %Y a las %H:%M")
print(f"Spanish formatted date: {spanish_format}")

# Reset locale
locale.setlocale(locale.LC_TIME, '')

# Using third-party library: arrow
import arrow
arrow_date = arrow.get(unix_timestamp)
human_readable = arrow_date.humanize()
print(f"Human-readable format: {human_readable}")
specific_format = arrow_date.format('YYYY-MM-DD HH:mm:ss ZZ')
print(f"Specific format using arrow: {specific_format}")`)
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
            <code>{`from datetime import datetime
import pytz

unix_timestamp = 1623456789

# Convert to UTC
utc_date = datetime.utcfromtimestamp(unix_timestamp)
print(f"UTC: {utc_date}")

# Convert to New York time
ny_tz = pytz.timezone('America/New_York')
ny_date = datetime.fromtimestamp(unix_timestamp, ny_tz)
print(f"New York: {ny_date}")

# Convert to Tokyo time
tokyo_tz = pytz.timezone('Asia/Tokyo')
tokyo_date = datetime.fromtimestamp(unix_timestamp, tokyo_tz)
print(f"Tokyo: {tokyo_date}")

# Convert between timezones
ny_to_tokyo = ny_date.astimezone(tokyo_tz)
print(f"New York time in Tokyo: {ny_to_tokyo}")

# Using dateutil for timezone handling
from dateutil import tz
from datetime import datetime

local_tz = tz.tzlocal()
utc_tz = tz.tzutc()

local_date = datetime.fromtimestamp(unix_timestamp)
utc_date = datetime.utcfromtimestamp(unix_timestamp)

local_to_utc = local_date.replace(tzinfo=local_tz).astimezone(utc_tz)
print(f"Local time converted to UTC: {local_to_utc}")`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`from datetime import datetime
import pytz

unix_timestamp = 1623456789

# Convert to UTC
utc_date = datetime.utcfromtimestamp(unix_timestamp)
print(f"UTC: {utc_date}")

# Convert to New York time
ny_tz = pytz.timezone('America/New_York')
ny_date = datetime.fromtimestamp(unix_timestamp, ny_tz)
print(f"New York: {ny_date}")

# Convert to Tokyo time
tokyo_tz = pytz.timezone('Asia/Tokyo')
tokyo_date = datetime.fromtimestamp(unix_timestamp, tokyo_tz)
print(f"Tokyo: {tokyo_date}")

# Convert between timezones
ny_to_tokyo = ny_date.astimezone(tokyo_tz)
print(f"New York time in Tokyo: {ny_to_tokyo}")

# Using dateutil for timezone handling
from dateutil import tz
from datetime import datetime

local_tz = tz.tzlocal()
utc_tz = tz.tzutc()

local_date = datetime.fromtimestamp(unix_timestamp)
utc_date = datetime.utcfromtimestamp(unix_timestamp)

local_to_utc = local_date.replace(tzinfo=local_tz).astimezone(utc_tz)
print(f"Local time converted to UTC: {local_to_utc}")`)
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
            <code>{`from datetime import datetime, timedelta

unix_timestamp = 1623456789
date = datetime.fromtimestamp(unix_timestamp)

# Add 24 hours
new_date = date + timedelta(hours=24)
new_unix_timestamp = int(new_date.timestamp())
print(f"Original timestamp: {unix_timestamp}")
print(f"New timestamp (24 hours later): {new_unix_timestamp}")

# Add 1 month (approximately)
one_month_later = date + timedelta(days=30)
one_month_later_timestamp = int(one_month_later.timestamp())
print(f"Timestamp 1 month later: {one_month_later_timestamp}")

# Add 1 year
one_year_later = date.replace(year=date.year + 1)
one_year_later_timestamp = int(one_year_later.timestamp())
print(f"Timestamp 1 year later: {one_year_later_timestamp}")

# Using dateutil for more precise month and year additions
from dateutil.relativedelta import relativedelta

exact_one_month_later = date + relativedelta(months=1)
exact_one_month_later_timestamp = int(exact_one_month_later.timestamp())
print(f"Exact timestamp 1 month later: {exact_one_month_later_timestamp}")

exact_one_year_later = date + relativedelta(years=1)
exact_one_year_later_timestamp = int(exact_one_year_later.timestamp())
print(f"Exact timestamp 1 year later: {exact_one_year_later_timestamp}")`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`from datetime import datetime, timedelta

unix_timestamp = 1623456789
date = datetime.fromtimestamp(unix_timestamp)

# Add 24 hours
new_date = date + timedelta(hours=24)
new_unix_timestamp = int(new_date.timestamp())
print(f"Original timestamp: {unix_timestamp}")
print(f"New timestamp (24 hours later): {new_unix_timestamp}")

# Add 1 month (approximately)
one_month_later = date + timedelta(days=30)
one_month_later_timestamp = int(one_month_later.timestamp())
print(f"Timestamp 1 month later: {one_month_later_timestamp}")

# Add 1 year
one_year_later = date.replace(year=date.year + 1)
one_year_later_timestamp = int(one_year_later.timestamp())
print(f"Timestamp 1 year later: {one_year_later_timestamp}")

# Using dateutil for more precise month and year additions
from dateutil.relativedelta import relativedelta

exact_one_month_later = date + relativedelta(months=1)
exact_one_month_later_timestamp = int(exact_one_month_later.timestamp())
print(f"Exact timestamp 1 month later: {exact_one_month_later_timestamp}")

exact_one_year_later = date + relativedelta(years=1)
exact_one_year_later_timestamp = int(exact_one_year_later.timestamp())
print(f"Exact timestamp 1 year later: {exact_one_year_later_timestamp}")`)
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
            <code>{`from datetime import datetime, timedelta

unix_timestamp = 1623456789
date = datetime.fromtimestamp(unix_timestamp)

# Subtract 7 days
seven_days_ago = date - timedelta(days=7)
seven_days_ago_timestamp = int(seven_days_ago.timestamp())
print(f"Original timestamp: {unix_timestamp}")
print(f"Timestamp 7 days ago: {seven_days_ago_timestamp}")

# Subtract 1 month (approximately)
one_month_ago = date - timedelta(days=30)
one_month_ago_timestamp = int(one_month_ago.timestamp())
print(f"Timestamp 1 month ago: {one_month_ago_timestamp}")

# Subtract 1 year
one_year_ago = date.replace(year=date.year - 1)
one_year_ago_timestamp = int(one_year_ago.timestamp())
print(f"Timestamp 1 year ago: {one_year_ago_timestamp}")

# Using dateutil for more precise month and year subtractions
from dateutil.relativedelta import relativedelta

exact_one_month_ago = date - relativedelta(months=1)
exact_one_month_ago_timestamp = int(exact_one_month_ago.timestamp())
print(f"Exact timestamp 1 month ago: {exact_one_month_ago_timestamp}")

exact_one_year_ago = date - relativedelta(years=1)
exact_one_year_ago_timestamp = int(exact_one_year_ago.timestamp())
print(f"Exact timestamp 1 year ago: {exact_one_year_ago_timestamp}")`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`from datetime import datetime, timedelta

unix_timestamp = 1623456789
date = datetime.fromtimestamp(unix_timestamp)

# Subtract 7 days
seven_days_ago = date - timedelta(days=7)
seven_days_ago_timestamp = int(seven_days_ago.timestamp())
print(f"Original timestamp: {unix_timestamp}")
print(f"Timestamp 7 days ago: {seven_days_ago_timestamp}")

# Subtract 1 month (approximately)
one_month_ago = date - timedelta(days=30)
one_month_ago_timestamp = int(one_month_ago.timestamp())
print(f"Timestamp 1 month ago: {one_month_ago_timestamp}")

# Subtract 1 year
one_year_ago = date.replace(year=date.year - 1)
one_year_ago_timestamp = int(one_year_ago.timestamp())
print(f"Timestamp 1 year ago: {one_year_ago_timestamp}")

# Using dateutil for more precise month and year subtractions
from dateutil.relativedelta import relativedelta

exact_one_month_ago = date - relativedelta(months=1)
exact_one_month_ago_timestamp = int(exact_one_month_ago.timestamp())
print(f"Exact timestamp 1 month ago: {exact_one_month_ago_timestamp}")

exact_one_year_ago = date - relativedelta(years=1)
exact_one_year_ago_timestamp = int(exact_one_year_ago.timestamp())
print(f"Exact timestamp 1 year ago: {exact_one_year_ago_timestamp}")`)
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
            <code>{`from datetime import datetime, timedelta

timestamp1 = 1623456789
timestamp2 = 1623470000

# Basic comparison
if timestamp1 < timestamp2:
    print("timestamp1 is earlier than timestamp2")
elif timestamp1 > timestamp2:
    print("timestamp1 is later than timestamp2")
else:
    print("The timestamps are equal")

# Calculate the difference
difference_in_seconds = abs(timestamp2 - timestamp1)
print(f"The difference is {difference_in_seconds} seconds")

# Convert the difference to a timedelta for easier manipulation
time_difference = timedelta(seconds=difference_in_seconds)
days = time_difference.days
hours, remainder = divmod(time_difference.seconds, 3600)
minutes, seconds = divmod(remainder, 60)

print(f"Difference: {days} days, {hours} hours, {minutes} minutes, {seconds} seconds")

# Compare dates instead of timestamps
date1 = datetime.fromtimestamp(timestamp1)
date2 = datetime.fromtimestamp(timestamp2)

if date1 < date2:
    print("date1 is earlier than date2")
elif date1 > date2:
    print("date1 is later than date2")
else:
    print("The dates are equal")

# Calculate the difference using dateutil
from dateutil.relativedelta import relativedelta

date_diff = relativedelta(date2, date1)
print(f"Precise difference: {date_diff.years} years, {date_diff.months} months, {date_diff.days} days, {date_diff.hours} hours, {date_diff.minutes} minutes, {date_diff.seconds} seconds")`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`from datetime import datetime, timedelta

timestamp1 = 1623456789
timestamp2 = 1623470000

# Basic comparison
if timestamp1 < timestamp2:
    print("timestamp1 is earlier than timestamp2")
elif timestamp1 > timestamp2:
    print("timestamp1 is later than timestamp2")
else:
    print("The timestamps are equal")

# Calculate the difference
difference_in_seconds = abs(timestamp2 - timestamp1)
print(f"The difference is {difference_in_seconds} seconds")

# Convert the difference to a timedelta for easier manipulation
time_difference = timedelta(seconds=difference_in_seconds)
days = time_difference.days
hours, remainder = divmod(time_difference.seconds, 3600)
minutes, seconds = divmod(remainder, 60)

print(f"Difference: {days} days, {hours} hours, {minutes} minutes, {seconds} seconds")

# Compare dates instead of timestamps
date1 = datetime.fromtimestamp(timestamp1)
date2 = datetime.fromtimestamp(timestamp2)

if date1 < date2:
    print("date1 is earlier than date2")
elif date1 > date2:
    print("date1 is later than date2")
else:
    print("The dates are equal")

# Calculate the difference using dateutil
from dateutil.relativedelta import relativedelta

date_diff = relativedelta(date2, date1)
print(f"Precise difference: {date_diff.years} years, {date_diff.months} months, {date_diff.days} days, {date_diff.hours} hours, {date_diff.minutes} minutes, {date_diff.seconds} seconds")`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h2>{t.databaseUsage}</h2>
        <p>
          When working with databases in Python, it's common to use Unix timestamps. Here's an example using SQLite:
        </p>
        <div className="code-block">
          <pre>
            <code>{`import sqlite3
import time
from datetime import datetime

# Connect to the database (or create it if it doesn't exist)
conn = sqlite3.connect('events.db')
cursor = conn.cursor()

# Create a table to store events
cursor.execute('''
CREATE TABLE IF NOT EXISTS events
(id INTEGER PRIMARY KEY, event_name TEXT, event_time INTEGER)
''')

# Insert an event with the current Unix timestamp
current_time = int(time.time())
cursor.execute("INSERT INTO events (event_name, event_time) VALUES (?, ?)",
               ("Sample Event", current_time))

# Commit the changes
conn.commit()

# Retrieve and display events
cursor.execute("SELECT * FROM events")
for row in cursor.fetchall():
    event_id, event_name, event_time = row
    event_date = datetime.fromtimestamp(event_time)
    print(f"Event ID: {event_id}, Name: {event_name}, Time: {event_date}")

# Close the connection
conn.close()`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`import sqlite3
import time
from datetime import datetime

# Connect to the database (or create it if it doesn't exist)
conn = sqlite3.connect('events.db')
cursor = conn.cursor()

# Create a table to store events
cursor.execute('''
CREATE TABLE IF NOT EXISTS events
(id INTEGER PRIMARY KEY, event_name TEXT, event_time INTEGER)
''')

# Insert an event with the current Unix timestamp
current_time = int(time.time())
cursor.execute("INSERT INTO events (event_name, event_time) VALUES (?, ?)",
               ("Sample Event", current_time))

# Commit the changes
conn.commit()

# Retrieve and display events
cursor.execute("SELECT * FROM events")
for row in cursor.fetchall():
    event_id, event_name, event_time = row
    event_date = datetime.fromtimestamp(event_time)
    print(f"Event ID: {event_id}, Name: {event_name}, Time: {event_date}")

# Close the connection
conn.close()`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
      <div className="section">
        <h2>{t.webFrameworks}</h2>
        <p>Unix timestamps are often used in web frameworks. Here's an example using Flask:</p>
        <div className="code-block">
          <pre>
            <code>{`from flask import Flask, jsonify
import time
from datetime import datetime

app = Flask(__name__)

@app.route('/current_time')
def get_current_time():
    current_timestamp = int(time.time())
    current_datetime = datetime.fromtimestamp(current_timestamp)
    return jsonify({
        'unix_timestamp': current_timestamp,
        'formatted_time': current_datetime.strftime('%Y-%m-%d %H:%M:%S')
    })

@app.route('/convert/<int:unix_timestamp>')
def convert_timestamp(unix_timestamp):
    try:
        converted_datetime = datetime.fromtimestamp(unix_timestamp)
        return jsonify({
            'unix_timestamp': unix_timestamp,
            'formatted_time': converted_datetime.strftime('%Y-%m-%d %H:%M:%S')
        })
    except ValueError:
        return jsonify({'error': 'Invalid Unix timestamp'}), 400

if __name__ == '__main__':
    app.run(debug=True)`}</code>
          </pre>
          <button
            className="copy-button"
            onClick={() =>
              copyToClipboard(`from flask import Flask, jsonify
import time
from datetime import datetime

app = Flask(__name__)

@app.route('/current_time')
def get_current_time():
    current_timestamp = int(time.time())
    current_datetime = datetime.fromtimestamp(current_timestamp)
    return jsonify({
        'unix_timestamp': current_timestamp,
        'formatted_time': current_datetime.strftime('%Y-%m-%d %H:%M:%S')
    })

@app.route('/convert/<int:unix_timestamp>')
def convert_timestamp(unix_timestamp):
    try:
        converted_datetime = datetime.fromtimestamp(unix_timestamp)
        return jsonify({
            'unix_timestamp': unix_timestamp,
            'formatted_time': converted_datetime.strftime('%Y-%m-%d %H:%M:%S')
        })
    except ValueError:
        return jsonify({'error': 'Invalid Unix timestamp'}), 400

if __name__ == '__main__':
    app.run(debug=True)`)
            }
          >
            <Copy size={16} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default PythonDocs

