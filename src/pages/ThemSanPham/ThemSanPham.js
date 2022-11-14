import React from "react";
import { Button, Modal } from "antd";
import "./themsanpham.scss";
import { useDispatch, useSelector } from "react-redux";
import * as Actions from "../../store/reducerSanPham/SanPhamTypes";
import { v4 as uuidv4 } from "uuid";

const ThemSanPham = ({ isModalOpen, handleOk, handleCancel }) => {
  const inputProduct = useSelector(
    (state) => state.reducerSanPham.InputProduct
  );
  const randomNumber = uuidv4()
  const dispatch = useDispatch();
  const {  Ten, DonGia, TienThue, LinkHinhAnh } = inputProduct || {};
  const onChangeInput = (e) => {
    dispatch({
      type: Actions.UPDATE_DATA_INPUT,
      data: {
        key: e.currentTarget.name,
        value: e.currentTarget.value,
      },
    });
   
  };

  const handleCreateProduct = () => {

  
    dispatch({
      type:Actions.CREATE_NEW_SAN_PHAM,
      data:{
        id:randomNumber,
        Ten:Ten,
        DonGia:Number(DonGia),
        TienThue:Number(TienThue),
        LinkHinhAnh:LinkHinhAnh,
        SoLuong:1,

      }
    })
    handleOk();
  };
  return (
    <Modal
      title="Thêm sản phẩm"
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={[]}
    >
      <div className="c-AddProduct">
        <p>Tên sản phẩm</p>
        <input type="text" name="Ten" onChange={onChangeInput} value={Ten} />
        <p>Đơn giá</p>
        <input
          type="text"
          name="DonGia"
          onChange={onChangeInput}
          value={DonGia}
        />

        <p>Tiền thuế</p>
        <input type="text" name="TienThue" onChange={onChangeInput} value={TienThue} />

        <p>Link Hình ảnh</p>
        <input type="text" name="LinkHinhAnh" onChange={onChangeInput} value={LinkHinhAnh} />
      </div>
      <Button key="back" onClick={handleCancel}>
        Return
      </Button>
      <Button key="submit" type="primary" onClick={handleCreateProduct} >
        Submit
      </Button>
    </Modal>
  );
};

export default ThemSanPham;
