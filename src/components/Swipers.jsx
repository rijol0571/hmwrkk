import React from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Swipers = () => {
  return (
    <div className='container pt-5'>
      <h2>Swiper</h2>
      <button onClick={() => toast('cool')}>SHOW</button>
    </div>
  );
};

export default Swipers;
