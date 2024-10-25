import { startTicTacToe } from "../support/actions/tictactoe_board";
describe('Verifies initial state of tictactoe page', () => {


  it('should not have a tictactoe board', () => {

    cy.visit('/');
    cy.get("#table").children().should('have.length', 0);
  });

  [1, 2, 3].forEach((boardSize) => {
    it(`should have an empty ${boardSize}x${boardSize} tictactoe board`, () => {

      startTicTacToe(boardSize);
      cy.get("#table tr").should('have.length', boardSize)
      cy.get("#table tr td").should('have.length', boardSize * boardSize)
      cy.get("#table tr td").each($el => {
        cy.wrap($el).should('have.text', '')
      })
    })

  });

});
