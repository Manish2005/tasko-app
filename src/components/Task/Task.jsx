import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import "./task.css";

export default function Task({ id, title, status }) {
  const navigate = useNavigate();
  const [isCompleted, setIsCompleted] = useState(
    status === "completed" ? true : false
  );

  const handleToggle = () => {
    setIsCompleted((prev) => !prev);

    let newData;
    if (status === "completed") {
      newData = {
        status: "not completed",
      };
    } else {
      newData = {
        status: "completed",
      };
    }

    const requestOptions = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    };

    fetch(`http://localhost:3000/tasks/${id}`, requestOptions)
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(err);
      });
  };

  return (
    <div className="task-container">
      <p>{title}</p>
      <button onClick={() => navigate(`/task/${id}`)}>Details</button>
      {isCompleted ? (
        <CheckBoxIcon onClick={handleToggle} />
      ) : (
        <CheckBoxOutlineBlankIcon onClick={handleToggle} />
      )}
    </div>
  );
}
