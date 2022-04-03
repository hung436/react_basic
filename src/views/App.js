import "./App.scss";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Home from "../component/Content/Home";
import Cart from "../component/Content/Cart";
import Product from "../component/Content/products";
import NotFound from "../component/Content/NotFound";
import AdminPage from "../component/AdminPage/AdminPage";
import { Switch, Route } from "react-router";

function App() {
  return (
    <>
      <Switch>
        <Route path="/admin" component={AdminPage} />
        <Route>
          <Header />
          <main>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/cart" component={Cart} />
              <Route path="/product" component={Product} />
              {/* <Route path="/user" component={User} /> */}
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </Route>
      </Switch>
    </>
  );
}

export default App;
