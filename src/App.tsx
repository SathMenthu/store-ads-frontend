import React from "react";
import "./App.css";

export const App = () => {
  return (
    <>
      <header>
        <h1>
          <strong>HEXEM</strong> Ogłoszenia
        </h1>
        <button>Dodaj ogłoszenie</button>
        <div className="search">
          <input type="text" placeholder="Wpisz nazwę ogłoszenia..." />
          <button>Szukaj</button>
        </div>
      </header>
      <div className="container">...</div>
    </>
  );
};
