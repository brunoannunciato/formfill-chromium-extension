import React, { useState } from 'react';
import { render } from 'react-dom';
import Header from './components/Header';
import Home from './pages/Home';
import './style.scss';

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const routes: {
    home: JSX.Element;
  } = {
    home: <Home />,
  };

  return (
    <div>
      <Header />

      {routes[currentPage as keyof typeof routes]}
    </div>
  );
};

render(<App />, document.getElementById('root'));
