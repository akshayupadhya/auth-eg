import { Route, Routes, Link } from 'react-router-dom';
import { Login } from './Login';
import { Signup } from './Signup';
import { AuthContextLayer } from './AuthContextLayer';

export function App() {
  return (
    <div>
      <div role="navigation">
        <ul>
          <li>
            <Link to="/login">Home</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </div>
      <AuthContextLayer>
        <Routes>
          <Route path="/" element={<span>here</span>} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
      </AuthContextLayer>
      {/* END: routes */}
    </div>
  );
}

export default App;
