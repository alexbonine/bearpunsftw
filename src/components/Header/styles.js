import styled from "@emotion/styled";
import pseudo from "styles/pseudo";
import Bear from "images/bear.svg";
import Lemur from "images/lemur.svg";

const HOME_ICON_SIZE = "24px";
const ITEM_COLOR = "white";

console.log(
  pseudo({
    "&": [{ opacity: 0.75 }, { opacity: 1 }],
  })
);

export const Container = styled.nav`
  position: ${(props) => (props.isFixedHeader ? "fixed" : "absolute")};
  top: 0;
  left: 0;
  height: 50px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Home = styled.div`
  position: absolute;
  left: 50px;
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

export const NavItem = styled.li`
  display: inline-block;
  margin-right: 20px;
  text-transform: uppercase;

  &:last-child {
    margin-right: 0;
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
