
import {  put, takeLatest} from "redux-saga/effects";
import * as Actions from './DonHangTypes'
export function* watchDonHang(){
    
 yield takeLatest(Actions.CREATE_NEW_DON_HANG,workerOrder)

 yield takeLatest(Actions.WATCHER_CHI_TIET_DON_HANG,DetaiOrder)
}
// eslint-disable-next-line require-yield
function* workerOrder(action){
 
 try{
  
   yield put({
        type:Actions.REDUCER_DON_HANG,
        data:action.data.DonHang,
      
    })

    yield put({
      type:Actions.REDUCER_DONG_DON_HANG,
      data:action.data.DongDonHang,

      
  })

 }catch(error){

 }
}
function* DetaiOrder(action){
 
  try{
  
 
     yield put({
       type:Actions.REDUCER_CHI_TIET_DON_HANG,
       data:action.data,
   })
 
  }catch(error){
 
  }
 }

