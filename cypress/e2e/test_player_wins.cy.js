import { startTicTacToe, placeMarkAtPosition } from "../support/actions/tictactoe_board";
import { endgameMessage } from "../support/selectors/tictactoe_board";

describe('Verifies that a player can win', () => {
    it('X should win on a 1x1 tic-tac-toe', () => {
        startTicTacToe(1);
        placeMarkAtPosition(0);
        cy.get(endgameMessage)
            .should('be.visible')
            .and('contain.text', "player X! You've won.");
    });

    it('X can win horizontally', () => {
        // ToDo
    });

    it('X can win vertically', () => {
        // ToDo
    });

    it('X can win diagonally', () => {
        // ToDo
    });

});
