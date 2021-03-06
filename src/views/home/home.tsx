import { useState } from "react";
import { UsersService } from "../../services"
import { useUser } from "../../providers"

import { Roadmap } from ".."

import style from "./home.module.css"

interface LOGIN_FORM {
    username: string,
    password: string
}

export const Home = () => {
    const { login, logout, isLoggedIn, setUser } = useUser();


    const [loginForm, setLoginForm] = useState<LOGIN_FORM>({ username: '', password: '' });

    const onLogin = () => {
        if (loginForm.username && loginForm.password) {
            UsersService.login(loginForm.username, loginForm.password).then((userCredential) => {
                const { uid, email } = userCredential.user;
                login();
                setUser({ uid, email })
            }).catch(() => {
                logout()
            })
        }

    }

    const onLogout = () => {
        UsersService.logout().then(() => {
            logout()
        }).catch(() => {
            logout()
        })
    }

    const onUsernameChange = (v: string) => setLoginForm({ ...loginForm, username: v })
    const onPasswordChange = (v: string) => setLoginForm({ ...loginForm, password: v })

    return (
        <div>
            <>
                {/* {!isLoggedIn
                    ?
                    <div>
                        <label>
                            username
                            <input onChange={(e) => onUsernameChange(e.target.value)} />
                        </label>
                        <label>
                            password
                            <input onChange={(e) => onPasswordChange(e.target.value)} type="password" />
                        </label>
                        <button onClick={onLogin} >Login</button>
                    </div>
                    :
                    <div>
                        <button onClick={onLogout} >Logout</button>
                    </div>
                } */}
            </>
            <div className={style.home} >
                <Roadmap />
            </div>
        </div>
    )
}