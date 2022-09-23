import styled from "styled-components";
import PropTypes from "prop-types";

import lightLogo from "../../img/background.png";
import darkLogo from "../../img/bg.png";

const StyledHeader = styled.div`
  > span {
    font-weight: 200;
    font-size: 28px;
    display: inline-block;
    vertical-align: middle;
    line-height: 28px;
    margin-left: 12px;
    padding: 0;
    color: ${(props) => (props.theme === "dark" ? "#333333" : "#FFFFFF")};
  }
  @media only screen and (max-width: 480px) {
    > img {
      width: 80px;
    }
    > span {
      font-size: 24px;
      margin-left: 6px;
    }
  }
`;

const Header = ({ theme }) => {
  return (
    <StyledHeader theme={theme}>
      <img src={theme === "dark" ? darkLogo : lightLogo} alt="Ioasys Logo" />
      <span>Books</span>
    </StyledHeader>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
};

Header.defaultProps = {
  theme: "light",
};

export default Header;