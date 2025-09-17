import { Route, Routes } from "react-router-dom"
import Layout from "./layouts/Layout"
import Home from "./pages/Home"
import QuizPage from "./pages/QuizPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="/quiz/:cat" element={<QuizPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
