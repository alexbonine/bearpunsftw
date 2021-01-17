import React, { useEffect, useState } from "react";
import {
  ATag,
  ATagIconContainer,
  BearIcon,
  Container,
  Home,
  IconCopyright,
  LemurIcon,
  NavItem,
  Plus,
} from "./styles";

const Header = () => {
  const [scrollTop, setScrollTop] = useState(0);
  const [isFixedHeader, setFixedHeader] = useState(false);

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
    <Container isFixedHeader={isFixedHeader}>
      <Home>
        <ATagIconContainer href="#">
          <BearIcon />
          <Plus>&#43;</Plus>
          <LemurIcon />
        </ATagIconContainer>
        <IconCopyright>
          Icons made by&#32;
          <a href="http://www.freepik.com/" title="Freepik">
            Freepik
          </a>
          &#32;from&#32;
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </IconCopyright>
      </Home>
      <ul>
        <NavItem>
          <ATag href="#ourstory">Our Story</ATag>
        </NavItem>
        <NavItem>
          <ATag href="#schedule">Schedule</ATag>
        </NavItem>
        <NavItem>
          <ATag href="#accomodations">Accomodations</ATag>
        </NavItem>
        <NavItem>
          <ATag href="#thingstodo">Things To Do</ATag>
        </NavItem>
        <NavItem>
          <ATag href="#rsvp">RSVP</ATag>
        </NavItem>
        <NavItem>
          <ATag
            target="_blank"
            href="https://www.zola.com/registry/shawna_alex"
          >
            Registry
          </ATag>
        </NavItem>
        <NavItem>
          <ATag href="/gallery">Gallery</ATag>
        </NavItem>
      </ul>
    </Container>
  );
};

export default Header;
