import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import BurgersPage from './pages/Main/Burgers'
import PizzasPage from './pages/Main/Pizzas'
import SodasPage from './pages/Main/Sodas'
import IceCreamsPage from './pages/Main/IceCreams'


export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} >
        <Route path='burgers' element={<BurgersPage />} />
        <Route path='pizzas' element={<PizzasPage />} />
        <Route path='sodas' element={<SodasPage />} />
        <Route path='ice-creams' element={<IceCreamsPage />} />
      </Route>
    </Routes>
  )
}
