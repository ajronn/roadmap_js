export interface PROPS {
    children: React.ReactNode
}

export interface USER {
    uid: string,
    email: string | null,
}

export interface STATE {
    user_data: USER | null,
    isLoggedIn: boolean,
    login: () => void,
    logout: () => void,
    setUser: (user: USER) => void,
}