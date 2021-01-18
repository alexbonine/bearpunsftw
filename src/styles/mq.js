import facepaint from "facepaint";

export const tablet = 768;
export const desktop = 1024;
export const extraLarge = 1500;

const mq = facepaint([
  `@media(min-width: ${tablet}px)`,
  `@media(min-width: ${desktop}px)`,
  `@media(min-width: ${extraLarge}px)`,
]);

export default mq;
