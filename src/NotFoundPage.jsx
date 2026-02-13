import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
        <h1 className="text-4xl font-bold text-center mt-10">404 - Page Not Found</h1>
        <Link to="/" className="text-blue-500 hover:underline"><button>go back home</button></Link>
    </div>
  );
};

export default NotFoundPage;