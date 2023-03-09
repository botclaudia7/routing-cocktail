import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Components/Root';
import Error from './Components/Error';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Drinks from './Components/Drinks';
import NewCocktail from './Components/NewCocktail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error/>,
    children:
      [
      //   { path: '/', element: <Home /> },
       { path: '/newcocktail', element: <NewCocktail/> },
       { path: '/drinks/:drinksId', element: <Drinks/> },
      // { path: '/contacts', element: <Contacts /> }
      ]
  },

]);

function App() {
  return (
    <>
      <Header/>
      <RouterProvider router={router} />
      <Footer/>
    </>
  );
}

export default App;
