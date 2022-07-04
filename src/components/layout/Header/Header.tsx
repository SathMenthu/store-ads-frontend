import React, { SyntheticEvent, useContext, useState } from "react";
import { Btn } from "../../common/Button/Btn";

import "./Header.css";
import { SearchContext } from "../../../contexts/search.context";

export const Header = () => {
  const { setSearch } = useContext(SearchContext);
  const [inputVal, setInputVal] = useState("");
  const setSearchFromLocalState = (e: SyntheticEvent) => {
    e.preventDefault();
    setSearch(inputVal);
  };

  return (
    <header>
      <h1>
        <strong>HEXEM</strong> Ogłoszenia
      </h1>
      <Btn to="/add" text={"Dodaj Ogłoszenie"} />
      <form className="search" onSubmit={setSearchFromLocalState}>
        <input
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          placeholder="Wpisz nazwę ogłoszenia..."
        />
        <Btn text={"Szukaj"} />
      </form>
    </header>
  );
};
