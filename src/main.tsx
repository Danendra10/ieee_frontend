import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'leaflet/dist/leaflet.css'

import CarbonMonoxide from './pages/CarbonMonoxide'
import CarbonDioxide from './pages/CarbonDioxide'
import Azane from './pages/Azane'
import Methana from './pages/Methana'
import Ozon from './pages/Ozon'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CarbonMonoxide />}></Route>
        <Route path='/carbon-dioxide' element={<CarbonDioxide />}></Route>
        <Route path='/azane' element={<Azane />}></Route>
        <Route path='/methana' element={<Methana />}></Route>
        <Route path='/ozon' element={<Ozon />}></Route>
      </Routes>
    </BrowserRouter>  </React.StrictMode>,
)
