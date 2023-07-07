import { useNavigate } from "react-router-dom";
import Tasks from "../../components/Tasks/Tasks";
import "./homepage.css";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div className="container-homepage">
      <button onClick={() => navigate("/create")} className="btn">
        Add new task
      </button>
      <Tasks />
    </div>
  );
}
