import React from 'react'
import Header from '../../Components/Header/Header'
import Slider from '../../Components/Slider/Slider'
import DanhSachSanPham from '../DanhSachSanPham/DanhSachSanPham'

const Home = () => {
  return (
    <div>
    <Header/>
     <Slider/>
   <DanhSachSanPham/>
    </div>
  )
}

export default Home