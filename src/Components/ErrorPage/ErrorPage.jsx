import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl mb-4">Oooop !!!</h1>
            <Link className="text-white bg-primary px-3 py-2 rounded-lg" to='/'>Go Back</Link>
        </div>
    );
};

export default ErrorPage;