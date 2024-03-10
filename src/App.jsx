import { Route, Routes } from 'react-router-dom';
import './i18n/i18nConfig';

import ButtonLanguageSwitch from './components/ButtonLanguageSwitch';
import Home from './pages/Home';
import Cookies from './pages/Cookies';
import Links from './pages/Links';
import WordpressWebs from './components/projects/WordpressWebs';
import ProfitLost from './components/projects/Profit_Lost';

function App() {
  return (
    <>
      <ButtonLanguageSwitch />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/cookies' element={<Cookies />}></Route>
        <Route path='/links' element={<Links />}></Route>        
        <Route path='/project/wordpress_webs' element={<WordpressWebs />}></Route>
        <Route path='/project/profit-lost' element={<ProfitLost />}></Route>
      </Routes>
    </>
  )
}

export default App;
