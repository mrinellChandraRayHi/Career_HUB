import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <div>
                <Header/>
            </div>
            <Outlet/>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Root;