import React, { useEffect, useState } from "react";
import { useWindowHeight } from "@react-hook/window-size";
import useMq from "hooks/useMq";
import IconCopyright from "components/IconCopyright";
import {
  ATag,
  ATagIconContainer,
  BearIcon,
  Container,
  Home,
  LemurIcon,
  MenuBar1,
  MenuBar2,
  MenuBar3,
  MenuButton,
  NavList,
  NavItem,
  Plus,
} from "./styles";

const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isFixedHeader, setFixedHeader] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const { isNotDesktop } = useMq();
  const screenHeight = useWindowHeight();

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop.scrollTop);
      const screenHeight =
        window.innerHeight || e.target.documentElement.clientHeight;
      setFixedHeader(e.target.documentElement.scrollTop > screenHeight);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop, screenHeight]);

  useEffect(() => {
    setFixedHeader(isNotDesktop);
  }, [isNotDesktop]);

  return (
    <Container isFixedHeader={isFixedHeader} isMenuOpen={isMenuOpen}>
      <Home>
        <MenuButton onClick={() => setMenuOpen(!isMenuOpen)}>
          <MenuBar1 isMenuOpen={isMenuOpen} />
          <MenuBar2 isMenuOpen={isMenuOpen} />
          <MenuBar3 isMenuOpen={isMenuOpen} />
        </MenuButton>
        <ATagIconContainer href="/">
          <BearIcon />
          <Plus>&#43;</Plus>
          <LemurIcon />
        </ATagIconContainer>
        <IconCopyright />
      </Home>
      <NavList isMenuOpen={isMenuOpen}>
        <NavItem isMenuOpen={isMenuOpen}>
          <ATag href="/#ourstory" onClick={closeMenu}>
            Our Story
          </ATag>
        </NavItem>
        <NavItem isMenuOpen={isMenuOpen}>
          <ATag href="/#schedule" onClick={closeMenu}>
            The Weekend
          </ATag>
        </NavItem>
        <NavItem isMenuOpen={isMenuOpen}>
          <ATag href="/#accommodations" onClick={closeMenu}>
            Accommodations
          </ATag>
        </NavItem>
        <NavItem isMenuOpen={isMenuOpen}>
          <ATag href="/#thingstodo" onClick={closeMenu}>
            Things To Do
          </ATag>
        </NavItem>
        <NavItem isMenuOpen={isMenuOpen}>
          <ATag href="/#rsvp" onClick={closeMenu}>
            RSVP
          </ATag>
        </NavItem>
        <NavItem isMenuOpen={isMenuOpen}>
          <ATag
            target="_blank"
            rel="noreferrer"
            href="https://www.zola.com/registry/shawna_alex"
            onClick={closeMenu}
          >
            Registry
          </ATag>
        </NavItem>
        {/* <NavItem isMenuOpen={isMenuOpen}>
          <ATag href="/gallery" onClick={closeMenu}>Gallery</ATag>
        </NavItem> */}
      </NavList>
    </Container>
  );
};

export default Header;
