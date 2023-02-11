import { createContext, useEffect, useState } from "react";

export let AuthContext = createContext(null);

const AuthWrapper = (props) => {
    const [isLogin, setIsLogin] = useState(false);


    useEffect(() => {
       let token = localStorage.getItem('token');
       if (token) {
        setIsLogin(true);
       }
    }, []);

    return (
        <AuthContext.Provider value={{isLogin: isLogin, setIsLogin: (bool) => setIsLogin(bool)}}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthWrapper;