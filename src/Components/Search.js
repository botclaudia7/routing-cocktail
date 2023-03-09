import '../App.css';
import React,{  useEffect } from "react";
import {  useNavigate } from "react-router-dom";

function Search({ selectedCategory }) {
    useEffect(() => { }, [selectedCategory]);
    const nav = useNavigate();
    const onNavigate= () => {
        nav("/newcocktail");
    };
    return (
      <>
       <button onClick={onNavigate}>Create Cocktail</button>
        <input className='search-item' type="text"
          id="message"
          name="message"
          placeholder="Search by name"
        />
      </>
    );
}

export default Search;


