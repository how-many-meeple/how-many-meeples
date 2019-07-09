# How Many Meeples?

An application to randomly decide on which board game to play based on user input and Board Game Geek (BGG) Lists.

## Project scripts
Each of these scripts are defined in package.json and can be run from the root of the project. You may need to run `npm install` before running the following to ensure the dependencies are downloaded.

| Script | Purpose |
|--------|---------|
| npm start | Starts the server|
| npm run dev |Runs the front-end in the webpack development server|
| npm run bundle | Transpiles the source code for development purposes|
| npm run bundle-prod | Transpiles the source code for production|
| npm run lint | Runs lint check across all code|
| npm run lint-fix | Runs lint checks and fixes any simple issues it can|
| npm test | Runs all tests found in the project |

## To run locally
```
docker build -t how-many-meeples .

docker run -p 3000:3000 how-many-meeples
```
