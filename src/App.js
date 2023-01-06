
import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import EmpleadoComponente from './components/Empleadosistem';
import Navegacion from './components/Navegacion';
import About from './pages/About';
import ContactoForm from './pages/Contacto';



function App() {
  return (
    <div>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Navegacion/>}>
                <Route index element={<EmpleadoComponente/>}/>
                <Route path='contacto' element={<ContactoForm/>}/>
                <Route path='About' element={<About/>}/>
                <Route path='*' element={ <Navigate replace to="/"/> }/>

              </Route>
              
          </Routes>
      </BrowserRouter>
    </div>

  );
}

export default App;
