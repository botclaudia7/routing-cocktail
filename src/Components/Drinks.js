import {useParams} from 'react-router-dom';
import React, { useState } from "react";

function Drinks(){

    const params = useParams();
    const [category, setCategory] = useState([]);

    fetchData(params);
    return(
        <>
        {
          category && category.length > 0 && category.map((categoryObj) => (
            <div className='items' key={categoryObj.idDrink}>
              <img className='image-section' key={categoryObj.idDrink} alt={categoryObj.strDrink} src={categoryObj.strDrinkThumb} />
              <div className='title-section' key={categoryObj.strDrinkThumb}>{categoryObj.strDrink}</div>
            </div>
          ))
        }
     </>
    );

    function fetchData(params) {
        setTimeout(() => {
            fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${params.drinksId}`)           
              .then((response) => response.json())
              .then((data) => setCategory(data.drinks))
              .catch((err) => console.log(err));
          }, 1000);
      }
}

export default Drinks;