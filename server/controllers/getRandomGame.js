export default function getRandomGame(gamesList){
    const randomGameIndex = Math.floor(Math.random() * (gamesList.length));
    return gamesList[randomGameIndex];
}
    