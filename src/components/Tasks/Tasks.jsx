import Task from "../Task/Task";

export default function Tasks({ tasks, isLoading, error }) {
  return (
    <div>
      <h1>List of tasks</h1>
      {isLoading && <div>Loading tasks...</div>}
      {error && <div>{error}</div>}
      {tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
            status={task.status}
          />
        ))}
    </div>
  );
}
