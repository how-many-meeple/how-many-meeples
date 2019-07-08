# ---- Base Node ----
FROM node:11-alpine AS base
# set working directory
WORKDIR /app
# copy project file
COPY package*.json ./

# ---- Dependencies ----
FROM base AS dependencies
# install node packages
RUN npm set progress=false
# install ALL node_modules, including 'devDependencies'
RUN npm install

# ---- Test ----
## run linters, setup and tests
FROM dependencies AS test
COPY . .
RUN  npm run lint && npm run test

# ---- Release ----
FROM base AS release
RUN npm install --only=production
# copy app sources
COPY . .
# expose port and define CMD
EXPOSE 5000
CMD npm start