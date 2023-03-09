import '../App.css';
import {useParams} from 'react-router-dom';

function DisplayCategory() {
    const params = useParams();
    console.log(params); 
    return (
      <>
        <h2>
          <span>
            {params.drinksId}
          </span>
        </h2>
      </>
    );
 

}

export default DisplayCategory;


