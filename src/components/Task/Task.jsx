import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
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
    const newData =
      status === "completed"
        ? {
            status: "not completed",
          }
        : {
            status: "completed",
          };

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

  const iconStyles = {
    cursor: "pointer",
  };

  return (
    <div className="container-task">
      <p>{title}</p>
      <div className="container-details">
        <button
          onClick={() => navigate(`/task/${id}`)}
          className="btn btn-details"
        >
          Details
        </button>
        {isCompleted ? (
          <CheckBoxIcon onClick={handleToggle} sx={iconStyles} />
        ) : (
          <CheckBoxOutlineBlankIcon onClick={handleToggle} sx={iconStyles} />
        )}
      </div>
    </div>
  );
}

Task.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  status: PropTypes.string,
};
