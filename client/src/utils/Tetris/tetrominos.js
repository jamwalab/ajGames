export const TetrominosShapes = {
  0: {
    shape: [[0]],
    color: '0, 0, 0'
  },
  I: {
    shape: [
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0],
      [0, 1, 0, 0]
    ],
    color: '0, 204, 204'
  },
  J: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [1, 1, 0]
    ],
    color: '255, 128, 0'
  },
  L: {
    shape: [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 1]
    ],
    color: '255, 51, 51'
  },
  O: {
    shape: [
      [1, 1],
      [1, 1],
    ],
    color: '51, 102, 0'
  },
  S: {
    shape: [
      [0, 1, 1],
      [1, 1, 0],
      [0, 0, 0]
    ],
    color: '0, 0, 255'
  },
  T: {
    shape: [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0]
    ],
    color: '153, 153, 255'
  },
  Z: {
    shape: [
      [1, 1, 0],
      [0, 1, 1],
      [0, 0, 0]
    ],
    color: '204, 0, 102'
  }
}

export const randomTertomino = () => {
  const tetrominos = ["I", "J", "L", "O", "S", "T", "Z"];
  const randTetromino = tetrominos[Math.floor(Math.random() * tetrominos.length)];

  return TetrominosShapes[randTetromino];
}