import React, { useEffect, useState } from "react";
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
  const { isNotDesktop } = useMq();

  useEffect(() => {
    const onScroll = (e) => {
      setScrollTop(e.target.documentElement.scrollTop.scrollTop);
      const screenHeight =
        window.innerHeight || e.target.documentElement.clientHeight;
      setFixedHeader(e.target.documentElement.scrollTop > screenHeight);
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollTop]);

  return (
    <Container
      isFixedHeader={isFixedHeader}
      isMenuOpen={isMenuOpen}
      isNotDesktop={isNotDesktop}
    >
      <Home isNotDesktop={isNotDesktop}>
        {isNotDesktop ? (
          <MenuButton onClick={() => setMenuOpen(!isMenuOpen)}>
            <MenuBar1 isMenuOpen={isMenuOpen} />
            <MenuBar2 isMenuOpen={isMenuOpen} />
            <MenuBar3 isMenuOpen={isMenuOpen} />
          </MenuButton>
        ) : (
          <>
            <ATagIconContainer href="#">
              <BearIcon />
              <Plus>&#43;</Plus>
              <LemurIcon />
            </ATagIconContainer>
            <IconCopyright />
          </>
        )}
      </Home>
      <NavList isNotDesktop={isNotDesktop} isMenuOpen={isMenuOpen}>
        <NavItem isNotDesktop={isNotDesktop} isMenuOpen={isMenuOpen}>
          <ATag href="#ourstory">Our Story</ATag>
        </NavItem>
        <NavItem isNotDesktop={isNotDesktop} isMenuOpen={isMenuOpen}>
          <ATag href="#schedule">The Weekend</ATag>
        </NavItem>
        <NavItem isNotDesktop={isNotDesktop} isMenuOpen={isMenuOpen}>
          <ATag href="#accomodations">Accomodations</ATag>
        </NavItem>
        <NavItem isNotDesktop={isNotDesktop} isMenuOpen={isMenuOpen}>
          <ATag href="#thingstodo">Things To Do</ATag>
        </NavItem>
        <NavItem isNotDesktop={isNotDesktop} isMenuOpen={isMenuOpen}>
          <ATag href="#rsvp">RSVP</ATag>
        </NavItem>
        <NavItem isNotDesktop={isNotDesktop} isMenuOpen={isMenuOpen}>
          <ATag
            target="_blank"
            href="https://www.zola.com/registry/shawna_alex"
          >
            Registry
          </ATag>
        </NavItem>
        <NavItem isNotDesktop={isNotDesktop} isMenuOpen={isMenuOpen}>
          <ATag href="/gallery">Gallery</ATag>
        </NavItem>
      </NavList>
    </Container>
  );
};

export default Header;
