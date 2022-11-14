import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as ActionsProduct from "../../store/reducerSanPham/SanPhamTypes";
import "./danhsachsanpham.scss";
import * as ActionsMyCart from "../../store/reducerMyCart/MyCartTypes";
const DanhSachSanPham = () => {
  const SanPham = useSelector((state) => state.reducerSanPham.SanPham);
  const dispatch = useDispatch();
  const HandleMinusQuantity = (id) => {
    dispatch({
      type: ActionsProduct.GIAM_SO_LUONG_SAN_PHAM,
      data: id,
    });
  };
  const HandlePlusQuantity = (id) => {
  
    dispatch({
      type: ActionsProduct.TANG_SO_LUONG_SAN_PHAM,
      data: id,
    });
  };
  const HandleAddToCart = (item) => {
 
    dispatch({
      type: ActionsMyCart.WATCHER_ADD_TO_CART,
      data: item,

    });
  };
  return (
    <div className="c-productlist">
      {SanPham.map((item) => {
        return (
          <div className="c-singleProduct" key={item.id}>
            <div className="c-singleProduct-image">
              <img src={item.LinkHinhAnh} alt="no result" />
            </div>
            <div>
              <h1>{item.Ten}</h1>
              <p>
                Giá :<span>{item.DonGia}</span>
              </p>
              <p>
                Tiền Thuế: <span>{item.TienThue}</span>
              </p>
            </div>
            {/* button Cart*/}
            <div className="c-singleProduct-AddCart">
              <button
                className="c-singleProduct-btnCart"
                onClick={() => HandleAddToCart(item)}
              >
                Add To Cart
              </button>
              <div style={{ display: "flex", margin: "0 5px" }}>
                <div
                  className="c-singleProduct-block"
                  onClick={() => HandleMinusQuantity(item.id)}
                >
                  -
                </div>
                <span className="c-singleProduct-quantity">{item.SoLuong}</span>
                <div
                  className="c-singleProduct-block"
                  onClick={() => HandlePlusQuantity(item.id)}
                >
                  +
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DanhSachSanPham;
