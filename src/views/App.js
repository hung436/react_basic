import './App.scss';
import Header from '../component/Header/Header';
import Footer2 from '../component/Footer/Footer2';
import Home from './Home/index.jsx';
import Cart from './Cart';
import Product from './products';
import User from './User';
import NotFound from './NotFound';
import AdminPage from './AdminPage/AdminPage';
import About from './About/About';
import { Switch, Route } from 'react-router';
import 'react-loading-skeleton/dist/skeleton.css';
import Search from './Search';
function App() {
  return (
    <div>
      <Switch>
        <Route path="/admin" component={AdminPage} />
        <Route>
          <Header />
          <main className="app">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/search/:keyword" component={Search} />
              <Route path="/cart" component={Cart} />
              <Route path="/product" component={Product} />
              <Route path="/user" component={User} />
              <Route path="/about" exact component={About} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer2 />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
