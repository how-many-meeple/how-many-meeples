import * as headers from './headers';
import bggUrl from '../config';
import makeRequest from '../request';

async function createGamesList(req) {
    const requestUrl = bggUrl
        .segment(`${req.params.listType}/`)
        .segment(req.params.listOption).toString();

    const requestHeaders = {
        [headers.BggFilterPlayerCount]: req.query.numPlayers,
        [headers.BggFilterMinDuration]: req.query.minDuration,
        [headers.BggFilterMaxDuration]: req.query.maxDuration,
        [headers.BggFieldWhitelist]: headers.defaultWhitelist
    };
    return await makeRequest(requestUrl, headers.filterHeaders(requestHeaders));
}

export async function getRandomGame(req, res){
    const gamesList = await createGamesList(req);
    const randomGameIndex = Math.floor(Math.random() * (gamesList.length));
    res.json(gamesList[randomGameIndex]);
}

export async function getCompatibleList(req, res){
    const gamesList = await createGamesList(req);
    res.json(gamesList);
}
    