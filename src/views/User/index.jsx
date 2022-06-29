import React from 'react';
import { Switch, Route, useRouteMatch, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Order from './Order';

import UserLocal from './UserLocal';
export default function User() {
  const isLoggedIn = useSelector((state) => state.user.current);
  const { path } = useRouteMatch();
  return (
    <>
      {!isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <div>
          <Switch>
            <>
              <section
                className="h-100 h-custom"
                style={{ backgroundColor: '#d2c9ff' }}
              >
                <div className="container py-5 h-100">
                  <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12">
                      <div
                        className="card card-registration card-registration-2"
                        style={{ borderRadius: 15 }}
                      >
                        <div className="card-body p-0">
                          <div className="row g-0">
                            <div className="col-lg-12 p-4">
                              <Route
                                path={`${path}`}
                                exact
                                component={UserLocal}
                              />

                              <Route
                                path={`${path}/information`}
                                exact
                                component={UserLocal}
                              />
                              <Route
                                path={`${path}/order`}
                                exact
                                component={Order}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </>
          </Switch>
        </div>
      )}
    </>
  );
}
