import { useFetch } from "../../hooks/useFetch";
import Task from "../Task/Task";
import "./tasks.css";

export default function Tasks() {
  const {
    data: tasks,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/tasks");

  return (
    <div className="container-list">
      <h1>List of tasks</h1>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            id={task.id}
            title={task.title}
            status={task.status}
          />
        ))}
    </div>
  );
}
