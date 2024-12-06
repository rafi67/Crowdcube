import RootLayout from "../Layout/RootLayout";

const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout></RootLayout>,
        errorElement: <h1>404 error page not found</h1>,
    }
]);


export default router;