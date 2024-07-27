import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="text-center">
      <Link className="absolute top-52 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" to="/">back to home</Link>
      <h1 className="text-center"> page not fount</h1>
    </div>
  );
}

export default PageNotFound;
