import React from 'react';
import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;