import React from "react";
import NotFound from '@/layout/404';
import { createBrowserRouter } from "react-router-dom"

// eslint-disable-next-line react-refresh/only-export-components
const App = React.lazy(() => import('@/App'))

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "about",
        element: <div>About</div>,
    },
    {
        path: "*",
        element: <NotFound />,
    }
])

export default router