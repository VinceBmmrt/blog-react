import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import './App.scss';

import categoriesData from '../../data/categories';
import postsData from '../../data/posts';

function App() {
  const [zenMode, setZenMode] = useState(false);

  return (
    // SI mon zen mode est activer, je rajoute une classe CSS à mon app
    <div className={`app ${zenMode ? 'app--zen-mode' : ''}`}>
      <Header
        categories={categoriesData}
        zenMode={zenMode}
        setZenMode={setZenMode}
      />
      <Posts posts={postsData} />
      <Footer />
    </div>
  );
}

export default App;
