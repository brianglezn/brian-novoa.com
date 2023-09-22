import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Cookies from './pages/Cookies';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cookies' element={<Cookies />}></Route>
      </Routes>
    </>
  )
}

export default App
