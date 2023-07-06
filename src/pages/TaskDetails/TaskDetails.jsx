import { useNavigate, useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

export default function TaskDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, error } = useFetch(
    `http://localhost:3000/tasks/${id}`
  );

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <div>
          <h1>Task Details</h1>
          <div>
            <p>{data.title}</p>
            <p>{data.description}</p>
            <p>{data.status}</p>
            <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
          </div>
        </div>
      )}
    </>
  );
}
