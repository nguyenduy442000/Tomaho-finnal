
import { Route, Router, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home/Home';
import MyCart from './pages/MyCart/MyCart';
import DanhSachDonHang from './pages/DanhSachDonHang/DanhSachDonHang'
import ChiTietDonHang from './pages/ChiTietDonHang/ChiTietDonHang';




function App() {
  return (
    <div className="App" >
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/MyCart" element={<MyCart/>}/>
    <Route path="/DanhSachDonHang" element={<DanhSachDonHang/>}/>
    <Route path="/ChiTietDonHang" element={<ChiTietDonHang/>}/>
    </Routes>
  
    </div>
  );
}

export default App;
