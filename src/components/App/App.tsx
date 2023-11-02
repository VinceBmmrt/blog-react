import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import './App.scss';

import categoriesData from '../../data/categories';
import postsData from '../../data/posts';
import Spinner from '../Spinner/Spinner';
import { Post } from '../../@types/post';

function App() {
  const [zenMode, setZenMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [posts, setPosts] = useState<Post[]>([]);

  // But :
  // Au chargement de ma page, je veux aller récupérer les données conernant les posts depuis un API
  // Pour faire une axios au chargement de ma page je vais utiliser `useEffect`
  // Pour indiquer à useEffect que mon action est uniquement au chargement de ma page, je met un tableau de dépendence à vide `[]`
  useEffect(() => {
    // Je vais modifier la variable isLoading pour indiquer que je vais charger des données
    // ça me permettra d'afficher un spinner de chargement côté JSX
    setIsLoading(true);
    // Pour appeler on va utiliser axios. J'appel mon `URL` en `GET`
    axios
      .get('https://oblog-react.vercel.app/api/posts')
      .then((response) => {
        // On utilise axios, les données retourner par l'API se trouveront dans response.data
        console.log(response.data);
        // Je modifier ma variable posts
        setPosts(response.data);
      })
      .finally(() => {
        // Dans tous les cas (success ou error), j'arrête mon loader
        setIsLoading(false);
      });
  }, []);

  return (
    // SI mon zen mode est activer, je rajoute une classe CSS à mon app
    <div className={`app ${zenMode ? 'app--zen-mode' : ''}`}>
      <Header
        categories={categoriesData}
        zenMode={zenMode}
        setZenMode={setZenMode}
      />
      {isLoading && <Spinner />}
      <Posts posts={posts} />
      <Footer />
    </div>
  );
}

export default App;
