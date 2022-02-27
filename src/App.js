import './App.scss';
import { useState } from 'react';
import Home from './Containers/Home';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import ProjectPage from './components/ProjectPage/ProjectPage';
import { castr, brain } from './projects';
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
              tech={castr.tech}
              purpose={castr.purpose}
              description={castr.description}
            />
          }
        />
        <Route
          path='brain'
          element={
            <ProjectPage
              title={brain.title}
              tech={brain.tech}
              purpose={brain.purpose}
              description={brain.description}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
