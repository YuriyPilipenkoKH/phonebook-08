import { Navigate, Route, Routes } from "react-router-dom"
import { Container } from "./components/container/Container"
import Layout from "./components/layout/Layout"
import ErrorBoundary from "./components/errorboundary/ErrorBoundary"
import { useAuth } from "./hooks/useAuth"
import { useAppDispatch } from "./hooks/useAppDispatch"
import { lazy, useEffect } from "react"
import { refreshUser } from "./redux/auth/operations"
import  "./lib/notiflix"
const HomePage = lazy(() => import('./pages/HomePage'))
const SignUpPage = lazy(() => import('./pages/SignUpPage'))
const LoginPage = lazy(() => import('./pages/LoginPage'))
const PhonebookPage = lazy(() => import('./pages/PhonebookPage'))
const AdminPage = lazy(() => import('./pages/AdminPage'))
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'))

function App() {
  const {token,  isAdmin} = useAuth()
 

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(refreshUser()); 
  }, [dispatch]);



  return (
  <ErrorBoundary>
    <Container>
    <Routes>
          <Route path="/" element={<Layout />}>
          <Route index element={< HomePage />}/>
          <Route path="/signup"
              element ={!token
              ? <SignUpPage/>
              : <Navigate to='/phonebook'/>}/>
          <Route path="/login"
              element ={!token
              ? <LoginPage/>
              : <Navigate to='/phonebook'/>}/>
          <Route path="phonebook"
              element ={ token
              ? <PhonebookPage/>
              : <Navigate to='/login'/>}/>
          <Route path="/admin"
              element={ !token
              ? <PhonebookPage/> 
              : isAdmin
                ? <AdminPage/>
                :  <Navigate to='/phonebook' />
              } />
          <Route path="*" 
              element={<NotFoundPage />} />
          </Route>
        </Routes>
    </Container>
  </ErrorBoundary>
  )
}

export default App
