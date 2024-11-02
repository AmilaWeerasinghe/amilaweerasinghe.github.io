import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <section className="home">
      <div className="home-content">
        <h3>Hello, It's Me</h3>
        <h1>Amila Weerasinghe</h1>
        <h3>And I'm a <span className="multiple-text"></span></h3>
        <p>With a proven history of building amazing products</p>
        <div className="social-media">
          <a href="https://www.linkedin.com/in/amila677/" style={{ '--i': 6 } as React.CSSProperties}><i className='bx bxl-linkedin'></i></a>
          <a href="https://github.com/AmilaWeerasinghe" style={{ '--i': 7 } as React.CSSProperties}><i className='bx bxl-github'></i></a>
          <a href="https://twitter.com/AmilaWeerasin11" style={{ '--i': 8 } as React.CSSProperties}><i className='bx bxl-twitter'></i></a>
        </div>
        <a href="mailto:amilaweerasinghe677@gmail.com" className="btn">Let's talk</a>
      </div>
      <div className="home-img">
        <img src="images/main.png" alt="home image" />
      </div>
    </section>
  );
}

export default Home;