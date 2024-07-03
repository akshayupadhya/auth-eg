import { Route, Routes, Link } from 'react-router-dom';
import { Login } from './Login';
import { Signup } from './Signup';
import { AuthContextLayer } from './AuthContextLayer';
import { AuthRoute } from './AuthRoute';
import { Home } from './Home';
import { Signout } from './Signout';

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/signup"><Signout/></Link>
          </li>
        </ul>
      </div>
      <AuthContextLayer>
        <Routes>
          <Route path='/' Component={Home}/>
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </AuthContextLayer>
      {/* END: routes */}
    </div>
  );
}

export default App;
