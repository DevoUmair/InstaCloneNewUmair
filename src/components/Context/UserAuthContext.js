import {useEffect , useState , useContext , createContext} from 'react'
import {auth , provider} from '../../firebase'
import { onAuthStateChanged , signInWithPopup} from 'firebase/auth';

const userAuthContext = createContext();

export function UserAuthContextProvider({children}){
    const [user , setUser] = useState();

    const signInWithGoggle = () => {
        return signInWithPopup(auth , provider);
   }

   useEffect(() => {
       const unSubscribe = onAuthStateChanged(auth , (currenuser) => {
           setUser(currenuser)
       })
       unSubscribe();
   })

    return (
        <userAuthContext.Provider value={{signInWithGoggle , user }}>
            {children}
        </userAuthContext.Provider>
    )
}


export function useUserAuth(){
    return useContext(userAuthContext);
}