import { createBrowserRouter,RouterProvider } from "react-router-dom";
import RootElement from "./Pages/RootElement/RootElement";
import PlaceOrder from "./Pages/Place-Order/PlaceOrder";
import { Provider } from "react-redux";
import Store from "./Store/Store";
function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<RootElement/>,
      children:[
        {
          path:'place-order',
          element:<PlaceOrder/>
        }
      ]
    },
  ])
  return (
    <Provider store={Store}>
    <RouterProvider router={router}/>
    </Provider>

  )
}

export default App
