import { createContext, useState } from 'react';
import { useHistory } from 'react-router';
import roles from '../helpers/roles';

export const AuthContext = createContext()

export default function AuthProvider({ children }) {
    const history = useHistory();
    const [user, setUser] = useState(null);

    const login = (userCredentials, fromLocation) => {

        //DATA USER
        setUser({ 
            id: 1, 
            nombre: 'John', 
            correo: 'john@email.com',  
            rol: roles.admin
        });

        if(fromLocation){
            history.push(fromLocation);
        }
    }
    const logout = () =>  setUser(null);

    const isLogged = () => !!user;
    const hasRole = (role) => user?.rol === role;

    const contextValue = {
        user,
        isLogged,
        hasRole,
        login,
        logout,
    };

    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>;
}