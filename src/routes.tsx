/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import Root from './routes/Root/Root';
import Home from './routes/Home/Home';

export const router = createBrowserRouter([
  {
    // le path correspond à l'url
    path: '/',
    // l'élément JSX à afficher sur cette page
    element: <Root />,

    // On peut imbriquer des routes
    // En fonction de certaines url, afficher certains composants enfants
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        // Sur l'url /category/react, on affichera cet élément.
        // Le composant de la route parente sera affiché aussi
        // Et on spécifiera à quel endroit dans le composant parent on affichera cet élément
        path: '/category/react',
        element: <div>Angular</div>,
      },
    ],
  },
]);
