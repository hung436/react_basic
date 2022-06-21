import React, { useState } from 'react';
import HeaderAD from './component/HeaderAD';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import Dashboard from './component/Dashboard';
import Category from './Category/Category';
import Product from './Product/Product';
import Order from './Order/Order';
import User from './User/User';
import SibarAdmin from './component/SibarAdmin';
import { useSelector } from 'react-redux';
import LoginAdmin from './component/LoginAdmin';
export default function AdminPage() {
  const { path } = useRouteMatch();
  const [refesh, setrefesh] = useState(0);
  const handleReload = () => {
    setrefesh((prev) => prev + 1);
  };
  const admin = useSelector((state) => state.admin.current);

  if (!admin) return <LoginAdmin />;
  return (
    <>
      <HeaderAD reload={handleReload} />

      <div className="d-flex w-100">
        <SibarAdmin />
        <div className="" style={{ flex: '1 1 0%', height: '100vh ' }}>
          <Switch>
            <div className="bg-light">
              <Route path={`${path}/`} exact component={Dashboard} />
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
              <Route path={`${path}/order`} component={Order} />
            </div>
          </Switch>
        </div>
      </div>
    </>
  );
}
