import { useFetch } from "../../hooks/useFetch";
import Tasks from "../../components/Tasks/Tasks";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();
  const {
    data: tasks,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/tasks");

  return (
    <>
      <h1>Tasko</h1>
      <button onClick={() => navigate("/create")}>Add new task</button>
      <Tasks tasks={tasks} isLoading={isLoading} error={error} />
    </>
  );
}
