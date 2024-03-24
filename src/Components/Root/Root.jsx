import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Root = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto">
                <div>
                    <Header/>
                </div>
                <div>
                    <Outlet/>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default Root;