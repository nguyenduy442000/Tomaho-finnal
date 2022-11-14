
import React, { useState } from 'react';
import './header.scss'
import { BsFillBagCheckFill } from 'react-icons/bs';
import {HiOutlineClipboardList} from 'react-icons/hi'
import { Link } from 'react-router-dom';
import 'antd/dist/antd.min.css'
import ThemSanPham from '../../pages/ThemSanPham/ThemSanPham';





const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {     
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    <div className='c-header'>
    <input type="text" className='c-header-search' placeholder='Search...'/>
    <div style={{display:'flex'}}>
    <button className='c-header-btnCreate' onClick={showModal} >Thêm sản phẩm</button>
 
   <Link to="/MyCart"><div className='c-header-Icon'><span ><BsFillBagCheckFill/></span></div></Link> 
    <Link to="/DanhSachDonHang"><div className='c-header-Icon'><span><HiOutlineClipboardList/></span></div></Link>
   
    </div>
   
    
 
        </div>
      {
        isModalOpen&& <ThemSanPham handleOk={handleOk} handleCancel={handleCancel} isModalOpen={isModalOpen}/>
      }
    </>
   
  )
}

export default Header