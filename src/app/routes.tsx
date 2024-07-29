import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import Login from "../pages/login/login";
import useAuthStore from "../store/auth";
import { useEffect } from "react";
import { apiUtils } from "../services/utils";
import Swal from "sweetalert2";
import Main from "../components/layout";
import CurrentUser from "../pages/currentUser/currentUser";

const RouteProvider = () => {

    const { token } = useAuthStore();

    const isAuthenticated = !!token;

    useEffect(() => {
        if (token) {
            apiUtils.setAPIToken(token);
            apiUtils.set401LogoutIntercetor(() => {
                Swal.fire("Token's expired! Please login again.");
            })
        }
    }, [token]);

    const router = createBrowserRouter([
        {
            loader: () => {
                if (!isAuthenticated) {
                    return redirect("/login");
                }
                return null;
            },
            path: "/",
            element: <Main />,
            children: [
                {
                    index: true,
                    element: <CurrentUser />
                }
            ]
        },
        {
            loader: () => {
                if (isAuthenticated) {
                    return redirect("/");
                }
                return null;
            },
            path: "/login",
            element: <Login />
        }
    ]);

    return <RouterProvider router={router} />;
}

export default RouteProvider;