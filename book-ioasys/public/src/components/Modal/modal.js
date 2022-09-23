import styled from "styled-components";
import PropTypes from "prop-types";
import { Modal } from "antd";

import Button from "../Button/button";

const StyledModal = styled(Modal)`
  top: 80px !important;
  width: 769px !important;
  .ant-modal-header {
    border-radius: 4px 4px 0 0 !important;
  }
  .ant-modal-content {
    border-radius: 4px !important;
    overflow-y: hidden !important;
    overflow-x: hidden !important;
    height: fit-content !important;
    position: initial !important;
  }
  .ant-modal-body {
    padding: 42px !important;
  }
  .close-modal-btn {
    position: absolute;
    top: -8vh;
    right: 0;
  }
  @media only screen and (max-width: 768px) {
    width: 90vw !important;
    .ant-modal-body {
      padding: 28px !important;
    }
  }
`;

const Modalr = ({ children, title, visible, closable, onCancel }) => {
  return (
    <StyledModal
      title={title}
      visible={visible}
      closable={closable}
      onCancel={onCancel}
      footer={null}
    >
      <Button
        className="close-modal-btn"
        bgColor="#FFFFFF"
        fnColor="#555555"
        padding="4px"
        width="32px"
        height="32px"
        borderRadius="50%"
        onClick={onCancel}
      >
        <i className="fas fa-times" />
      </Button>
      {children}
    </StyledModal>
  );
};

Modalr.propTypes = {
  title: PropTypes.any,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  onCancel: PropTypes.func,
};

Modalr.defaultProps = {
  visible: false,
  closable: true,
};

export default Modalr;