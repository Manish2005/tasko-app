import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { formInputs } from "./formInputs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import FormInput from "../../components/FormInput/FormInput";

export default function TaskForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    description: "",
    status: "not completed",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueId = uuidv4().slice(0, 8);

    const newData = {
      id: uniqueId,
      title: values.title,
      description: values.description,
      status: values.status,
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newData),
    };

    fetch("http://localhost:3000/tasks", requestOptions)
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(err);
      });
    navigate("/");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const iconStyles = {
    cursor: "pointer",
    fontSize: "1.8rem",
    color: "var(--light-pink)",
    marginBottom: "1rem",
  };

  return (
    <div className="container-page-form">
      <div className="container-form">
        <Link to="/">
          <ArrowBackIcon sx={iconStyles} />
        </Link>
        <form onSubmit={handleSubmit}>
          <h1>Create a task</h1>
          {formInputs.map((input) => (
            <FormInput
              key={input.id}
              value={values[input.name]}
              onChange={onChange}
              {...input}
            />
          ))}
          <button className="btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
