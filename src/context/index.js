import { createContext , useContext ,useState } from "react"


const initialState = {
    user : null,
    isLoggedIn : false,
    acessToken: null,
    error : null,
    loading : true,
    data : null,


}

const reducer = (state,action) =>{
    switch (action.type){
        case 'SET_USER':
            return{
                ...state,
                user : action.payload,
                loading : false
            }
        case  'IS_LOGGED_IN':
            return{
                ...state,
                isLoggedIn : action.payload,
                loading : false
            }
    }
}

const DataContext = createContext()

const AuthProvider = ({Children}) =>{
   const login =() =>{
    
   }
}

const useAuth = () =>{
    const context = useContext(DataContext)
    if(!context){
        throw new Error ('Use Auth must be used within auth provider')
    }
    return context
}


export {AuthProvider, useAuth, DataContext};