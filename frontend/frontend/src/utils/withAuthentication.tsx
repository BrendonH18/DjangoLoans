import { useEffect, useState, ComponentType, FunctionComponent } from 'react'
// import Navigate from '../components/Navigate'
import { Navigate } from 'react-router-dom'

const withAuthentication = <P extends object>(Component : ComponentType<P>): FunctionComponent<P> => ({...props} : P) => {
    // const [isAuthenticated, setIsAuthenticated] = useState("false")
    // useEffect(() => {
    //     // const token = document.cookie.split(", ").find(row => row.startsWith('token='))
    //     const token = "XX"
    //     if(token) {
    //         console.log("TRUE")
    //         setIsAuthenticated("true")
    //     } else {
    //         console.log("FALSE")
    //         setIsAuthenticated("false")
    //     }
        
    // },[])
    const token = true
    if(token) {
        console.log("TRUE")
        // setIsAuthenticated("true")
    } else {
        console.log("FALSE")
        // setIsAuthenticated("false")
    }

    if(token){
        console.log("TRUE, COMPONENT")
        return <Component {...props}/>
    }else{
        console.log("FALSE, NAVIGATE")
        return <Navigate to={'/login'}/>
    }

}

export default withAuthentication


// export default function withAuthentication<P extends {}>(WrappedComponent: ComponentType<P>){
//     const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(false)
//     useEffect(() => {
//         const token = document.cookie.split(", ").find(row => row.startsWith('token='))
//         if(token) {
//             setIsAuthenticated(true)
//         } else {
//             setIsAuthenticated(false)
//         }
//     },[])
//     if(isAuthenticated){
//         const WrappedComponentWithProps = (props: P) => {
//             return <WrappedComponent {...(props as P)}/>
//         }
//         return WrappedComponentWithProps
//     }else{
//         return <Navigate to={'/login'}/>
//     }
// }

// const withAuthentication = (WrappedComponent: React.ComponentType<P>)  => {
//     WrappedComponent.propTypes?.props
//     return function AuthComponent(props){
//         const [isAuthenticated,setIsAuthenticated]=useState<Boolean>(false)

//         useEffect(()=> {
//             const token = document.cookie.split(", ").find(row => row.startsWith('token='))
//             if(token){
//                 setIsAuthenticated(true)
//             }else{
//                 setIsAuthenticated(true)
//             }
//         },[])

//         if(isAuthenticated){
//             return <WrappedComponent {...props}/>
//         }else{
//             return <Navigate to={'/login'}/>
//         }
//     }
// }

// export default withAuthentication