import { startTicTacToe, placeMarkAtPosition, assertMarkAtPosition } from "../support/actions/tictactoe_board";

describe('Verifies players take turns on tictactoe page', () => {


  beforeEach(() => {
    startTicTacToe(3);
  });

  it('should alternate between X and O', () => {
    const TOP_LEFT = 0;
    const TOP_MIDDLE = 1;
    const TOP_RIGHT = 2;
    const MIDDLE_LEFT = 3;
    const CENTER = 4;
    const MIDDLE_RIGHT = 5;
    const BOTTOM_LEFT = 6;
    const BOTTOM_MIDDLE = 7;
    const BOTTOM_RIGHT = 8;

    const player_moves = new Map([
      [TOP_LEFT, 'X'],
      [CENTER, 'O'],
      [BOTTOM_RIGHT, 'X'],
      [TOP_MIDDLE, 'O'],
      [BOTTOM_MIDDLE, 'X'],
      [BOTTOM_LEFT, 'O'],
      [TOP_RIGHT, 'X'],
      [MIDDLE_RIGHT, 'O'],
      [MIDDLE_LEFT, 'X']]);

    for (const [player_choice, expected_mark] of player_moves) {
      placeMarkAtPosition(player_choice);
      assertMarkAtPosition(expected_mark, player_choice);
    }


  });


});
