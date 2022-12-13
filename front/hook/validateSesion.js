import { useEffect, useState } from 'react';
import Router from "next/router";

export default function useValidateSesion(redirectLogin = true, redirectSider = true) {
    const [isLogin, setLogin] = useState(false);
    useEffect(() => {
        try {
            const token = localStorage.getItem("token")
            if (token) {
                if (redirectSider) Router.push('/sider')
                return setLogin(true)
            }
            if (redirectLogin) Router.push('/login')
            setLogin(false)
        } catch (error) {
            if (redirectLogin) Router.push('/login')
            setLogin(false)
        }

    }, []);

    return isLogin
}