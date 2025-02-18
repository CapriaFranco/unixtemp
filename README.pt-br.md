# ![logo](/public/img/UnixTemp32.png) UnixTemp - Conversor de Timestamp Unix

<div align="end">
  <a href="README.md">
    <img src="https://img.shields.io/badge/English_Version-009?style=for-the-badge&logo=googletranslate&logoColor=2af1f1" alt="English Version">
  </a>
  <a href="README.es-latam.md">
    <img src="https://img.shields.io/badge/Versi%C3%B3n_en_Espa%C3%B1ol-009?style=for-the-badge&logo=googletranslate&logoColor=2af1f1" alt="Versión en Español">
  </a>
</div>

## 🌍 Sobre

**UnixTemp** é uma aplicação web projetada para converter timestamps Unix em datas legíveis e vice-versa. Ela oferece uma interface intuitiva com múltiplas opções de conversão, suporte multilíngue e uma API pública para integração em diferentes linguagens de programação.

## ✨ Recursos

✅ **Conversão de tempo:**  
  - De **Unix** para formatos de data legíveis  
  - De **datas** para **Unix**

✅ **Detecção automática de fuso horário** com opção de ajuste manual

✅ **API pública** para conversão programática  
  - Envio e recebimento de timestamps com formato configurável  
  - Suporte para `UTC`, `ISO 8601`, `Legível`, etc.

✅ **Suporte Multilíngue:**  
  - 🇺🇸 Inglês (US)  
  - 🇪🇸 Espanhol (Latam)  
  - 🇧🇷 Português (BR)

✅ **Interface Responsiva** para desktops e dispositivos móveis

✅ **Documentação Completa** com exemplos em **JavaScript, TypeScript, Python, Java e Discord**

---

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-------------|
| ![React](https://img.shields.io/badge/-React-202EC7?style=for-the-badge&logo=react&logoColor=white) | Biblioteca principal para a interface |
| ![TypeScript](https://img.shields.io/badge/-TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white) | Tipagem forte para o código |
| ![SCSS](https://img.shields.io/badge/-SCSS-C76494?style=for-the-badge&logo=sass&logoColor=white) | Estilos avançados para a interface |
| ![Node.js](https://img.shields.io/badge/-Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white) | Backend para a API |
| ![Vercel](https://img.shields.io/badge/-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white) | Plataforma de deployment |
| ![VSCode](https://img.shields.io/badge/-VS_Code-007ACC?style=for-the-badge&logo=visualstudiocode&logoColor=white) | Editor de código principal |
| ![JSON](https://img.shields.io/badge/-JSON-000000?style=for-the-badge&logo=json&logoColor=white) | Formato de dados utilizado na API |

---

## 🔗 API

A API permite realizar conversões de timestamps de forma programática.

### 🔹 **Exemplo de Uso**

```sh
GET https://api.unix-temp.vercel.app/convert?type=time&format={user.format}&value={user.value}
```

📌 **Parâmetros:**  
- `type=` **time** (para converter de Unix) ou **unix** (para converter para Unix)  
- `format=` **utc**, **legível**, **iso8601**, **unix**  
- `value=` **timestamp ou data**

📌 **Resposta:**  
```json
{
  "original": "1700000000",
  "converted": "2023-11-14T12:00:00Z",
  "format": "ISO 8601"
}
```

---

## 📬 Contato

Se você tiver dúvidas, sugestões ou quiser contribuir, abra um **issue** ou entre em contato:  
📧 **capriadeveloper@email.com**