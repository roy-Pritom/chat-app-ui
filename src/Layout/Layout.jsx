import { Outlet } from "react-router-dom";
import NabBar from "../pages/shared/Header/NabBar";

const Layout = () => {
    return (
        <div>
            <NabBar></NabBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;