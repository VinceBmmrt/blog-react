/* eslint-disable import/prefer-default-export */
import { createBrowserRouter } from 'react-router-dom';
import App from './components/App/App';

export const router = createBrowserRouter([
  {
    // le path correspond à l'url
    path: '/',
    // l'élément JSX à afficher sur cette page
    element: <App />,

    // On peut imbriquer des routes
    // En fonction de certaines url, afficher certains composants enfants
    children: [
      {
        // Sur l'url /category/react, on affichera cet élément.
        // Le composant de la route parente sera affiché aussi
        // Et on spécifiera à quel endroit dans le composant parent on affichera cet élément
        path: '/category/angular',
        element: <div>Angular</div>,
      },
      {
        path: '/category/react',
        element: <div>React</div>,
      },
    ],
  },
]);
