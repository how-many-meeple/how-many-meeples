import bggUrl from '../config';
import makeRequest from '../request';

export default async function createGetCollectionHandler(req, res) {
    const collectionUrl = bggUrl
        .segment('collection/')
        .segment(req.params.username).toString();
    const requestHeaders = {
        'BGG_FILTER_PLAYER_COUNT': req.query.numPlayers,
        'BGG_FILTER_MIN_DURATION': req.query.minDuration,
        'BGG_FILTER_MAX_DURATION': req.query.maxDuration
    };
    res.json(await makeRequest(collectionUrl, requestHeaders));
}