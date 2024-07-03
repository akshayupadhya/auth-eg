import { createContext, useEffect, useState } from 'react';
import { redirect, useNavigate } from 'react-router-dom';

type iAuth = { token: string | undefined; setToken: (token: string) => void };
const initialAuthValue: iAuth = { token: undefined, setToken: (token) => {} };

export const AuthContext = createContext<iAuth>(initialAuthValue);

export const AuthContextLayer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [token, setToken] = useState<string>();
  const navigate = useNavigate();
  useEffect(() => {
    try {
      if (!!token) {
        navigate('/', { replace: true });
      } else {
        navigate('/login', { replace: true });
      }
    } catch (error) {
      console.error(error);
    }
  }, [token]);
  return (
    <AuthContext.Provider value={{ token, setToken }}>
      {children}
    </AuthContext.Provider>
  );
};
