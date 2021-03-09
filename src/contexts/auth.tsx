import React, { createContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { TokenPayload } from '../@types/token-payload';

interface AuthContextProps {
  isAuthenticated: boolean;
  tokenPayload: TokenPayload;
  handleLogin: (tokenPayload: TokenPayload) => void;
  handleLogout: () => void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthContextProvider: React.FC = (props) => {
  const [isAuthenticated, setAuthenticated] = useState(false);
  const [tokenPayload, setTokenPayload] = useState(
    () =>
      JSON.parse(
        localStorage.getItem('@token_payload') || '{}',
      ) as TokenPayload,
  );

  const history = useHistory();

  const handleLogin = (tokenPayload: TokenPayload) => {
    setAuthenticated(true);
    setTokenPayload(tokenPayload);
    localStorage.setItem('@token_payload', JSON.stringify(tokenPayload));

    if (tokenPayload.user.role === 'administrator')
      history.push('/panel/dashboard');
    else history.push('/panel/registers');
  };

  const handleLogout = () => {
    setAuthenticated(false);
    localStorage.removeItem('@token_payload');
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        tokenPayload,
        handleLogin,
        handleLogout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
