import { useState } from 'react'
import reactLogo from './components/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OfficeInformation from "./components/office"
function App() {
  
  return (
  <>
   <OfficeInformation
      imgLink="https://econ.ntpu.edu.tw/storage/images/ZlP7DHjLRh8IeahmFoT1EMxkmCgaxYtguN76FqiW.jpg"
      name = "郭文宗 教授"
      officeHour="Thu. 12:00 - 14:00"
      email="guowc@gm.ntpu.edu.tw"
      phone="886-2-86741111 ext. 67156"
      office="社3F16"          
                />
  </>
  )
}

export default App

