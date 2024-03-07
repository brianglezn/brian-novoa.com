import { Route, Routes } from 'react-router-dom';
import './i18n/i18nConfig';

import ButtonLanguageSwitch from './components/ButtonLanguageSwitch';
import Home from './pages/Home';
import Cookies from './pages/Cookies';
import Links from './pages/Links';
import Wordpress_webs from './components/projects/Wordpress_webs';
import Profit_Lost from './components/projects/Profit_Lost';

function App() {
  return (
    <>
      <ButtonLanguageSwitch />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cookies' element={<Cookies />}></Route>
        <Route path='/links' element={<Links />}></Route>        
        <Route path='/project/profit_lost' element={<Profit_Lost />}></Route>        
        <Route path='/project/wordpress_webs' element={<Wordpress_webs />}></Route>
      </Routes>
    </>
  )
}

export default App;
