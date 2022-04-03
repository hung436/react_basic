import React from 'react'
import Sliders from "./component/Sliders/Sliders"
import TodoApp from "./component/TodoApp/TodoApp"
export default function Home() {
  return (
    <>
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-12 col-sm-12 col-lg-8"> 
        <Sliders/>
        </div>
    
      </div>
   
{/* <TodoApp/> */}
    </div>
     
    </>
   

  )
}
