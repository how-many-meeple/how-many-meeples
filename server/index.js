import express from 'express';
import routes from './routes';

const server = express();
const app = routes(server);
const port = 3000;

app.listen(port, () => console.log(`Meeples are listening on port ${port}!`));
