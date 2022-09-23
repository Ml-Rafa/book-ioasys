import styled from "styled-components";
import PropTypes from "prop-types";

const StyledDiv = styled.div`
  position: relative;
`;

const StyledInput = styled.input`
  border: none;
  height: 60px;
  width: 368px;
  color: #ffffff;
  font-size: 16px;
  line-height: 16px;
  padding: 16px 20px 0 20px;
  margin: 8px 0;
  background: rgba(0, 0, 0, 0.32);
  border-radius: 4px;
  &::placeholder {
    color: #ffffff;
    opacity: 0.5;
  }
  &:not(:placeholder-shown) {
    + .input-label {
      font-size: 12px;
      top: 15px;
    }
  }
  &:focus {
    outline: none;
    border: none;
    + .input-label {
      font-size: 12px;
      top: 15px;
    }
  }
  @media only screen and (max-width: 480px) {
    width: 90vw;
  }
`;

const StyledLabel = styled.label`
  position: absolute;
  font-size: 16px;
  color: #ffffff88;
  top: 26px;
  left: 20px;
  opacity: 1;
  transition: all 0.2s ease;
`;

const Input = ({ id, type, placeholder, value, onChange }) => {
  return (
    <StyledDiv>
      <StyledInput
        value={value}
        onChange={onChange}
        id={id}
        type={type}
        placeholder=" "
      />

      <StyledLabel htmlFor={id} className="input-label">
        {placeholder}
      </StyledLabel>
    </StyledDiv>
  );
};

Input.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  id: "input",
  type: "text",
  placeholder: "Input",
};

export default Input;