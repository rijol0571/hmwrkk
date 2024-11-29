import { useState } from 'react';
import Swiper from "./components/swipers";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swipers from './components/swipers';
import Products from './components/products';
import Grid from './components/grid';
import Hmwrk from './components/Hmwrk';


function App() {
  return (
    <>
      {/* <Swipers />
      <ToastContainer />
      <Products/> 
     <Grid/> */}
     <Hmwrk/>
      </>
  );
}

export default App;
