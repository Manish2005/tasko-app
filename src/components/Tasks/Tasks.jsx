import {useFetch} from "../../hooks/useFetch";
import Task from "../Task/Task";
import "./tasks.css";
import {APP_CONSTANTS} from "../../constants.js";

export default function Tasks() {
  const {
    data: tasks,
    isLoading,
    error,
  } = useFetch(`${APP_CONSTANTS.HOST}/tasks`);

  return (
    <div className="container-list">
      <h1>List of tasks</h1>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {tasks && tasks.length === 0 && <p>There are no tasks to show</p>}
      {tasks &&
        tasks.length > 0 &&
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
