import * as Actions from "./MyCartTypes";
const inititalMyCart = {
  MyCart: [],
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = inititalMyCart, action) => {


  switch (action.type) {
    case Actions.REDUCER_ADD_TO_CART: {
      let CopyMyCart = [...state.MyCart];
      const editingItem = state.MyCart.find(
        (item) => item.id === action.data.id
      );
      if (!editingItem) {
        CopyMyCart.push({
            id:action.data.id,
            Ten:action.data.Ten,
            LinkHinhAnh:action.data.LinkHinhAnh,
            TienThue:action.data.TienThue * action.data.SoLuong,
            SoLuong:action.data.SoLuong,
            DonGia:action.data.DonGia,
            totalPrice:action.data.DonGia * action.data.SoLuong,
            totalScots:action.data.TienThue *action.data.SoLuong,
        });
      } else {
        editingItem.SoLuong = editingItem.SoLuong + action.data.SoLuong;
        editingItem.totalPrice = editingItem.totalPrice + action.data.DonGia * action.data.SoLuong;
        editingItem.TienThue = editingItem.TienThue +action.data.TienThue;
        editingItem.totalScots= editingItem.totalScots + action.data.TienThue * action.data.SoLuong;

      }

      return {
        MyCart: CopyMyCart,
        
      };
    }
    case Actions.REDUCER_CLEAR_MY_CART :{
      return {
        MyCart: [],
      };
    }
    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};
