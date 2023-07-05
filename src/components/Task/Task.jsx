import "./task.css";

export default function Task({ title, description, status }) {
  return (
    <div className="task-container">
      <p>{title}</p>
      <p>{description}</p>
      <p>{status}</p>
    </div>
  );
}
