# ![logo](/public/img/UnixTemp32.png) UnixTemp - Unix Timestamp Converter

<div align="end">
  <a href="README.es-latam.md">
    <img src="https://img.shields.io/badge/Versi%C3%B3n_en_Espa%C3%B1ol-009?style=for-the-badge&logo=googletranslate&logoColor=2af1f1" alt="Versión en Español">
  </a>
  <a href="README.pt-br.md">
    <img src="https://img.shields.io/badge/Vers%C3%A3o_em_Portugu%C3%AAs-009?style=for-the-badge&logo=googletranslate&logoColor=2af1f1" alt="Versão em Português">
  </a>
</div>

## 🌍 About

**UnixTemp** is a web application designed to convert Unix timestamps to human-readable dates and vice versa. It provides an intuitive interface with multiple conversion options, multilingual support, and a public API for integration across various programming languages.

## ✨ Features

✅ **Time Conversion:**  
  - From **Unix** to human-readable date formats  
  - From **dates** to **Unix**

✅ **Automatic Timezone Detection** with manual override

✅ **Public API** for programmatic conversion  
  - Send and receive timestamps with configurable formats  
  - Supports `UTC`, `ISO 8601`, `Readable`, etc.

✅ **Multilingual Support:**  
  - 🇺🇸 English (US)  
  - 🇪🇸 Spanish (Latam)  
  - 🇧🇷 Portuguese (BR)

✅ **Responsive Interface** for desktops and mobile devices

✅ **Comprehensive Documentation** with examples in **JavaScript, TypeScript, Python, Java, and Discord**

---

## 🛠️ Technologies Used

| Technology | Description |
|------------|-------------|
| ![React](https://img.shields.io/badge/-React-202EC7?style=for-the-badge&logo=react&logoColor=white) | Main library for the interface |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) | Strong typing for reliable code |
| ![SCSS](https://img.shields.io/badge/-SCSS-C76494?style=for-the-badge&logo=sass&logoColor=white) | Advanced styling for the UI |
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) | Backend for the API |
| ![Vercel](https://img.shields.io/badge/-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) | Deployment platform |
| ![VSCode](https://img.shields.io/badge/-VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white) | Primary code editor |
| ![JSON](https://img.shields.io/badge/-JSON-000000?style=for-the-badge&logo=json&logoColor=white) | Data format used in the API |

---

## 🔗 API

The API allows you to perform timestamp conversions programmatically.

### 🔹 **Usage Example**

```sh
GET https://api.unix-temp.vercel.app/convert?type=time&format={user.format}&value={user.value}
```

📌 **Parameters:**  
- `type=` **time** (to convert from Unix) or **unix** (to convert to Unix)  
- `format=` **utc**, **readable**, **iso8601**, **unix**  
- `value=` **timestamp or date**

📌 **Response:**  
```json
{
  "original": "1700000000",
  "converted": "2023-11-14T12:00:00Z",
  "format": "ISO 8601"
}
```

---

## 📬 Contact

If you have any questions, suggestions, or would like to contribute, please open an **issue** or contact:  
📧 **capriadeveloper@email.com**
