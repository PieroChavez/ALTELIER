import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Pages';
import Footer from './Components/Home/Footer';
import Login from './Service/Auth/Login';
import HomePage from './Pages/Home/Home';
import NavbarComponent from './Components/Home/Navbar';




function App() {

  return (
    <>
      <BrowserRouter>
      <NavbarComponent/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Home" element={<HomePage/>}/>
       
      </Routes>
    </BrowserRouter>     
    <Footer/>
     
    </>
  )
}     

export default App
