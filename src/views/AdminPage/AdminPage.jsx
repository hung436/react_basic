import React, { useState } from "react";
import { Container } from "react-bootstrap";
import HeaderAD from "./component/HeaderAD";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import Category from "./Category/Category";
import Product from "./Product/Product";
import User from "./User/User";
import { useSelector } from "react-redux";
import LoginAdmin from "./component/LoginAdmin";
export default function AdminPage() {
  const { path } = useRouteMatch();
  const [refesh, setrefesh] = useState(0);
  const handleReload = () => {
    setrefesh((prev) => prev + 1);
  };
  const admin = useSelector((state) => state.admin.current);
  console.log("admin", admin);
  if (!admin) return <LoginAdmin />;
  return (
    <>
      <HeaderAD reload={handleReload} />

      <Switch>
        <div className="container-fluid">
          <Route path={`${path}`} exact component={Dashboard} />
          <Route path={`${path}/dashboard`} component={Dashboard} />
          <Route
            path={`${path}/product`}
            component={() => <Product refresh={refesh} />}
          />
          <Route
            path={`${path}/user`}
            component={() => <User refresh={refesh} />}
          />
          <Route path={`${path}/category`} component={Category} />
        </div>
      </Switch>
    </>
  );
}
