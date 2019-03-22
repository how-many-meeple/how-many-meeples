import { getRandomGame } from '../../../server/controllers/getRandomGame';

describe('getRandomGame', () => {

    it('should randomly return a game from a list of games', () => {
    const gameData = [
        {
            'name': '7 Wonders',
            'images': 'test.png',
        },
        {
            'name': 'Carcassonne',
            'images': 'test1.png',
        }
    ];
    const randomGame = getRandomGame(gameData);
    expect(gameData).toContainEqual(randomGame);
    });
});
    