import facepaint from "facepaint";

export const tablet = 768;
export const desktop = 1024;

const mq = facepaint([
  `@media(min-width: ${tablet}px)`,
  `@media(min-width: ${desktop}px)`,
]);

export default mq;
