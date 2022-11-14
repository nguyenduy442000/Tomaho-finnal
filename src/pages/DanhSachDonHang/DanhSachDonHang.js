import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./danhsachdonhang.scss"
import * as Actions from "../../store/reducerDonHang/DonHangTypes"

import "../MyCart/cart.scss";
const DanhSachDonHang = () => {
  let DonHang = useSelector(state=> state.reducerDonHang.DonHang)
  const DongDonHang = useSelector(state=>state.reducerDongDonHang.DongDonHang)
  // console.log(DonHang,'DonHang')
  // console.log(DongDonHang,'DongDonHang')
 const dispatch = useDispatch()
  let index;
  for(var i=0;i<DongDonHang.length ; i++){
    // eslint-disable-next-line no-loop-func
     index = DonHang.findIndex(item =>item.id === DongDonHang[i].idDonHangs);
    if(DonHang[index].id === DongDonHang[i].idDonHangs){
      DonHang[index] = {
       ...DonHang[index],
        DongDonHang: DongDonHang[i].myCart,
      }
    }
   
   
  }

  const handleDetailOrder =(id)=>{

    dispatch({
      type:Actions.WATCHER_CHI_TIET_DON_HANG,
      data:id,
    })    
   }

   if(!index){
    return (
      <React.Fragment>
      <Link to="/"><button>Danh sách Sản phẩm</button></Link> 
      <div>Danh sach Don Hang Rong</div>
      </React.Fragment>
    
    )
   }else {

  

  return(
    <div>
   <Link to="/"><button>Danh sách Sản phẩm</button></Link> 
      {
        DonHang.map((item)=>{
          if(item.id){
            return(
              <div className="c-orderList">
              <div>
              <div><span>Tên Đơn Hàng:</span><span>{item.Ten}</span></div>
              <div><span>Tổng Trước Thuế:</span><span>{item.TongTienTruocThue}</span></div>
              <div><span>Tổng Thuế:</span><span>{item.TongThue}</span></div>
              <div><span>Tổng Tiền Sau Thuế:</span><span>{item.TongTien}</span></div>
              </div>
              
              <ul>
              {
                item.DongDonHang?.map(items=>{
                  return(
                    <li key={items.id}>
                    <div className="c-MyCart-item">
                    <div className="c-MyCart-image">
                      <img src={items.LinkHinhAnh} alt="no result" />
                    </div>
                    <div className="c-MyCart-title">
                      <span> Tên Sản phẩm: </span>
                      <span>{items.Ten}</span>
                    </div>
                    <span className="c-MyCart-price">
                      <span>Đơn Giá: </span>
                      {items.DonGia}
                    </span>
                    <div className="c-MyCart-quantity">
                      <span>Số lượng: </span>
                      {items.SoLuong}
                    </div>
                    <div >
                    <span> Tổng Tiền Trước thuế : </span>
                    {items.totalPrice}
                  </div>
        
                  <div style={{paddingLeft:'10px'}}>
                  <span> Tổng thuế : </span>
                  {items.totalScots}
                </div>
                  </div>
                    </li>
                  )
                })
              }
              </ul>
              <Link to="/ChiTietDonHang"><button style={{width:'100px',height:'100px'}} onClick={()=>handleDetailOrder(item.id)}>Chi tiết đơn hàng</button></Link>
  
              </div>
            )
          }
        
        }
        )
      }
   
   
    
    </div>
  )
};
}
export default DanhSachDonHang;
