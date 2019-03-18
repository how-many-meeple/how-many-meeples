import * as headers from './headers';
import bggUrl from '../config';
import makeRequest from '../request';

export default async function createGetCollectionHandler(req, res) {
    const collectionUrl = bggUrl
        .segment('collection/')
        .segment(req.params.username).toString();
        const requestHeaders = {
            [headers.BggFilterPlayerCount]: req.query.numPlayers,
            [headers.BggFilterMinDuration]: req.query.minDuration,
            [headers.BggFilterMaxDuration]: req.query.maxDuration
        };
        res.json(await makeRequest(collectionUrl, headers.filterHeaders(requestHeaders)));
}