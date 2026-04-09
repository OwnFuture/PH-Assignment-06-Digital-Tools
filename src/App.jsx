
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import BannerEx from './components/BannerEx'
import Navbar from './components/Navbar'
import Toggle from './components/Toggle'
import { ToastContainer } from 'react-toastify';
import GetStartedCard from './components/GetStartedCard'
import PricingCard from './components/PricingCard'
import Explore from './components/Explore'
import Footer from './components/Footer'

const dataPromise=fetch('/DigitalData.json').then(res=>res.json());

const startedDataPromise=fetch('/GetStartedData.json').then(res=>res.json());

const pricingDataPromise=fetch('/PricingData.json').then(res=>res.json());

function App() {
 
  const [carts,setcarts]=useState([]);
  return (
    <>
     <Navbar carts={carts}></Navbar>

     <Banner></Banner>

     <BannerEx></BannerEx>

     <Toggle dataPromise={dataPromise} carts={carts} setcarts={setcarts}></Toggle>

     <GetStartedCard startedDataPromise={startedDataPromise}></GetStartedCard>

     <PricingCard pricingDataPromise={pricingDataPromise}></PricingCard>

     <Explore></Explore>

     <Footer></Footer>

     <ToastContainer />
    </>
  )
}

export default App
