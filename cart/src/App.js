import { useContext } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from './components/Layout/Layout';
import UserProfile from './components/Profile/UserProfile';
import AuthPage from './pages/AuthPage';
import HomePage from './pages/HomePage';
import AuthContext from "./store/authcontex";
import Cartpage from "./components/cart/Cartpage";
import Default from "./pages/default";
function App() {

  const authctx = useContext(AuthContext);
  return (

    <Layout>
      <Switch>
        <Route path='/' exact>
          <Default />
        </Route>
        {!authctx.isLoggedin && (<Route path='/auth'>
          <AuthPage />
        </Route>
        )}
         <Route path='/profile'>
          {authctx.isLoggedin && <UserProfile />}
          {!authctx.isLoggedin && <Redirect to='/auth'></Redirect>}
         </Route>
         <Route path='/home' >
          {authctx.isLoggedin && <HomePage />}
          {!authctx.isLoggedin && <Redirect to='/auth'></Redirect>}
        </Route>
        <Route path='/cart' element={<Cartpage></Cartpage>}>
          {authctx.isLoggedin && <Cartpage></Cartpage>}
          {!authctx.isLoggedin && <Redirect to='/auth'></Redirect>}
        </Route>
        <Route path='*'>
          <Redirect to='/cart'></Redirect>
        </Route>
      </Switch>
    </Layout>

  );
}

export default App;
