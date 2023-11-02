import axios from 'axios';
import { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import './App.scss';

import Spinner from '../Spinner/Spinner';
import { Post } from '../../@types/post';
import { useAsyncFetch } from '../../hooks/useAsyncFetch';

function App() {
  const [zenMode, setZenMode] = useState(false);

  const { data: posts, isLoading } = useAsyncFetch(
    'https://oblog-react.vercel.app/api/posts'
  );

  const { data: categories } = useAsyncFetch(
    'https://oblog-react.vercel.app/api/categories'
  );

  return (
    // SI mon zen mode est activer, je rajoute une classe CSS à mon app
    <div className={`app ${zenMode ? 'app--zen-mode' : ''}`}>
      <Header
        categories={categories || []}
        zenMode={zenMode}
        setZenMode={setZenMode}
      />
      {isLoading && <Spinner />}
      {posts && <Posts posts={posts} />}
      <Footer />
    </div>
  );
}

export default App;
