import facepaint from "facepaint";

const mq = facepaint(
  ["@media(min-width: 768px)", "@media(min-width: 1024px)"],
  { overlap: true }
);

export default mq;
