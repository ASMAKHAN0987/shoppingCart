import { RouterProvider,Route,createBrowserRouter,createRoutesFromElements } from "react-router-dom"
import { Container } from "react-bootstrap"
import Layout from "./Layout"
import Home from "./pages/Home"
import { About } from "./pages/About"
import { Store } from "./pages/Store"
import {ShoppingCartProvider} from './context/ShoppingCartContext.tsx'
const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
           <Route path="" element={<Home/>}/>
           <Route path="/about" element={<About/>}/>
            <Route path="/store" element={<Store/>}/>
      </Route>
    )
)
function App() {
  return (
    <>
       <ShoppingCartProvider>
          <Container className="mb-4">
          <RouterProvider router={router} />
          </Container>
      </ShoppingCartProvider>
    </>
  )
}

export default App