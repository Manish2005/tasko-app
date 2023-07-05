import { useFetch } from "../../hooks/useFetch";
import TaskForm from "../../components/TaskForm/TaskForm";
import Tasks from "../../components/Tasks/Tasks";

export default function Homepage() {
  const {
    data: tasks,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/tasks", {
    type: "GET",
  });

  return (
    <>
      <h1>Homepage</h1>
      <TaskForm />
      <Tasks tasks={tasks} isLoading={isLoading} error={error} />
    </>
  );
}
