import { FC, useContext } from 'react';
import { AuthContext } from './AuthContextLayer';

export const Signout: FC = () => {
  const { setToken } = useContext(AuthContext);

  return <span onClick={() => setToken(undefined)}>Signout</span>;
};
