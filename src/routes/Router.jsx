import { createBrowserRouter } from "react-router";
import HomePage from "../pages/homePage/HomePage";
import TimeLinePage from "../pages/timelinePage/TimeLinePage";
import StatsPage from "../pages/stats/StatsPage";
import ErrorPage from "../pages/errorPage/ErrorPage";
import RootLayout from "../layout/RootLayout";
import FriendDetails from "../pages/homePage/freiendDetails/FriendDetails";


export const router = createBrowserRouter([
    {
        path:"/",
        element:<RootLayout />,
        children:[
            {
                path:"/",
                element:<HomePage />
            },
            {
                path:"/:id",
                element:<FriendDetails />
            },
            {
                path:"/timeline",
                element:<TimeLinePage />
            },
            {
                path:"/stats",
                element:<StatsPage />
            }
        ],
        errorElement : <ErrorPage />
    }   
]
)