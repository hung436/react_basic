import React from 'react'
import { useDispatch } from 'react-redux';
import { login } from './adminSlice';
import { toast } from 'react-toastify';
import LoginAdminform from './LoginAdminform'
import { unwrapResult } from '@reduxjs/toolkit'
import { StorageKeys } from "./../../../constant/storage-key";
import withLoading from './../../HOC/withLoading';

function LoginAdmin(props) {
  const {showLoading, hideLoading} = props;
 
      
    
  const dispatch = useDispatch();
  const handleSubmit = async (values) => {
    
      const action = login(values);
      let resultAction = await dispatch(action);
      resultAction=unwrapResult(resultAction)
      console.log('resultAction',resultAction);
      if (resultAction.errorCode===0) {
          toast.success('Đặng nhập thành công!'); }           
      else {toast.warning(resultAction.message);}
     
      }
  return (
    <>
      <LoginAdminform  show={true} onSubmit={handleSubmit}
       />
  </>
  )
}
export default withLoading(LoginAdmin);