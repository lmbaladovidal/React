import { Routes, Route, Navigate } from 'react-router-dom'
import { useCheckAuth } from '../hooks'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { CheckingAuth } from '../ui/'

export const AppRouter = () => {

  const {status} = useCheckAuth();

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
