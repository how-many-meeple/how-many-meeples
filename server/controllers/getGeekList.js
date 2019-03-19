import * as headers from './headers';
import bggUrl from '../config';
import makeRequest from '../request';

export default async function createGetGeekListHandler(req, res) {
    const geekListUrl = bggUrl
        .segment('geeklist/')
        .segment(req.params.listId).toString();
    const requestHeaders = {
        [headers.BggFilterPlayerCount]: req.query.numPlayers,
        [headers.BggFilterMinDuration]: req.query.minDuration,
        [headers.BggFilterMaxDuration]: req.query.maxDuration
    };
    res.json(await makeRequest(geekListUrl, headers.filterHeaders(requestHeaders)));
}