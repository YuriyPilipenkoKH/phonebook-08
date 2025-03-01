import { Route, Routes } from "react-router-dom"
import { Container } from "./components/container/Container"
import Layout from "./components/layout/Layout"
import HomePage from "./pages/HomePage"
import NotFoundPage from "./pages/NotFoundPage"


function App() {


  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={< HomePage />}/>



          <Route path="*" 
                  element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Container>
  )
}

export default App
