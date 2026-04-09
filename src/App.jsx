
import './App.css'
import Banner from './components/Banner'
import BannerEx from './components/BannerEx'
import Navbar from './components/Navbar'
import Toggle from './components/Toggle'

const dataPromise=fetch('/DigitalData.json').then(res=>res.json());

function App() {
 

  return (
    <>
     <Navbar></Navbar>

     <Banner></Banner>

     <BannerEx></BannerEx>

     <Toggle dataPromise={dataPromise}></Toggle>
    </>
  )
}

export default App
