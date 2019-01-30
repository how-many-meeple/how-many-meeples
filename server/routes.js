import createGetCollectionHandler from './controllers/getCollection';
import express from 'express';
import getGeekList from './controllers/getGeekList';
import path from 'path';

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

export default (app) => {

    app.get('/bgg/:username/collection', createGetCollectionHandler);
    app.get('/bgg/:listId/geekList', getGeekList);

    app.use(express.static(DIST_DIR));
    app.get('*', (req, res) => res.sendFile(HTML_FILE));
    return app;
};