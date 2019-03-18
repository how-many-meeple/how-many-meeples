import createGetCollectionHandler from './controllers/getCollection';
import express from 'express';
import getGeekListHandler from './controllers/getGeekList';
import path from 'path';

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

export default (app) => {

    app.get('/bgg/collection/:username', createGetCollectionHandler);
    app.get('/bgg/geeklist/:listId', getGeekListHandler);

    app.use(express.static(DIST_DIR));
    app.get('*', (req, res) => res.sendFile(HTML_FILE));
    return app;
};