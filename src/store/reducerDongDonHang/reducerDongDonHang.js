import * as Actions from "../reducerDonHang/DonHangTypes";
const initialDongDonHang = {

  DongDonHang: [],

};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialDongDonHang, action) => {
  switch (action.type) {
  
    case Actions.REDUCER_DONG_DON_HANG: {
      let CopyDongDonHang = [...state.DongDonHang]
      CopyDongDonHang.push(action.data)
      return{
        ...state,
        DongDonHang:CopyDongDonHang,
      }
    }
    default:
      return state;
  }
};
