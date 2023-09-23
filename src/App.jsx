import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cookies from './pages/Cookies';
import Links from './pages/Links';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cookies' element={<Cookies />}></Route>
        <Route path='/links' element={<Links />}></Route>
      </Routes>
    </>
  )
}

export default App
