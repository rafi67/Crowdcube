const { createBrowserRouter } = require("react-router-dom");


const router = createBrowserRouter([
    {
        path: "/",
        element: <h1>Root Layout</h1>,
        errorElement: <h1>404 error page not found</h1>,
    }
]);


export default router;