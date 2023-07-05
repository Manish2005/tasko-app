import "./task.css";

export default function Task({ title, description, isCompleted }) {
  return (
    <div className="task-container">
      <p>{title}</p>
      <p>{description}</p>
      <p>{isCompleted}</p>
    </div>
  );
}
