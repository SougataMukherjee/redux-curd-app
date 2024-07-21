import { Navigate } from "react-router-dom"

export const Protected = ({isLogin,children}) => {
    console.log('is Login user?',isLogin)
    if(!isLogin){
        return <Navigate to='/'/>
    }
  return children
}
