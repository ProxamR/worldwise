import { BrowserRouter, Routes, Route} from "react-router-dom";
import Product from './pages/Product';
import Pricing from './pages/Pricing';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import Applayout from './pages/AppLayout';
import Pagenotfound from './pages/Pagenotfound';
import CityList from "./components/CityList";
import { useEffect, useState } from "react";

const BASE_URL = "http://localhost:9000";


export default function App() {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(function(){
    async function fetchCities(){
      try{
        setLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);}
      catch{
        alert("There was error loading Data...");
        }
      finally{
        setLoading(false);
      }
    }
    fetchCities();
  },[]);

  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Homepage/>} />
      <Route path="product" element={<Product/>}/>
      <Route path="pricing" element={<Pricing/>} />
      <Route path="login" element={<Login/>} />
      <Route path="app" element={<Applayout/>} >
        <Route index element={<CityList cities={cities} isloading={loading}/>}/>   
        <Route path="cities" element={<CityList cities={cities} isloading={loading}/>}/>
        <Route path="countries" element={<p>List of Country</p>}/>
        <Route path="form" element={<p>Form</p>}/>
      </Route>

      <Route path="*" element={<Pagenotfound/>} />
    </Routes>
    </BrowserRouter>
  )
}