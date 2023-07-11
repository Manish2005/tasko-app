import { Link, useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "./taskDetails.css";

export const TaskDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/tasks/${id}`
  );

  const iconStyles = {
    cursor: "pointer",
    fontSize: "1.8rem",
    color: "var(--light-pink)",
    marginBottom: "1rem",
  };

  return (
    <>
      <div className="container-page-details">
        {isLoading && <div>Loading...</div>}
        {error && <div>{error}</div>}
        {data && (
          <div className="container-task-details">
            <Link to="/">
              <ArrowBackIcon sx={iconStyles} />
            </Link>
            <h1>Task Details</h1>
            <div className="container-task-details-text">
              <p>
                <span className="font-bold">Title: </span> {data.title}
              </p>
              <p>
                <span className="font-bold">Description: </span>
                {data.description}
              </p>
              <p>
                <span className="font-bold">Status: </span> {data.status}
              </p>
              <button
                onClick={() => navigate(`/task/${id}/edit`)}
                className="btn btn-edit"
              >
                Edit
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
