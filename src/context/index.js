import { createContext , useCallback, useContext ,useReducer,useState } from "react"


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

const AuthProvider = ({children}) =>{


    const GithHubPath = 'https://github.com/'
    const [state,dispatch] = useReducer(reducer,initialState)
   
    const login =() =>{

   }

   const fetchGitStats = useCallback( async(username) =>{
    try{
        const response = await fetch(`${GithHubPath}${username}`);
        const data = await response.json();
        console.log(data);
        dispatch({type
        })
    }catch (error){

    }
   });

   return(
    <DataContext.Provider value={{...state,login,fetchGitStats}}>
        {children}
    </DataContext.Provider>
   )
}

const useAuth = () =>{
    const context = useContext(DataContext)
    if(!context){
        throw new Error ('Use Auth must be used within auth provider')
    }
    return context
}


export {AuthProvider, useAuth, DataContext};