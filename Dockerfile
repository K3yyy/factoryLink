## Step 1: Build stage
#FROM node:18-alpine AS builder
#WORKDIR /src/app
#
## Copy package files
#COPY package.json package-lock.json ./
#RUN npm ci
#
## Copy rest of the project
#COPY . .
#
## Build Next.js app
#RUN npm run build
#
## Step 2: Production stage
#FROM node:18-alpine
#WORKDIR /app
#
## Copy from builder
#COPY --from=builder /src/app/package*.json ./
#COPY --from=builder /src/app/.next ./.next
#COPY --from=builder /src/app/public ./public
#COPY --from=builder /src/app/node_modules ./node_modules
#COPY --from=builder /src/app/next.config.* ./
#
#ENV NODE_ENV=production
#EXPOSE 3000
#
#CMD ["npm", "start"]
