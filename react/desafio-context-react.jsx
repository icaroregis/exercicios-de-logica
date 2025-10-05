//preciso de ajuda neste desafio
//implemente o contexto React para que o botão alterne entre as linguagens de programação favoritas "javascript" e "python"
//o parágrafo deve exibir a linguagem favorita atual
//você pode usar useState, useContext, createContext
//o estado inicial da linguagem favorita deve ser null

import React, { useState, useContext, createContext } from 'react';
import { createRoot } from 'react-dom/client';

// Definimos as linguagens disponíveis
const languages = ['javascript', 'python'];

// Criamos o contexto com valor padrão
const FavoriteLanguageContext = createContext({
  favoriteLanguage: null,
  toggleLanguage: () => {}
});

// Componente MainSection - definido ANTES de ser usado
function MainSection() {
  const { favoriteLanguage, toggleLanguage } = useContext(FavoriteLanguageContext);

  return (
    <div>
      <p id="favoriteLanguage">favorite programming language: {favoriteLanguage || 'null'}</p>
      <button
        id="changeLanguage"
        onClick={toggleLanguage}>
        toggle language
      </button>
    </div>
  );
}

// Provider component
function FavoriteLanguageProvider({ children }) {
  const [favoriteLanguage, setFavoriteLanguage] = useState(null);

  const toggleLanguage = () => {
    if (favoriteLanguage === null) {
      setFavoriteLanguage(languages[0]);
    } else if (favoriteLanguage === languages[0]) {
      setFavoriteLanguage(languages[1]);
    } else {
      setFavoriteLanguage(languages[0]);
    }
  };

  return (
    <FavoriteLanguageContext.Provider value={{ favoriteLanguage, toggleLanguage }}>
      {children}
    </FavoriteLanguageContext.Provider>
  );
}

// Componente App principal
function App() {
  return (
    <FavoriteLanguageProvider>
      <MainSection />
    </FavoriteLanguageProvider>
  );
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);
