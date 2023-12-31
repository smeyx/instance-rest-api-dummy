FROM node:19-alpine as base
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

FROM base as dependencies
WORKDIR /app

COPY package*.json pnpm-lock.yaml ./
RUN pnpm install

COPY . .
RUN pnpm run build

FROM base as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY package*.json pnpm-lock.yaml ./
RUN pnpm install -P --frozen-lockfile

COPY --from=dependencies /app/dist ./dist

CMD ["node", "dist/server.js"]
