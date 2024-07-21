import { useState } from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css'
import Blog from './pages/Blog';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { Error } from './pages/Error';
import Navbar from './components/Navbar';
import { Protected } from './routes/Protected';
import { AddBook } from './pages/Addbook';
import EditBook from './pages/Editbook';

function App() {
const [isLogin,setIsLogin] = useState(false)
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      {isLogin?<button className='border text-blue-500' onClick={()=>setIsLogin(!isLogin)}>LogOut</button>:<button className='border text-blue-500' onClick={()=>setIsLogin(!isLogin)}>LogIn</button>}
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/blog' element={<Protected isLogin={isLogin}><Blog/></Protected>}/>
          {/* <Route path='/blog' element={<Blog/>}/> */}
          <Route path='/add' element={<AddBook/>}/>
          <Route path='/edit-book' element={<EditBook/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='*' element={<Error/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
