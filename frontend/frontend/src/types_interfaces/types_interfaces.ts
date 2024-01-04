// Users
type TBaseUser = {
}
// Login User
export type TLoginUser = TBaseUser & {
    'email': string;
    'password': string;
}
export interface ILoginUser extends TLoginUser {}
//Register User
export type TRegisterUser = TLoginUser & {
    'first_name': string;
    'last_name': string
}
export interface IRegisterUser extends TRegisterUser {}
//Authenticated User
export type TAuthUser = TBaseUser & {
    'id': number;
    'first_name': string;
    'last_name': string;
    'avatar': string;
}
export interface IAuthUser extends TAuthUser {}

//Messages
// type TBaseMessage = {
// }

// type TSentMessage = TBaseMessage & {

// }

// type TReceivedMessage = TBaseMessage & {
    
// }



