import './App.css';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './common/Header';
import Footer from './common/Footer';
import Menu from './common/Menu';

import Home from './Home';
import Category from './Category';
import NotFound from './NotFound';

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <div className='container'>

          <Header/>
          <Menu/>
          

          <Routes>
            <Route path='/home' element={<Home />} />
            <Route path='/category/:name' element={<Category/>} />
            {/* <Route path='/product' element={} />
            <Route path='/wishlist' element={} />
            <Route path='/cart' element={} />
            <Route path='/checkout' element={} />
            <Route path='/order' element={} />
            <Route path='/history' element={} />
            <Route path='/login' element={} />
            <Route path='/register' element={} /> */}

            <Route path='/' element={<Home />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>






          <Footer/>
            
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
