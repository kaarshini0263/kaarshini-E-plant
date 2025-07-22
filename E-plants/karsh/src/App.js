import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbars from './components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Login from './Pages/Login';
import IndoorPlants from './Pages/plants/indoorplants';
import Plants from './Pages/plants/Plants';
import Seeds from './Pages/seeds/Seeds';
import PotsTools from './Pages/pots-tools/pots-tools';
import OutdoorPlants from './Pages/plants/outdoorplants';
import FloweringPlants from './Pages/plants/floweringplants';
import Succulent from './Pages/plants/Succulents';
import Gardentools from './Pages/pots-tools/gardentools';
import Flowerseeds from './Pages/seeds/flowerseed';
import Fruitseeds from './Pages/seeds/fruitseed';
import Vegetableseeds from './Pages/seeds/vegetableseed';
import Granular from './Pages/fertilizers/granular';
import Liquid from './Pages/fertilizers/liquid';
import Organic from './Pages/fertilizers/organic';
import Fertilizers from './Pages/fertilizers/Fertilizers';
import Slide from './Homecomp/carousel';
import Footer from './components/Footer';
import Plantpots from './Pages/pots-tools/plantpots';
import { CartProvider } from './components/Cart';







function App() {
  return (
<>
<BrowserRouter>
<CartProvider>
<Navbars/>
<Slide/> 
    <div className='container'>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>

      <Route path='/plants' element={<Plants/>}></Route>
      <Route path="/plants/indoor" element={<IndoorPlants />} />
      <Route path="/plants/outdoor" element={<OutdoorPlants />} />
      <Route path="/plants/flowering" element={<FloweringPlants />} />
      <Route path="/plants/succulents" element={<Succulent />} />


      <Route path='/pots-tools' element={<PotsTools/>}></Route>
       <Route path='/pots-tools/plantpots' element={<Plantpots/>}></Route>
       <Route path='/pots-tools/gardening-tools' element={<Gardentools/>}></Route>

      <Route path='/seeds' element={<Seeds/>}></Route>
      <Route path='/seeds/flower' element={<Flowerseeds/>}></Route>
      <Route path='/seeds/vegetable' element={<Fruitseeds/>}></Route>
      <Route path='/seeds/fruit' element={<Vegetableseeds/>}></Route>

      <Route path='/fertilizers' element={<Fertilizers/>}></Route> 
      <Route path='/fertilizers/granular' element={<Granular/>}></Route> 
      <Route path='/fertilizers/liquid' element={<Liquid/>}></Route> 
      <Route path='/fertilizers/organic' element={<Organic/>}></Route> 
      <Route path='/login' element={<Login/>}></Route>
      
    </Routes>
    </div>
    <Footer/>
    </CartProvider>
    </BrowserRouter>
 </>     
  );
}

export default App;