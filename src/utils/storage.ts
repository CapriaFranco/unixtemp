export const getStoredLanguage = (): "en" | "es" | "pt" => {
    return (localStorage.getItem("language") as "en" | "es" | "pt") || "en"
  }
  
  export const setStoredLanguage = (language: "en" | "es" | "pt") => {
    localStorage.setItem("language", language)
  }
  
  