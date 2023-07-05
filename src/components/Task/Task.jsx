import { useNavigate } from "react-router-dom";
import "./task.css";

export default function Task({ id, title, status }) {
  const navigate = useNavigate();

  return (
    <div className="task-container">
      <p>{title}</p>
      <button onClick={() => navigate(`/task/${id}`)}>Details</button>
      <p>{status}</p>
    </div>
  );
}
