import React, { useState } from "react";
import { Header } from "./components/layout/Header/Header";
import { Container } from "./components/layout/Container/Container";
import { SearchContext } from "./contexts/search.context";

export const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <Header />
        <Container />
      </SearchContext.Provider>
    </>
  );
};
