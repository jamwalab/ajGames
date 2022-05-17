export const PG_WIDTH = 12;
export const PG_HEIGHT = 20;

export const createPlayground = () => {
  //[0, 0] = 0 if block is empty, 1 filled; 2nd 0 if free and moving, 1 if static / fixed!!
  return Array.from(Array(PG_HEIGHT), () => new Array(PG_WIDTH).fill([0, 0]));
};