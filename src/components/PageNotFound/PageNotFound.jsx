import { useNavigate } from "react-router-dom";
function PageNotFound() {
  const navigate = useNavigate();

  return (
    <div
      className="text-center my-auto font-bold text-green-500 
    flex flex-col gap-4 justify-center items-center flex-wrap shrink"
    >
      <h1 className="text-4xl uppercase ">Page Not Found</h1>
      <button
        onClick={() => navigate("/")}
        className="ring-1 py-1 px-10 hover:ring-blue-500 bg-blue-500 hover:bg-blue-600
         rounded-md text-white font-bold"
      >
        Go Back
      </button>
    </div>
  );
}

export default PageNotFound;
