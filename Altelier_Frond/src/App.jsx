import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Pages';




function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>     
     
    </>
  )
}     

export default App
