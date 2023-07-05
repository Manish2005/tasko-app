import { useFetch } from "../../hooks/useFetch";
import TaskForm from "../TaskForm/TaskForm";
import Tasks from "../Tasks/Tasks";

export default function Homepage() {
  const { data, isPending, error } = useFetch("http://localhost:3000/tasks", {
    type: "GET",
  });
  console.log("data", data);
  return (
    <>
      <h1>Homepage</h1>
      <TaskForm />
      <Tasks />
    </>
  );
}
