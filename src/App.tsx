import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MainPage } from './pages/MainPage';
import { CatsPage } from './pages/CatsPage';
import { DogsPage } from './pages/DogsPage';

const App = () => {
  return (
    <BrowserRouter basename={'/lynksen'}>
      <Routes>
        <Route path={'/'} element={<MainPage />}/>
        <Route path={'/cats'} element={<CatsPage />}/>
        <Route path={'/dogs'} element={<DogsPage />}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
