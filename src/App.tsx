import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import Contact from './pages/Contact'
import Order from './pages/Order'
import About from './pages/About'
import Home from './pages/Home'


function App() {
 

  return (
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='/about' element={<About />} />
      <Route path='/orders/:id' element={<Order />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
  )
}

export default App
