/**
 * Returns selector by id based on position on the Tic Tac Toe.
 * @example
 * // positions at a 3x3 Tic Tac Toe board
 * // 0 | 1 | 2
 * // 3 | 4 | 5
 * // 6 | 7 | 8
 * byGridPosition(2); // id selector '#2'
 * @param {number} position 
 * @returns selector by id based on position on the Tic Tac Toe
 */
export const byGridPosition = (position) => `#${position}`;
