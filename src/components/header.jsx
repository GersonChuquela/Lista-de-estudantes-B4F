
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { NavBar } from "./nav-bar";

export const Header = () => {
  const [setSearchParams] = useSearchParams();

  function handleSearchForm(e) {
    e.preventDefault();
    const searchString = e.target.search.value;
    setSearchParams({ search: searchString });
  }

  return (
    <header className="flex w-full h-16  bg-green-200 items-center justify-between text-lg ">
      <form onSubmit={handleSearchForm} className="">
        <input
          type="search"
          name="search"
          placeholder="Encontre o estudante"
          className="flex relative ml-6 justify-center items-center p-1 text-base rounded-2xl border border-black"/>
      </form>
      <section className="flex gap-10 mr-8">
      <NavBar />
      </section>
    </header>
  
  
   );
};

export default Header
