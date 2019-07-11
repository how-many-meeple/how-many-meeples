# ---- Base Node ----
FROM node:11-alpine AS base
# set working directory
WORKDIR /app

# ---- Development ----
FROM base as development
COPY package*.json ./
RUN npm ci --production
RUN cp -R node_modules /tmp/node_modules
RUN npm ci
COPY . .

# ---- Builder ----
FROM development AS builder
RUN npm run lint
RUN npm test -- --colors
RUN npm run bundle-prod

# ---- Release ----
FROM base AS release
COPY --from=builder /tmp/node_modules ./node_modules
COPY --from=builder /app/server ./server
COPY --from=builder /app/package.json ./
COPY --from=builder /app/.babelrc ./
EXPOSE 3000
CMD ["npm", "start"]