import { route } from "./routes";
import { RouterProvider } from "react-router-dom";



export const App = () => {
  return (
    <>
     <RouterProvider router={route} />
    </>
  );
};