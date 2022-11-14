import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./cart.scss";
import * as ActionsDonHang from "../../store/reducerDonHang/DonHangTypes"
import * as ActionsMyCart from "../../store/reducerMyCart/MyCartTypes";
import { Link } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
const MyCart = () => {
  const dispatch = useDispatch();
    
  const myCart = useSelector((state) => state.reducerMyCart.MyCart);
  // console.log(myCart)
  const randomNumber =uuidv4();
  const TongTienTruocThue = myCart.reduce((total, value) => {
    return total + value.totalPrice;
  }, 0);

  const TongThue = myCart.reduce((total, value) => {
    return total + value.totalScots  ;
  }, 0);

  const TongTien = TongTienTruocThue + TongThue;

  const handleCheckout = (
    TongTienTruocThue,
    TongThue,
    TongTien,
    myCart
  ) => {
    dispatch({
      type: ActionsDonHang.CREATE_NEW_DON_HANG,
      data: {
       DonHang :{
        idDonHang: randomNumber,
        TongTienTruocThue:TongTienTruocThue,
        TongThue:TongThue,
        TongTien:TongTien,
        Ten:randomNumber,
       },
        DongDonHang: {
          myCart:myCart,
          idDonHangs:randomNumber,
        },
      },
    });
    dispatch({
      type: ActionsMyCart.WATCHER_CLEAR_MY_CART,
    });
    
  };
  if (myCart?.length <= 0) {
    return (
      <div style={{ marginTop: "200px" }}>
        <div style={{ fontSize: "50px", fontWeight: "bold" }}>
          Giỏ hàng rỗng
        </div>
        <Link to="/">
          <button>Danh sách sản phẩm</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="c-MyCart">
      <ul>
        {myCart.map((item) => (
          <li className="c-MyCart-item" key={item.id}>
            <div className="c-MyCart-image">
              <img src={item.LinkHinhAnh} alt="no result" />
            </div>
            <div className="c-MyCart-title">
              <span>Tên sản phẩm: </span>
              <span>{item.Ten}</span>
            </div>
            <div className="c-MyCart-quantity">
            <span>Số lượng: </span>
            {item.SoLuong}
          </div>
            <span className="c-MyCart-price">
              <span>Đơn Giá: </span>
              {item.DonGia}
            </span>
           
            <div >
            <span> Tổng Tiền Trước thuế : </span>
            {item.totalPrice}
          </div>

          <div style={{paddingLeft:'10px'}}>
          <span> Tổng thuế : </span>
          {item.totalScots}
        </div>

          </li>
        ))}
      </ul>
      <div className="c-MyCart-CheckOut">
        <div>
          <div>
            <span className="c-MyCart-title">Tổng trước thuế:</span>
            <span className="c-MyCart-value">{TongTienTruocThue}</span>
          </div>
          <div>
            <span className="c-MyCart-title">Tổng thuế:</span>
            <span className="c-MyCart-value">{TongThue}</span>
          </div>
          <div>
            <span className="c-MyCart-title">Tổng Thành Tiền:</span>{" "}
            <span className="c-MyCart-value">{TongTien}</span>
          </div>
        </div>
        <div>
          <button
            onClick={() =>
              handleCheckout(
                TongTienTruocThue,
                TongThue,
                TongTien,
                myCart
              )
            }
          >
            <Link to="/DanhSachDonHang">Thanh Toán</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
