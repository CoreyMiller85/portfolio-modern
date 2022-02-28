import './App.scss';
import { useState } from 'react';
import Home from './Containers/Home';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProjectPage from './components/ProjectPage/ProjectPage';
import { castr, brain, clothes } from './projects';
import SlideMenu from './components/SlideMenu/SlideMenu';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div className='app'>
      <SlideMenu
        isMenuOpen={isMenuOpen}
        active={isMenuOpen ? 'active' : ''}
        setIsMenuOpen={toggleMenu}
      />

      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={toggleMenu} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route
          path='castr'
          element={
            <ProjectPage
              title={castr.title}
              tags={castr.tags}
              purpose={castr.purpose}
              description={castr.description}
              images={castr.images}
            />
          }
        />
        <Route
          path='brain'
          element={
            <ProjectPage
              title={brain.title}
              tags={brain.tags}
              purpose={brain.purpose}
              description={brain.description}
              images={brain.images}
            />
          }
        />
        <Route
          path='clothes'
          element={
            <ProjectPage
              title={clothes.title}
              tags={clothes.tags}
              images={clothes.images}
              purpose={clothes.purpose}
              description={clothes.description}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
