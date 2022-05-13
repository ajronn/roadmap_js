import React, { createContext, useContext } from "react";
import {STATE, PROPS, USER} from "./models"

const st: STATE = {
    user_data: null,
    isLoggedIn: false,
    login: () => {},
    logout: () => {},
    setUser: () => {}
}

const Context = createContext(st)

export class UserProvider extends React.Component<PROPS, STATE> {
    login() {
        this.setState({...this.state, isLoggedIn: true})
    }

    logout() {
        this.setState({...this.state, isLoggedIn: false})
        this.setState({...this.state, user_data: null})
    }

    setUser(user: USER) {
        this.setState({...this.state, user_data: user})
    }

    state: STATE = {
        ...st,
        login: this.login.bind(this),
        logout: this.logout.bind(this),
        setUser: this.setUser.bind(this),
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

export const useUser = () => {
    return useContext(Context);
}