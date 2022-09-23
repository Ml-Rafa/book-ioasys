import styled from "styled-components";
import PropTypes from "prop-types";
import { Select as AntSelect } from "antd";

import "./select.css";

const { Option } = AntSelect;

const StyledSelect = styled(AntSelect)`
  font-size: 12px !important;
  .ant-select-selector {
    width: 160px !important;
    border-radius: 15px !important;
    background-color: transparent !important;
    border: 1px solid #b22e6f44 !important;
    box-shadow: none !important;
    &:hover {
      border: 1px solid #b22e6f88 !important;
    }
  }
  .ant-select-selection-item {
    font-weight: 600 !important;
    font-size: 12px !important;
    color: #b22e6f !important;
  }
  @media only screen and (max-width: 768px) {
    .ant-select-selector {
      width: 120px !important;
    }
  }
`;

const Select = ({ values, defaultValue, onChange }) => {
  return (
    <StyledSelect
      showSearch
      placeholder="Selecione uma Categoria"
      onChange={onChange}
      defaultValue={defaultValue}
    >
      {values.map((opt) => (
        <Option key={opt.value} value={opt.value}>
          {opt.label}
        </Option>
      ))}
    </StyledSelect>
  );
};

Select.propTypes = {
  values: PropTypes.array,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
};

Select.defaultProps = {};

export default Select;