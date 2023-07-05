import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Login } from './components/Login'
import  Home  from './pages/Home'
import NavbarSide from './components/NavbarSide'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Home/>}/>
        <Route path='/menu' element={<NavbarSide/>}/>
      </Routes>

      
    </div>
  )
}

export default App
