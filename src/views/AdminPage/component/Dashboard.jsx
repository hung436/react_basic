import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
export default function Dashboard() {
  // const [Admin, setAdmin] = useState();
  const Admin = useSelector((state) => state.admin.current);
  // useEffect(() => {
  //   let admin = JSON.parse(localStorage.getItem("admin"));
  //   setAdmin(admin.username);

  //   return admin;
  // });

  return <div>Xinh Chao {Admin.firstname + " " + Admin.lastname}</div>;
}
