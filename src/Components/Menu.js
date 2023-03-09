import { Link } from "react-router-dom";
import React from "react";
function Menu({ drinks }){
    return(
    <>
    <header>
    <ul className='menu'>
          {
            drinks && drinks.length > 0 && drinks.map((drinksObj) => (
            <>
            <li key={drinksObj.strCategory}>
              <Link to ={'drinks/' + drinksObj.strCategory}>{drinksObj.strCategory}
              </Link>
            </li>
            </>
            ))
          }
        </ul>
    </header>
     </>
    );

}

export default Menu;