import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import './chitietdonhang.scss'
const ChiTietDonHang = () => {
   const ChiTietDonHang = useSelector(state=> state.reducerDonHang.ChiTietDonHang)

  return (
    <React.Fragment>
    <Link to="/DanhSachDonHang"><button>Danh sách đơn hàng</button></Link>
    <div className="c-OrderDetail">
    
    
       
    <div >
     <p><span>Tên Đơn Hàng:</span>{ChiTietDonHang.id}</p>
    <p><span>Tổng Tổng Trước Thuế: </span><span>{ChiTietDonHang.TongTienTruocThue}</span></p>
    <p><span>Tổng Thuế:</span><span>{ChiTietDonHang.TongThue}</span></p>
    <p><span>Tổng sau Thuế</span><span>{ChiTietDonHang.TongTien}</span></p>
    
    </div>
     
      <ul>
        {ChiTietDonHang.DongDonHang?.map((items) => {
          return (
            <li className="c-OrderDetail-item" key={items.id}>
              <div className="c-OrderDetail-image">
                <img src={items.LinkHinhAnh} alt="no result" />
              </div>
              <p className="c-OrderDetail-title">
                <span>Tên sản phẩm: </span>
                <span>{items.Ten}</span>
              </p>
              <p className="c-OrderDetail-quantity">
              <span>Số lượng: </span>
              {items.SoLuong}
            </p>
              <div className="c-OrderDetail-price">
                <span>Giá: </span>
                {items.DonGia}
              </div>
              <p className="c-OrderDetail-quantity">
              <span>Tổng tiền trước thuế: </span>
              {items.totalPrice}
            </p>
            <p className="c-OrderDetail-quantity">
              <span>Tổng Tiền Thuế: </span>
              {items.totalScots }
            </p>

            </li>
          );
        })}
      </ul>
      
    </div>
    
    </React.Fragment>
   
  );
}


export default ChiTietDonHang