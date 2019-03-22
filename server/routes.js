import { createGamesList } from './controllers/getRandomGame';
import express from 'express';
import path from 'path';

const DIST_DIR = __dirname;
const HTML_FILE = path.join(DIST_DIR, 'index.html');

export default (app) => {

    app.get('/bgg/:listType/:listOption', createGamesList);

    app.use(express.static(DIST_DIR));
    app.get('*', (req, res) => res.sendFile(HTML_FILE));
    return app;
};