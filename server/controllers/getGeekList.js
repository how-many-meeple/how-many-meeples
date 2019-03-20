import * as headers from './headers';
import bggUrl from '../config';
import getRandomGame from './getRandomGame';
import makeRequest from '../request';

export default async function createGetGeekListHandler(req, res) {
    const geekListUrl = bggUrl
        .segment('geeklist/')
        .segment(req.params.listId).toString();
    const requestHeaders = {
        [headers.BggFilterPlayerCount]: req.query.numPlayers,
        [headers.BggFilterMinDuration]: req.query.minDuration,
        [headers.BggFilterMaxDuration]: req.query.maxDuration,
        [headers.BggFieldWhitelist]: 'name,maxplayers,minplayers,maxplaytime,image,thumbnail'
    };
    const gamesList = await makeRequest(geekListUrl, headers.filterHeaders(requestHeaders));
    res.json(getRandomGame(gamesList));
}