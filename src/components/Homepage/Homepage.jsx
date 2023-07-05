import { useFetch } from "../../hooks/useFetch";
import TaskForm from "../TaskForm/TaskForm";
import Tasks from "../Tasks/Tasks";

export default function Homepage() {
  const {
    data: tasks,
    isPending,
    error,
  } = useFetch("http://localhost:3000/tasks", {
    type: "GET",
  });

  return (
    <>
      <h1>Homepage</h1>
      <TaskForm />
      <Tasks tasks={tasks} />
    </>
  );
}
