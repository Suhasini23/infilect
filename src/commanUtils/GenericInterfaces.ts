export interface IUser {
    username: string;
    password: string
}

export interface IState {
    user: IUser,
    isLoggedIn: boolean,
    imageData: []
}