import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import FormInput from "../FormInput/FormInput";

export default function TaskForm() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    title: "",
    description: "",
    status: "not completed",
  });

  const formInputs = [
    {
      id: 1,
      name: "title",
      type: "text",
      placeholder: "Title",
      label: "Title",
      errorMessage: "The title must be 3-50 characters long",
      pattern: "^.{3,50}$",
      required: true,
    },
    {
      id: 2,
      name: "description",
      type: "text",
      placeholder: "Description",
      label: "Description",
      errorMessage: "Please enter a description",
      required: true,
    },
    {
      id: 3,
      name: "status",
      type: "text",
      label: "Status",
    },
  ];

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
      .then((data) => {
        // Handle the response data
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
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
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
}
