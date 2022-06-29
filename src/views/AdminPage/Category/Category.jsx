import React, { useEffect, useState } from 'react';
import { Table, ButtonGroup } from 'react-bootstrap';
import { getCategory, addCategory } from '../../../services/cateService';
import EditCate from './component/EditCate';
import { toast } from 'react-toastify';
import { deleteCategory } from '../../../services/cateService';
export default function Category() {
  const [Cate, setCate] = useState([]);
  const [InpAdd, setInpAdd] = useState('');
  const [InpEdit, setInpEdit] = useState({});
  useEffect(() => {
    (async () => {
      let category = await getCategory();
      setCate(category.data);
    })();
  });
  const AddCate = async () => {
    let res = await addCategory(InpAdd);
    if (res.errorCode === 0) {
      toast.success('Thêm thành công');
    } else {
      toast.warn(res.message);
    }
  };
  const deleteCate = async (id) => {
    if (window.confirm('Bạn có muốn xóa danh mục này ?')) {
      let res = await deleteCategory(id);
      if (res.errorCode === 0) {
        toast.success('Xóa thành công');
      } else {
        toast.warn(res.message);
      }
    }
  };
  return (
    <div className="p-4">
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="border border-primary p-3">
            <h5>THÊM DANH MỤC</h5>
            <div className="d-flex">
              <input
                type="text"
                className="form-control"
                placeholder=""
                value={InpAdd}
                onChange={(e) => setInpAdd(e.target.value)}
              />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={AddCate}
              >
                Thêm
              </button>
            </div>
          </div>
          <EditCate Inp={InpEdit} />
        </div>

        <div className="col-12 col-md-6">
          <Table responsive="md">
            <thead>
              <tr>
                <th>MÃ DANH MỤC</th>
                <th>DANH MỤC</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {Cate.map((item, index) => (
                <tr key={index}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>
                    <ButtonGroup>
                      <button
                        className="btn btn-warning"
                        onClick={() => setInpEdit(item)}
                      >
                        <i className="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteCate(item.id)}
                      >
                        <i className="fa-solid fa-trash-can"></i>
                      </button>
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
}
