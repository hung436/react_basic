import React,{useState} from 'react'
const ListTodo=()=>{
return(
    <>
    <div className="form-group row mt-2">
        <p className='col-sm-10'>Doing homework</p>
        <button className="btn btn-warning col-sm-1">Sửa</button>
        <button className="btn btn-danger col-sm-1">Xóa</button>
    </div>
    <div className="form-group row mt-2">
        <p className='col-sm-10'>Doing homework</p>
        <button className="btn btn-warning col-sm-1">Sửa</button>
        <button className="btn btn-danger col-sm-1">Xóa</button>
    </div>
    </>
    
    
)
}

export default function TodoApp() {
    const [List, setList] = useState([{
       id:1,
        text: 'Lam bt'
    }]);
    const [Inp, setInp] = useState('')
   const handleChange=(e)=> {
setInp(e.target.value)
console.log(Inp)
    }
    const handleClick=()=>{
        if (Inp!=null){
        setList(...{ id:2, text:Inp})
        alert(Inp)
        setInp('sadsa')
        
        }
    }
  return (
    <div>
        <h1>Todo App</h1>
        <div className="d-flex">
            <input type="text" className="form-control" onChange={(e)=>handleChange(e)} value={Inp}/>
            <button className="btn btn-primary" onClick={handleClick}>Thêm</button>
        </div>
        <ListTodo/>
    </div>
  )
}
