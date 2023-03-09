import { Outlet } from "react-router-dom";
import Menu from "./Menu";
import Search from "./Search";

import React, { useEffect, useState } from "react";
import DisplayCategory from "./DisplayCategory";

function Root(){
    const [drinks, setDrinks] = useState([]);

    const fetchData = () => {
      return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
            .then((response) => response.json())
            .then((data) => setDrinks(data.drinks));
  
    }
    useEffect(() => {
        fetchData();
      },[])
    return<>
    <Menu drinks={drinks}></Menu>
    <Search></Search>
    <DisplayCategory/>
    <Outlet></Outlet>
    </>
}

export default Root;