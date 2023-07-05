import { useState } from "react";
import FormInput from "../FormInput/FormInput";

export default function TaskForm() {
  const [values, setValues] = useState({
    title: "",
    description: "",
    status: "not completed",
  });
  console.log("values", values);

  const formInputs = [
    {
      id: 1,
      name: "title",
      type: "text",
      placeholder: "Title",
      label: "Title",
      errorMessage:
        "The title should be 3-50 characters long and without special characters",
      pattern: "^[A-Za-z0-9]{3,50}$",
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
