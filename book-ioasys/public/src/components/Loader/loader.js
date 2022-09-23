import styled from "styled-components";
import PropTypes from "prop-types";
import { Spin } from "antd";

const StyledLoader = styled(Spin)`
  max-height: none !important;
  .ant-spin-dot-item {
    background-color: #b22e6f !important;
  }
`;

const Loader = ({ children, size, loading }) => {
  return (
    <StyledLoader size={size} spinning={loading}>
      {children}
    </StyledLoader>
  );
};

Loader.propTypes = {
  size: PropTypes.string,
  loading: PropTypes.bool,
};

Loader.defaultProps = {
  size: "middle", // "small", "middle" or "large"
  loading: false,
};

export default Loader;