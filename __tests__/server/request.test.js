import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import bggUrl from '../../server/config';
import makeRequest from '../../server/request';

describe('makeRequest', () => {

    it('returns game data when request is made', done => {
        const mock = new MockAdapter(axios);
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
        const testUrl = bggUrl
            .segment('collection/')
            .segment('iclefirefly').toString();

        mock.onGet(testUrl).reply(200, gameData);

        makeRequest(testUrl, {}).then(response => {
            expect(response).toEqual(gameData);
            done();
        });
    });
});