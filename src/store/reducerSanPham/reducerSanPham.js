import * as Actions from './SanPhamTypes';
const initialSanPham = {
    SanPham : [
        {
          id: 1,
          Ten: "Banana",
          LinkHinhAnh: "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/4-450x420.jpg",
          DonGia: 25000,
          TienThue: 1000,
          SoLuong:1,
          totalPrice:0,
          totalScots:0,
        },
        {
          id: 2,
          Ten: "Banana Blossom",
          LinkHinhAnh: "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/31-450x420.jpg",
          DonGia: 26000,
          TienThue: 1000,
          SoLuong:1,
          totalPrice:0,
          totalScots:0,
        },
        {
          id: 3,
          Ten: "Coconut",
          LinkHinhAnh: "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/28-450x420.jpg",
          DonGia: 90000,
          TienThue: 1000,
          SoLuong:1,
          totalPrice:0,
          totalScots:0,
        },
        {
          id: 4,
          Ten: "Bolognese",
          LinkHinhAnh: "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/27-450x420.jpg",
          DonGia: 36000,
          TienThue: 1000,
          SoLuong:1,
          totalPrice:0,
          totalScots:0,
        },
        {
          id: 5,
          Ten: "Onion",
          LinkHinhAnh: "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/5-450x420.jpg",
          DonGia: 70000,
          TienThue: 1000,
          SoLuong:1,
          totalPrice:0,
          totalScots:0,
        },
        {
          id: 6,
          Ten: "Orange",
          LinkHinhAnh: "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/1-450x420.jpg",
          DonGia: 150000,
          TienThue: 1000,
          SoLuong:1,
          totalPrice:0,
          totalScots:0,
        },
        {
          id: 7,
          Ten: "Bread",
          LinkHinhAnh: "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/23-450x420.jpg",
          DonGia: 55000,
          TienThue: 1000,
          SoLuong:1,
          totalPrice:0,
          totalScots:0,
        },
        {
          id: 8,
          Ten: "Slilk",
          LinkHinhAnh: "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/25-450x420.jpg",
          DonGia: 25000,
          TienThue: 1000,
          SoLuong:1,
          totalPrice:0,
          totalScots:0,
        },
        {
          id: 9,
          Ten: "Biona",
          LinkHinhAnh: "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/36-450x420.jpg",
          DonGia: 25000,
          TienThue: 1000,
          SoLuong:1,
          totalPrice:0,
          totalScots:0,
        },
        {
          id: 10,
          Ten: "Carrot",
          LinkHinhAnh: "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/3-450x420.jpg",
          DonGia: 25000,
          TienThue: 1000,
          SoLuong:1,
          totalPrice:0,
          totalScots:0,
        },
        {
          id: 11,
          Ten: "Apple Rhubarb",
          LinkHinhAnh: "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/26-450x420.jpg",
          DonGia: 25000,
          TienThue: 1000,
          SoLuong:1,
          totalPrice:0,
          totalScots:0,
        },
        {
          id: 12,
          Ten: "Apple",
          LinkHinhAnh: "https://demo2.pavothemes.com/freshio/wp-content/uploads/2020/08/2-450x420.jpg",
          DonGia: 25000,
          TienThue: 1000,
          SoLuong:1,
          totalPrice:0,
          totalScots:0,
        },
      ],
      InputProduct:{ id:'',Ten:'',LinkHinhAnh:'',DonGia:'',TienThue:'' },
      
}

// eslint-disable-next-line import/no-anonymous-default-export
export default(state = initialSanPham, action )=>{
    switch(action.type){
        case Actions.GIAM_SO_LUONG_SAN_PHAM:{
          const id = action.data;
          let CopyProduct =[...state.SanPham]
          const index = state.SanPham.findIndex(item => item.id === id);
          CopyProduct[index]={
           ...CopyProduct[index],
           SoLuong:CopyProduct[index].SoLuong-1,
          }
          if(CopyProduct[index].SoLuong<1){
            CopyProduct[index]={
             ...CopyProduct[index],
             SoLuong:1,
            }
          }
          
          return{
            SanPham:CopyProduct
          }

      }
      case Actions.TANG_SO_LUONG_SAN_PHAM:{
        const id = action.data;
        let CopyProduct =[...state.SanPham]
        const index = state.SanPham.findIndex(item => item.id === id);
        CopyProduct[index]={
        ...CopyProduct[index],
        SoLuong:CopyProduct[index].SoLuong+1,
        }
        return{
          SanPham:CopyProduct
        }
      }
      case Actions.CREATE_NEW_SAN_PHAM_REDUCER:{
        let CopyProduct = [...state.SanPham]
        CopyProduct.unshift(action.data)
        return {
          
          SanPham:CopyProduct,
          InputProduct:{ id:'',Ten:'',LinkHinhAnh:'',DonGia:'',TienThue:'' },
        }
      }
      case Actions.UPDATE_DATA_INPUT:{
         const {key,value} = action.data;
         return{
          ...state,
          InputProduct:{
            ...state.InputProduct,
            [key]:value,
          }
         
         }
      }
        default:
            return state;
    }
}