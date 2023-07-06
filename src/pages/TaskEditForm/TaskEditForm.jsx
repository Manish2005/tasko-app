import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { formInputs } from "./formInputs";
import FormInput from "../../components/FormInput/FormInput";
import { useFetch } from "../../hooks/useFetch";

export default function TaskEditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data } = useFetch(`http://localhost:3000/tasks/${id}`);
  const [values, setValues] = useState({
    title: "",
    description: "",
    status: "",
  });

  useEffect(() => {
    if (data) {
      setValues({
        ...values,
        title: data.title,
        description: data.description,
        status: data.status,
      });
    }
  }, [data]);

  const handleEdit = (e) => {
    e.preventDefault();

    const newData = {
      title: values.title,
      description: values.description,
      status: values.status,
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
    navigate("/");
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <>
      <div>
        <form onSubmit={handleEdit}>
          <h1>Edit a task</h1>
          {formInputs.map((input) => (
            <FormInput
              key={input.id}
              value={values[input.name]}
              onChange={onChange}
              {...input}
            />
          ))}
          <button>Update</button>
        </form>
      </div>
    </>
  );
}
