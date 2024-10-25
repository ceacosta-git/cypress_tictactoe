import { byGridPosition } from "../selectors/tictactoe_board";

/**
 * Starts a Tic Tac Toe board.
 * @param {number} boardSize the size for the Tic Tac Toe board. 
 */
export const startTicTacToe = (boardSize) => {
    cy.visit('/');
    cy.get("#number").type(`${boardSize}{enter}`);
};

/**
 * Clicks on the Tic Tac Toe given position. 
 * @example
 * // positions at a 3x3 Tic Tac Toe board
 * // 0 | 1 | 2
 * // 3 | 4 | 5
 * // 6 | 7 | 8
 *  placeMarkAtPosition(4); // clicks on the middle of a 3x3 Tic Tac Toe board
 * @param {number} position the index in the Tic Tac Toe grid to click on.
 */
export const placeMarkAtPosition = (position) => {
    cy.get(byGridPosition(position)).click();
};

/**
 * Check if the given mark is at the given position for the Tic Tac Toe board.
 * @example
 *  assertMarkAtPosition('X', 4); // checks if X is at the middle of a 3x3 Tic Tac Toe board
 * @param {string} mark 'X' or 'O' 
 * @param {number} position the index in the Tic Tac Toe grid to assert.
 */
export const assertMarkAtPosition = (mark, position) => {
    cy.get(byGridPosition(position)).should('have.text', mark);
};