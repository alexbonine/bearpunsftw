import styled from "@emotion/styled";
import pseudo from "styles/pseudo";
import mq from "styles/mq";
import Bear from "images/bear.svg";
import Lemur from "images/lemur.svg";
import colors from "styles/colors";
import { HEADER_HEIGHT } from "styles/constants";

const HOME_ICON_SIZE = "24px";
const ITEM_COLOR = colors.white;

const getContainerStyles = ({ isFixedHeader, isMenuOpen }) => {
  const styles = {};

  if (isFixedHeader) {
    styles.position = "fixed";
  } else {
    styles.position = ["fixed", "fixed", "absolute", "absolute"];
  }

  if (isMenuOpen) {
    styles.height = ["100%", "100%", HEADER_HEIGHT, HEADER_HEIGHT];
    styles.backgroundColor = [
      colors.gray,
      colors.gray,
      "rgba(0, 0, 0, 0.5)",
      "rgba(0, 0, 0, 0.5)",
    ];
  } else {
    styles.height = HEADER_HEIGHT;
    styles.backgroundColor = "rgba(0, 0, 0, 0.5)";
  }

  return mq(styles);
};

export const Container = styled.nav`
  z-index: 1;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;

  ${getContainerStyles}
`;

export const Home = styled.div`
  position: absolute;

  ${mq({
    left: ["20px", "20px", "50px", "50px"],
    top: ["2px", "2px", "auto", "auto"],
  })}
`;

export const MenuButton = styled.div`
  cursor: pointer;

  ${mq({
    display: ["inline-block", "inline-block", "none", "none"],
  })}

  ${pseudo({
    "&": {
      opacity: [0.75, 1, 1, 1],
    },
  })};
`;

const MenuBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: ${colors.white};
  margin: 6px 0;
  transition: 0.4s;
`;

export const MenuBar1 = styled(MenuBar)`
  transform: ${(props) =>
    props.isMenuOpen ? "rotate(-45deg) translate(-9px, 6px)" : "none"};
`;

export const MenuBar2 = styled(MenuBar)`
  opacity: ${(props) => (props.isMenuOpen ? 0 : 1)};
`;

export const MenuBar3 = styled(MenuBar)`
  transform: ${(props) =>
    props.isMenuOpen ? "rotate(45deg) translate(-8px, -8px)" : "none"};
`;

export const BearIcon = styled(Bear)`
  height: ${HOME_ICON_SIZE};
  width: ${HOME_ICON_SIZE};
  fill: ${ITEM_COLOR};
`;

export const LemurIcon = styled(Lemur)`
  height: ${HOME_ICON_SIZE};
  width: ${HOME_ICON_SIZE};
  fill: ${ITEM_COLOR};
  transform: scaleX(-1);
`;

export const Plus = styled.div`
  margin-left: 8px;
  margin-right: 8px;
  font-size: 20px;
`;

export const NavList = styled.ul`
  ${({ isMenuOpen }) =>
    isMenuOpen
      ? mq({
          display: ["flex", "flex", "flex", ""],
          flexDirection: ["column", "column", "", ""],
          justifyContent: ["center", "center", "", ""],
          alignItems: ["center", "center", "", ""],
        })
      : {}}
`;

const getNavItemStyles = (props) => {
  const styles = {
    marginRight: ["0px", "0px", "20px"],
    marginBottom: ["10px", "10px", "0px"],
  };

  if (props.isMenuOpen) {
    styles.display = ["inline-block", "inline-block", "", ""];
  } else {
    styles.display = ["none", "none", "inline-block", "inline-block"];
  }

  return mq(styles);
};

export const NavItem = styled.li`
  text-transform: uppercase;

  ${getNavItemStyles};

  &:last-child {
    margin-right: 0;
    margin-bottom: 0;
  }
`;

export const ATag = styled.a`
  color: ${ITEM_COLOR};
  cursor: pointer;

  ${pseudo({
    "&": {
      opacity: [0.75, 1, 1, 1],
    },
  })};
`;

export const ATagIconContainer = styled(ATag)`
  height: 24px;

  ${mq({
    display: ["none", "none", "flex", "flex"],
  })}
`;
