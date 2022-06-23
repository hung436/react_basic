import React, { useState, useEffect } from 'react';
import { editCategory } from '../../../../services/cateService';
import { toast } from 'react-toastify';
const EditCate = (props) => {
  const [InpEdit, setInpEdit] = useState('');
  useEffect(() => {
    setInpEdit(props.Inp.name);
  }, [props.Inp]);
  const EditCate = async () => {
    let res = await editCategory(props.Inp.id, InpEdit);
    if (res.errorCode === 0) {
      toast.success('Sửa thành công');
    } else {
      toast.warn(res.message);
    }
  };
  return (
    <div>
      <div className="border border-primary p-3">
        <h5>SỬA DANH MỤC</h5>
        <div>
          <input
            type="text"
            className="form-control"
            placeholder=""
            value={InpEdit}
            onChange={(e) => setInpEdit(e.target.value)}
          />
          <button type="submit" className="btn btn-primary" onClick={EditCate}>
            Sửa
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditCate;
