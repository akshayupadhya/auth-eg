import { FC, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './AuthContextLayer';

export const Home: FC = () => {
  // ideally the below two lines should be handled in an Auth Route component
  // but considering i only have one auth route it is okay for now
  const { token } = useContext(AuthContext);

  // below is a hack, and it causes page reload
  if (!token) window.location.href = '/login';

  return <h1>Welcome to application</h1>;
};
