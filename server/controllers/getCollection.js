import * as url from '../config';
import makeRequest from '../request';

export default async function createGetCollectionHandler(req, res) {
    const collectionUrl = url.boardGameGeek;
    collectionUrl.pathname = `${url.defaultPath}collection`;
    collectionUrl.search = `username=${req.params.username}&own=1`;
    res.json(await makeRequest(collectionUrl.href));
}