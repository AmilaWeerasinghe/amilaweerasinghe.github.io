import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import './App.css';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;