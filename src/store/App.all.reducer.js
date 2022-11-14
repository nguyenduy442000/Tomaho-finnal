import { combineReducers } from "redux";
import reducerSanPham from "./reducerSanPham/reducerSanPham";
import reducerMyCart from "./reducerMyCart/reducerMyCart"
import reducerDonHang from "./reducerDonHang/reducerDonHang";
import reducerDongDonHang from "./reducerDongDonHang/reducerDongDonHang";
const reducer = combineReducers({
  reducerSanPham,
  reducerMyCart,
  reducerDongDonHang,
  reducerDonHang,

  
})
export default reducer;