import styled from "@emotion/styled";
import pseudo from "styles/pseudo";
import mq from "styles/mq";
import Bear from "images/bear.svg";
import Lemur from "images/lemur.svg";

const HOME_ICON_SIZE = "24px";
const ITEM_COLOR = "white";

export const Container = styled.nav`
  position: ${(props) =>
    props.isFixedHeader || props.isNotDesktop ? "fixed" : "absolute"};
  top: 0;
  left: 0;
  height: ${(props) =>
    props.isNotDesktop && props.isMenuOpen ? "100%" : "50px"};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.isNotDesktop && props.isMenuOpen ? "#7d7979" : "rgba(0, 0, 0, 0.5)"};
`;

export const Home = styled.div`
  position: absolute;
  left: ${(props) => (props.isNotDesktop ? "20px" : "50px")};
  top: ${(props) => (props.isNotDesktop ? "2px" : "")};
`;

export const MenuButton = styled.div`
  display: inline-block;
  cursor: pointer;

  ${pseudo({
    "&": {
      opacity: [0.75, 1, 1, 1],
    },
  })};
`;

const MenuBar = styled.div`
  width: 35px;
  height: 5px;
  background-color: white;
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

export const IconCopyright = styled.div`
  display: none;
`;

export const NavList = styled.ul`
  ${(props) =>
    props.isNotDesktop && props.isMenuOpen
      ? {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }
      : {}}
`;

export const NavItem = styled.li`
  display: ${(props) =>
    !props.isNotDesktop || props.isMenuOpen ? "inline-block" : "none"};
  text-transform: uppercase;

  ${mq({
    marginRight: ["0px", "0px", "20px"],
    marginBottom: ["10px", "10px", "0px"],
  })}

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
  display: flex;
  height: 24px;
`;
