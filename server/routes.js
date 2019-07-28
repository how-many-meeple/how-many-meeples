import { getCompatibleList , getRandomGame} from './controllers/getGamesList';
import express from 'express';
import path from 'path';

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

export default (app) => {

    app.get('/bgg/random/:listType/:listOption', getRandomGame);
    app.get('/bgg/list/:listType/:listOption', getCompatibleList);

    app.use(express.static(DIST_DIR));
    app.get('*', (req, res) => res.sendFile(HTML_FILE));
    return app;
};