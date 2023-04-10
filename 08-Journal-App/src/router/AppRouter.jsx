import { Routes, Route, Navigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { firebaseAuth } from '../firebase/config'
import { onAuthStateChanged } from 'firebase/auth'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/'
import { useEffect } from 'react'
import { login, logout } from '../store/auth'

export const AppRouter = () => {

    const {status} = useSelector(state=>state.auth)
    const dispatch = useDispatch()
    useEffect(() => {
      onAuthStateChanged(firebaseAuth,async(user)=>{
        if(!user)return dispatch(logout())
        const {uid,email,displayName,photoURL}= user
        dispatch(login({uid,email,displayName,photoURL}))
      }) 
    
    }, [])

    if (status === 'checking'){
        return <CheckingAuth/>
    }
    return (
        <Routes>
            {console.log(status)}
            {(status==='authenticated')
            ?<Route path='/*' element={<JournalRoutes />} />
            :<Route path='auth/*' element={<AuthRoutes />} />}

            <Route path='/*' element={<Navigate to='/auth/login'/>}/>
            {/* <Route path='auth/*' element={<AuthRoutes />} />
            <Route path='/*' element={<JournalRoutes />} /> */}
        </Routes>
    )
}
