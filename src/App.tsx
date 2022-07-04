import React, { useState } from "react";
import { Header } from "./components/layout/Header/Header";
import { Container } from "./components/layout/Container/Container";
import { SearchContext } from "./contexts/search.context";
import { Routes, Route } from "react-router-dom";
import { AddForm } from "./components/common/AdForm/AdForm";

export const App = () => {
  const [search, setSearch] = useState("");

  return (
    <>
      <SearchContext.Provider value={{ search, setSearch }}>
        <Header />
        <Routes>
          <Route path={"/add"} element={<AddForm />} />
          <Route path={"/"} element={<Container />} />
        </Routes>
      </SearchContext.Provider>
    </>
  );
};
