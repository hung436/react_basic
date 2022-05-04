import { useSelector } from "react-redux";
import { useRouteMatch, Redirect, Switch, Route } from "react-router-dom";
import CartProductList from "./component/CartProductList";
import CartTotal from "./component/CartTotal";
import CartConfirm from "./component/CartConfirm";
import CartSuccess from "./component/CartSuccess";
import CartEmpty from "./component/CartEmpty";
import { cartItemsCountSelector } from "./selector";
export default function Cart() {
  const countCart = useSelector(cartItemsCountSelector);

  const isLoggedIn = useSelector((state) => state.user.current);
  const { url } = useRouteMatch();
  return (
    <div>
      {!isLoggedIn ? (
        <Redirect to="/" />
      ) : (
        <section
          className="h-100 h-custom"
          style={{ backgroundColor: "#d2c9ff" }}
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
                      <Switch>
                        <Route path={`${url}`} exact>
                          {countCart <= 0 || countCart === undefined ? (
                            <div className="col-lg-12">
                              <CartEmpty />
                            </div>
                          ) : (
                            <div className="col-lg-8">
                              <CartProductList count={countCart} />
                            </div>
                          )}
                        </Route>

                        <Route path={`${url}/confirm`} exact>
                          <div className="col-lg-8">
                            {" "}
                            <CartConfirm />
                          </div>
                        </Route>
                        <Route path={`${url}/success/:id`} exact>
                          <div className="col-lg-12">
                            <CartSuccess />
                          </div>
                        </Route>
                      </Switch>

                      {countCart <= 0 || countCart === undefined || (
                        <div className="col-lg-4 bg-grey">
                          <CartTotal />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
