import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'

function App() {
 

  return (
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='*' element={<PageNotFound />} />
     </Routes>
  )
}

export default App
