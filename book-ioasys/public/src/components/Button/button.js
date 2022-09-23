import styled from "styled-components";
import PropTypes from "prop-types";

const StyledButton = styled.button`
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  color: ${({ fnColor }) => fnColor};
  background-color: ${({ bgColor }) => bgColor};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  border-radius: ${({ borderRadius }) => borderRadius || "44px"};
  border: ${({ borderColor }) =>
    borderColor !== "none" ? `1px solid ${borderColor}` : "none"};
  width: ${({ width }) => width || "fit-content"};
  height: ${({ height }) => height || "fit-content"};
  &:hover {
    color: ${({ fnColor }) => `${fnColor}cc`};
    border: ${({ borderColor }) =>
      borderColor !== "none" ? `1px solid ${borderColor}cc` : "none"};
  }
  &:disabled {
    cursor: not-allowed;
    background-color: ${({ bgColor }) => `${bgColor}77`};
    color: ${({ fnColor }) => `${fnColor}77`};
    border: ${({ borderColor }) =>
      borderColor !== "none" ? `1px solid ${borderColor}77` : "none"};
  }
`;

const Button = ({
  children,
  className,
  bgColor,
  fnColor,
  borderColor,
  fontSize,
  padding,
  borderRadius,
  width,
  height,
  disabled,
  onClick,
}) => {
  return (
    <StyledButton
      className={className}
      bgColor={bgColor}
      fnColor={fnColor}
      borderColor={borderColor}
      fontSize={fontSize}
      padding={padding}
      borderRadius={borderRadius}
      width={width}
      height={height}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  bgColor: PropTypes.string,
  fnColor: PropTypes.string,
  borderColor: PropTypes.string,
  fontSize: PropTypes.string,
  borderRadius: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  bgColor: "#FFFFFF",
  fnColor: "#B22E6F",
  borderColor: "none",
  fontSize: "16px",
  padding: "6px 21px",
  borderRadius: "44px",
  width: "fit-content",
  height: "fit-content",
  disabled: false,
};

export default Button;