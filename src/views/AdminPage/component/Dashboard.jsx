import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
export default function Dashboard() {
  // const [Admin, setAdmin] = useState();
  const Admin = useSelector((state) => state.admin.current);
  // useEffect(() => {
  //   let admin = JSON.parse(localStorage.getItem("admin"));
  //   setAdmin(admin.username);

  //   return admin;
  // });

  return (
    <div className="container p-5">
      <div className="border border-primary p-3 text-center">
        <h2>HELLO {Admin.firstname + ' ' + Admin.lastname}</h2>
        <p className="">Welcome to Admin Manager</p>
      </div>
    </div>
  );
}
