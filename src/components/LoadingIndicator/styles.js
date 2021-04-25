import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";
import colors from "styles/colors";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
    border-top-color: ${colors.frankGreen};
  }

  25% {
    border-top-color: ${colors.frankPink};
  }

  50% {
    transform: rotate(180deg);
    border-top-color: ${colors.frankBlue};
  }

  75% {
    border-top-color: ${colors.frankPurple};
  }

  100% {
    transform: rotate(360deg);
    border-top-color: ${colors.frankGreen};
  }
`;

export const Container = styled.div`
  position: absolute;
`;

export const Spinner = styled.div`
  position: relative;
  margin: 75px auto;
  width: 150px;
  height: 150px;
  display: block;
  overflow: hidden;

  div {
    border-radius: 50%;
    padding: 8px;
    border: 2px solid transparent;
    // animation: rotate linear 3.5s infinite;
    height: 100%;
    border-radius: 50%;
    padding: 4px;
    animation: ${rotate} 4s infinite linear;
  }

  div:hover {
    animation-play-state: paused;
  }

  .loader,
  .loader * {
    will-change: transform;
  }
`;
