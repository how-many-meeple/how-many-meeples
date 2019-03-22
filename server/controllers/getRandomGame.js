import * as headers from './headers';
import bggUrl from '../config';
import makeRequest from '../request';

export async function createGamesList(req, res) {
    const requestUrl = bggUrl
        .segment(`${req.params.listType}/`)
        .segment(req.params.listOption).toString();

    const requestHeaders = {
        [headers.BggFilterPlayerCount]: req.query.numPlayers,
        [headers.BggFilterMinDuration]: req.query.minDuration,
        [headers.BggFilterMaxDuration]: req.query.maxDuration,
        [headers.BggFieldWhitelist]: headers.defaultWhitelist
    };
    const gamesList = await makeRequest(requestUrl, headers.filterHeaders(requestHeaders));
    res.json(getRandomGame(gamesList));
}

export function getRandomGame(gamesList){
    const randomGameIndex = Math.floor(Math.random() * (gamesList.length));
    return gamesList[randomGameIndex];
}
    