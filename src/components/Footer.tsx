import type React from "react"
import { Heart, Github } from "lucide-react"
import { ShoppingCartIcon as Paypal } from "lucide-react"

interface FooterProps {
  language: "en" | "es" | "pt"
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const translations = {
    en: {
      copyright: "Created with",
      by: "by",
      support: "Support the project",
    },
    es: {
      copyright: "Creado con",
      by: "por",
      support: "Apoyar el proyecto",
    },
    pt: {
      copyright: "Criado com",
      by: "por",
      support: "Apoiar o projeto",
    },
  }

  const t = translations[language]

  return (
    <footer>
      <div className="footer-content">
        <div className="copyright noselect">
          <div>
            <span>{t.copyright}</span>
            <Heart className="icon" color="#ff4136" />
            <span>{t.by}</span>
          </div>
          <div className="social-links">
            <a href="https://www.instagram.com/capria_franco" target="_blank" rel="noopener noreferrer">
              @capria_franco
            </a>
            <a href="https://github.com/capriafranco" target="_blank" rel="noopener noreferrer">
              <Github className="icon" />
              capriafranco
            </a>
          </div>
        </div>
        <div className="donate noselect">
          <a href="https://www.paypal.me/yusfix" target="_blank" rel="noopener noreferrer">
            <Paypal className="icon" />
            {t.support}
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer

