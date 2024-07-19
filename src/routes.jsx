import { createBrowserRouter, RouterProvider}  from "react-router-dom";
import { Home } from "./pages/home";
import { About } from "./pages/about";
import { Users } from "./pages/users";
import { ErrorPage } from "./pages/error-page";




export const route = createBrowserRouter([
    {
        path: "",
        element: <Home />,
        errorElement: <ErrorPage />,
    },
    {
        path:"/users",
        element: <Users />,
        
    },
    {
        path:"/about",
        element: <About />,
       
    },
   

]);