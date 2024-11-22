import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/HomePage/Home';
import SkillsComponent from './components/SkillsComponent/SkillsComponent';
import Concepts from './components/Concepts';
import './App.css';
import './styles.css';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const App: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => { 
    document.body.className = theme;
  }, [theme]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<SkillsComponent />} />
        <Route path="/concepts" element={<Concepts />} />
      </Routes>
    </Router>
  );
}

export default App;