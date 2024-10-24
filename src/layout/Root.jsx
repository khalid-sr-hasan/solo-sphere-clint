import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const Root = () => {
    return (
        <div>
            <NavBar />
            <div className="min-h-[calc(100vh-310px)]">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Root;
