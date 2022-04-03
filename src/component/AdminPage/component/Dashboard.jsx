import React,{ useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
export default function Dashboard() {
  const [Admin, setAdmin] = useState();
useEffect(() => {
  let admin=JSON.parse(localStorage.getItem('admin'))
setAdmin(admin.username)
console.log('admin',admin)
  return admin
})

  return (
    <div>Xinh Chao {Admin}</div>
  )
}
