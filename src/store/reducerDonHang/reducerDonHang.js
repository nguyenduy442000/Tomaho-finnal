import * as Actions from "./DonHangTypes";
const initialDonHang = {
  DonHang: [
    {
    id: "",
    Ten:"",
    TongTienTruocThue:0,
    TongThue:0,
    TongTien:0,
  }
],
  ChiTietDonHang: {},
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialDonHang, action) => {
  switch (action.type) {
    case Actions.REDUCER_DON_HANG: {
    
      if (action.data.idDonHang) {
      
        return {
          ...state,
          DonHang: [
            ...state.DonHang,
            {
            id: action.data.idDonHang,
            Ten: action.data.Ten,
            TongTienTruocThue:action.data.TongTienTruocThue,
            TongThue:action.data.TongThue,
            TongTien:action.data.TongTien,
          }
        ],
       
        };
      } else {
        return state;
      }
    }
    case Actions.REDUCER_CHI_TIET_DON_HANG: {
      const Itemdetail = state.DonHang.find((item) => item.id === action.data);

      if (Itemdetail) {
        return {
          ...state,
          ChiTietDonHang: Itemdetail,
        };
      } else {
        return state;
      }
    }

    default:
      return state;
  }
};
