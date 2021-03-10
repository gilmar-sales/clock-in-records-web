import React, { createContext } from 'react';
import { useHistory } from 'react-router-dom';
import { TokenPayload } from '../@types/token-payload';
import usePersistedState from '../utils/usePersistedState';

interface AuthContextProps {
  isAuthenticated: () => boolean;
  tokenPayload: TokenPayload;
  handleLogin: (tokenPayload: TokenPayload) => void;
  handleLogout: () => void;
  isAdmin: () => boolean;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthContextProvider: React.FC = (props) => {
  const [tokenPayload, setTokenPayload] = usePersistedState<TokenPayload>(
    '@token_payload',
    { user: undefined, token: undefined },
  );

  const history = useHistory();

  const handleLogin = (tokenPayload: TokenPayload) => {
    setTokenPayload(tokenPayload);

    if (tokenPayload.user.role === 'administrator')
      history.push('/panel/dashboard');
    else history.push('/panel/registers');
  };

  const handleLogout = () => {
    history.push('/');
    setTokenPayload({ user: undefined, token: undefined });
  };

  const isAuthenticated = () => {
    return Boolean(tokenPayload.user);
  };

  const isAdmin = () => {
    return tokenPayload.user?.role === 'administrator';
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        tokenPayload,
        handleLogin,
        handleLogout,
        isAdmin,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
