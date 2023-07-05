import Task from "../Task/Task";

export default function Tasks({ tasks }) {
  return (
    <div>
      <h1>Tasks</h1>
      {tasks &&
        tasks.map((task) => (
          <Task
            key={task.id}
            title={task.title}
            description={task.description}
            isCompleted={task.isCompleted}
          />
        ))}
    </div>
  );
}
