import { createContext, useEffect, useState } from "react";

export let AuthContext = createContext(null);

const AuthWrapper = (props) => {
    const [isLogin, setIsLogin] = useState(false);
    const [userId, setUserId] = useState(false);


    useEffect(() => {
       let token = localStorage.getItem('token');
       if (token) {
        setIsLogin(true);
        let parsedData = parseJwt(token);
        setUserId(parsedData.sub)
       }
    }, []);

    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    }

    return (
        <AuthContext.Provider value={{isLogin: isLogin, setIsLogin: (bool) => setIsLogin(bool), userId: userId }}>
            {props.children}
        </AuthContext.Provider>
    )
}
export default AuthWrapper;