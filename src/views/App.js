import "./App.scss";
import Header from "../component/Header/Header";
import Footer from "../component/Footer/Footer";
import Home from "./Home/index.jsx";
import Cart from "./Cart";
import Product from "./products";
import NotFound from "./NotFound";
import AdminPage from "./AdminPage/AdminPage";
import { Switch, Route } from "react-router";

function App() {
  return (
    <div className="app">
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
    </div>
  );
}

export default App;
