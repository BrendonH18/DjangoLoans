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
    'avatar': string | null;
}
export interface IAuthUser extends TAuthUser {}

//API Responses
type TBaseApiResponse = {
}
//Error
export type TApiErrorResponse = TBaseApiResponse & {
}
export interface IApiErrorResponse extends TApiErrorResponse {}
//Login
export type TApiLoginResponse = TBaseApiResponse & {
    'message': string;
    'token': string;
    'user': {
        'email': string;
        'id': string;
    }
}
export interface IApiLoginResponse extends TApiLoginResponse {}


//LocalStorage
type TBaseLocalStorage = {}
export type TLocalStorage = TBaseLocalStorage & {
    'token'?: string;
    'id'?: string;
}
export interface ILocalStorage extends TLocalStorage {}
export const setLocalStorageItem = <T extends keyof ILocalStorage>(key: T, value: ILocalStorage[T]) : void => {
    window.localStorage.setItem(key, JSON.stringify(value))
}
export const getLocalStorageItem = <T extends keyof ILocalStorage>(key: T) : ILocalStorage[T] => {
    return JSON.parse(window.localStorage.getItem(key)!) as ILocalStorage[T]
}

// type TBaseMessage = {
// }

// type TSentMessage = TBaseMessage & {

// }

// type TReceivedMessage = TBaseMessage & {
    
// }


export function conformToType<T>(data: any, typeTemplate: T): T {
    if (Array.isArray(typeTemplate)) {
        if (!Array.isArray(data)) return [] as T;
        return data.map(item => conformToType(item, typeTemplate[0])) as T;
    } else if (typeof typeTemplate === 'object' && typeTemplate !== null) {
        if (typeof data !== 'object' || data === null) {
            return {} as T; // Return empty object if data is not an object
        }

        let result = {} as T;
        for (const key in typeTemplate) {
            if (Object.prototype.hasOwnProperty.call(data, key)) {
                if (typeof data[key] === 'object' && data[key] !== null) {
                    // Recursive call for nested objects/arrays
                    result[key] = conformToType(data[key], typeTemplate[key]);
                } else if (typeof typeTemplate[key] === typeof data[key]) {
                    result[key] = data[key];
                }
            }
        }
        return result;
    } else {
        // For primitive types, return data if it matches the template type
        return typeof data === typeof typeTemplate ? data : null;
    }
}


