import PropTypes from "prop-types";
import { Popover } from "antd";

import "./popup.css";

const Popup = ({ children, bgColor, fnColor, content, visible }) => {
  return (
    <Popover
      visible={visible}
      content={content}
      placement="bottomLeft"
      bgColor={bgColor}
      fnColor={fnColor}
    >
      {children}
    </Popover>
  );
};

Popup.propTypes = {
  bgColor: PropTypes.string,
  fnColor: PropTypes.string,
  visible: PropTypes.bool,
};

Popup.defaultProps = {
  bgColor: "rgba(255, 255, 255, 0.4);",
  fnColor: "#FFFFFF",
  visible: true,
};

export default Popup;