import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorPage from "../pages/Error/ErrorPage";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyBids from "../pages/MyBids/MyBids";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import AddJobs from "../pages/AddJobs/AddJobs";
import JobDetails from "../pages/JobDetails/JobDetails";
import UpdateJob from "../pages/UpdateJob/UpdateJob";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/addJobs",
                element: <AddJobs />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/myBids",
                element: <MyBids />,
            },
            {
                path: "/myPostedJobs",
                element: <MyPostedJobs />,
            },
            {
                path: "/updateJob/:id",
                element: <UpdateJob />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/jobs/${params.id}`),
            },
            {
                path: "/JobDetails/:id",
                element: <JobDetails />,
                loader: ({ params }) =>
                    fetch(`http://localhost:5000/jobs/${params.id}`),
            },
        ],
    },
]);

export default router;
