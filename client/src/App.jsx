import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Register } from './components/Register'
import NavbarSide from './components/NavbarSide'
import { Login } from './components/Login'
import Bank from './pages/Bank'
import Account from './pages/Account'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/menu' element={<NavbarSide/>}/>
        <Route path='/bankAccount' element={<Bank/>}/>
      </Routes>

      
    </div>
  )
}

export default App
