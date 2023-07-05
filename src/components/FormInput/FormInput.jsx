import { useState } from "react";
import "./formInput.css";

export default function FormInput({
  label,
  errorMessage,
  onChange,
  ...inputProps
}) {
  const [focused, setFocused] = useState(false);
  const [selectValue, setSelectValue] = useState();

  return (
    <div className="form-input">
      <label>{label}</label>
      {inputProps.name === "status" ? (
        <select
          value={selectValue}
          onChange={(e) => setSelectValue(e.target.value)}
        >
          <option value="not-completed">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
      ) : (
        <>
          <input
            {...inputProps}
            onChange={onChange}
            onBlur={(e) => setFocused(true)}
            focused={focused.toString()}
          />
          <span>{errorMessage}</span>
        </>
      )}
    </div>
  );
}
