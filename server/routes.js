import express from 'express';
import getCollection from './controllers/boardGameGeek/getCollection';
import getGames from './controllers/boardGameGeek/getGames';
import getGeekList from './controllers/boardGameGeek/getGeekList';
import path from 'path';

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

export default (app) => {

    app.get('/bgg/games/:gameList', getGames);
    app.get('/bgg/:username/collection', getCollection);
    app.get('/bgg/:listId/geekList', getGeekList);

    app.use(express.static(DIST_DIR));
    app.get('*', (req, res) => res.sendFile(HTML_FILE));
    return app;
};