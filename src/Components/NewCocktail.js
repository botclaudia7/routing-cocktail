import '../App.css';
import { useNavigate,Link} from "react-router-dom";

function NewCocktail() {

	const navigate = useNavigate();
	const goBack = () => {
		navigate(-1);
	}   
  return (
    <>
      <div className='new-cocktail' name='main-div'>
        <img className='new-cocktail-image' alt="tesgt" src='https://www.thecocktaildb.com/images/media/drink/qyyvtu1468878544.jpg' />
        <form className='form-cocktail' name='cocktail'>
          <input type='text' placeholder='Cocktail name' name='cocktailName' ></input>
          <input type='text' placeholder='Ingredient 1' name='cocktailIngredient1' ></input>
          <input type='text' placeholder='Ingredient 2' name='cocktailIngredient2'></input>
          <input type='number' placeholder='Quantity' name='cocktailQty' ></input>
          <button onClick={goBack}>Submit</button> 
          <Link to='..' relativ="path" >Back Relative</Link>
        <p></p>
        <Link to='..' relativ="route" >Back Relativ eRoute</Link>
        </form>
      </div>

    </>
  );
}

export default NewCocktail;




