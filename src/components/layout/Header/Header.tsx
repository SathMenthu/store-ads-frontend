import React from "react";
import { Button } from "../../common/Button/Button";

import "./Header.css";

export const Header = () => (
  <header>
    <h1>
      <strong>HEXEM</strong> Ogłoszenia
    </h1>
    <Button text={"Dodaj ogłoszenie"} />
    <div className="search">
      <input type="text" placeholder="Wpisz nazwę ogłoszenia..." />
      <Button text={"Szukaj"} />
    </div>
  </header>
);
