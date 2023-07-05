import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import { formInputs } from "./formInputs";
import FormInput from "../FormInput/FormInput";

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

    const data = {
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
      body: JSON.stringify(data),
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

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <h1>Form</h1>
          {formInputs.map((input) => (
            <FormInput
              key={input.id}
              value={values[input.name]}
              onChange={onChange}
              {...input}
            />
          ))}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
