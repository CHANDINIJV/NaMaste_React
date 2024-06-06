import React, { lazy }from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import ResCards from "./src/components/Rescard";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Error from "./src/components/Error";
import { createBrowserRouter , RouterProvider, Outlet} from "react-router-dom";
// import Grocery from "./src/components/Grocery";
import  { Suspense } from  "react";


const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () =>{
    return(
        <div className="container">
           <Header />
          <Outlet />
        </div>
    )
}



const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout />,
        children:[
            {path:"/",
            element:<Body />

            },
            {
                path:"/about",
                element:<About />
            },
            {
                path:"/contact",
                element:<Contact />
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<h2>Loading...</h2>}><Grocery /></Suspense>
            },
           {
            path: "/restaurants/:resId",
            element: <RestaurantMenu />
           }


        ],
        errorElement:<Error />
    },
   
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);