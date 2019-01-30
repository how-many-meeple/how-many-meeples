import bggUrl from '../config';
import makeRequest from '../request';

export default async function createGetCollectionHandler(req, res) {
    const collectionUrl = bggUrl
        .segment('collection')
        .param({
            'username': req.params.username,
            'own': 1
        }).toString();
    res.json(await makeRequest(collectionUrl));
}