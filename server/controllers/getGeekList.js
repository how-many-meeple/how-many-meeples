import bggUrl from '../config';
import makeRequest from '../request';

export default async function createGetGeekListHandler(req, res) {
    const collectionUrl = bggUrl
        .segment('geeklist/')
        .segment(req.params.listId).toString();
    const requestHeaders = {
        'BGG_FILTER_PLAYER_COUNT': req.query.numPlayers,
        'BGG_FILTER_MIN_DURATION': req.query.minDuration,
        'BGG_FILTER_MAX_DURATION': req.query.maxDuration
    };
    res.json(await makeRequest(collectionUrl, requestHeaders));
}