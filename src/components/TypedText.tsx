import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const TypedText: React.FC = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Senior Software Engineer',
        'Team lead engineer',
        'Full stack Developer',
        'Front End Engineer',
        'Back End Engineer'], 
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return <span className="multiple-text" ref={el}></span>;
}

export default TypedText;