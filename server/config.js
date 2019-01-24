const boardGameGeek = new URL('https://gametableproxy.herokuapp.com');
boardGameGeek.host = 'gametableproxy.herokuapp.com';
boardGameGeek.protocol = 'https';
const defaultPath = '/api/v1/';

export {boardGameGeek, defaultPath};