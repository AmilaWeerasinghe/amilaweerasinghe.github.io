import React from 'react';
import 'boxicons/css/boxicons.min.css';
import './Home.css';
import TypedText from '../TypedTextComponent/TypedText';
import { Button } from '@mui/material';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { toggleTheme } from '../../store/slices/themeSlice';

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  
  const handleToggleTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Amila Weerasinghe</h1>
        <h3>And I'm a <TypedText /></h3>
        <p>With a proven history of building amazing products</p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/amila677/" style={{ '--i': 6 } as React.CSSProperties} target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-linkedin'></i>
          </a>
          <a href="https://github.com/AmilaWeerasinghe" style={{ '--i': 7 } as React.CSSProperties} target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-github'></i>
          </a>
          <a href="https://twitter.com/AmilaWeerasin11" style={{ '--i': 8 } as React.CSSProperties} target="_blank" rel="noopener noreferrer">
            <i className='bx bxl-twitter'></i>
          </a>
        </div>
        <a href="mailto:amilaweerasinghe677@gmail.com" className="btn">Let's talk</a>
      </div>
      <div className="home-img">
        <img src={`${process.env.PUBLIC_URL}/images/main.png`} alt="home" />
      </div>
      <Button variant="contained" color="primary" onClick={handleToggleTheme}>
        Theme
      </Button>
    </section>
  );
}

export default Home;