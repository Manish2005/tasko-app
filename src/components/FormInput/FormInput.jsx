import { useState } from "react";
import PropTypes from "prop-types";

export default function FormInput({
  label,
  errorMessage,
  onChange,
  ...inputProps
}) {
  const [focused, setFocused] = useState(false);

  return (
    <div className="form-input">
      <label>{label}</label>
      {inputProps.name === "status" ? (
        <select {...inputProps} onChange={onChange}>
          <option value="not completed">Not Completed</option>
          <option value="completed">Completed</option>
        </select>
      ) : (
        <>
          <input
            {...inputProps}
            onChange={onChange}
            onBlur={() => setFocused(true)}
            // eslint-disable-next-line react/no-unknown-property
            focused={focused.toString()}
          />
          <span className="form-error-message">{errorMessage}</span>
        </>
      )}
    </div>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
};
