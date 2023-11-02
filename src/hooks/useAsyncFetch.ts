/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { useEffect, useState } from 'react';

export const useAsyncFetch = (url: string) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>();

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
      .get(url)
      .then((response) => {
        // On utilise axios, les données retourner par l'API se trouveront dans response.data
        // console.log(response.data);
        // Je modifier ma variable posts
        setData(response.data);
      })
      .finally(() => {
        // Dans tous les cas (success ou error), j'arrête mon loader
        setIsLoading(false);
      });
  }, [url]);

  return { isLoading, data };
};
