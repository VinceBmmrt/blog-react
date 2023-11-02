import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Posts from '../Posts/Posts';

import './App.scss';

import categoriesData from '../../data/categories';
import postsData from '../../data/posts';

function App() {
  return (
    <div className="app">
      <Header categories={categoriesData} />
      <Posts posts={postsData} />
      <Footer />
    </div>
  );
}

export default App;
