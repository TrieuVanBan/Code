
import instance from "./instace";

export const login = (values:any) =>{
    const url = `signin`
    return instance.post(url,values)
}
export const register = (values:any) =>{
    const url = `register`
    return instance.post(url,values)
}