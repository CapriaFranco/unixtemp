# ![logo](/public/img/UnixTemp32.png) UnixTemp - Conversor de Marca de Tiempo Unix  

<div align="end">
  <a href="README.md">
    <img src="https://img.shields.io/badge/English_Version-009?style=for-the-badge&logo=googletranslate&logoColor=2af1f1" alt="English Version">
  </a>
  <a href="README.pt-br.md">
    <img src="https://img.shields.io/badge/Vers%C3%A3o_em_Portugu%C3%AAs-009?style=for-the-badge&logo=googletranslate&logoColor=2af1f1" alt="Versão em Português">
  </a>
</div>  

## 🌍 Acerca de  

**UnixTemp** es una aplicación web diseñada para convertir marcas de tiempo Unix a fechas legibles y viceversa. Proporciona una interfaz intuitiva con múltiples opciones de conversión, soporte para varios idiomas y una API para integración en diferentes lenguajes de programación.  

## ✨ Características  

✅ **Conversión de tiempo:**  
  - De **Unix** a formatos de fecha legibles  
  - De **fechas** a **Unix**  

✅ **Configuración automática de zona horaria** con opción manual  

✅ **API pública** para conversión programática  
  - Envío y recepción de marcas de tiempo con formato configurable  
  - Soporte para `UTC`, `ISO 8601`, `Legible`, etc.  

✅ **Soporte multilingüe**:  
  - 🇺🇸 Inglés(US)  
  - 🇪🇸 Español(Latam)  
  - 🇧🇷 Portugués(BR)  

✅ **Interfaz responsiva** para PC y móviles  

✅ **Documentación completa** con ejemplos en **JavaScript, TypeScript, Python, Java y Discord**  

---

## 🛠️ Tecnologías Utilizadas  

| Tecnología | Descripción |
|------------|-------------|
| ![React](https://img.shields.io/badge/-React-202EC7?style=for-the-badge&logo=react&logoColor=white) | Librería principal para la interfaz |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) | Tipado fuerte para el código |
| ![SCSS](https://img.shields.io/badge/-SCSS-C76494?style=for-the-badge&logo=sass&logoColor=white) | Estilos avanzados para la UI |
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) | Backend para la API |
| ![Vercel](https://img.shields.io/badge/-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) | Plataforma de despliegue |
| ![VSCode](https://img.shields.io/badge/-VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white) | Editor de código principal |
| ![JSON](https://img.shields.io/badge/-JSON-000000?style=for-the-badge&logo=json&logoColor=white) | Formato de datos utilizado en la API |

---

## 🔗 API  

La API permite realizar conversiones de marcas de tiempo de forma programática.  

### 🔹 **Ejemplo de uso**  

```sh
'GET https://api.unix-temp.vercel.app/convert?type=time&format={user.format}&value={user.value}'
```

📌 **Parámetros:**  
- `type=` **time** (para convertir desde Unix) o **unix** (para convertir a Unix)  
- `format=` **utc**, **legible**, **iso8601**, **unix**  
- `value=` **marca de tiempo o fecha**  

📌 **Respuesta:**  
```json
{
  "original": "1700000000",
  "converted": "2023-11-14T12:00:00Z",
  "format": "ISO 8601"
}
```

---

## 📬 Contacto  

Si tienes dudas, sugerencias o quieres contribuir, abre un **issue** o contacta a:  
📧 **capriadeveloper@email.com**  


