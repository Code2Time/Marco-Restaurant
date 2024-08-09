import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import About from './pages/About'
import Home from './pages/Home'

function App() {
 

  return (
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
      <Route path='/about' element={<About />} />
      <Route path='/gallery' element={<Gallery />} />
      <Route path='/contact' element={<Contact />} />
     </Routes>
  )
}

export default App
