import Tasks from "../../components/Tasks/Tasks";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Tasko</h1>
      <button onClick={() => navigate("/create")}>Add new task</button>
      <Tasks />
    </div>
  );
}
