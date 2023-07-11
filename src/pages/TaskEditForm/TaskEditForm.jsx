import {useCallback, useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {formInputs} from "./formInputs";
import {useFetch} from "../../hooks/useFetch";
import FormInput from "../../components/FormInput/FormInput";
import {APP_CONSTANTS} from '../../constants'

const iconStyles = {
  cursor: "pointer",
  fontSize: "1.8rem",
  color: "var(--light-pink)",
  marginBottom: "1rem",
};

export const TaskEditForm = () => {
  const navigate = useNavigate();
  const {id} = useParams();
  const {data} = useFetch(`${APP_CONSTANTS.HOST}/tasks/${id}`);
  const [values, setValues] = useState({
    title: "",
    description: "",
    status: "",
  });

  useEffect(() => {
    if (data) {
      setValues({
        title: data.title,
        description: data.description,
        status: data.status,
      });
    }
  }, [data]);

  const handleEdit = useCallback((e) => {
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

    fetch(`${APP_CONSTANTS.HOST}/tasks/${id}`, requestOptions)
      .then((res) => res.json())
      .catch((err) => {
        throw new Error(err);
      });
    navigate(`/task/${id}`);
  }, [id, navigate, values]);

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value});
  };

  return (
    <div className="container-page-form">
      <div className="container-form">
        <Link to={`/task/${id}`}>
          <ArrowBackIcon sx={iconStyles}/>
        </Link>
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
          <button className="btn btn-form">Update</button>
        </form>
      </div>
    </div>
  );
}
