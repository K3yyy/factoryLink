# Step 1: Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /src/app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm ci --omit=dev

# Copy the rest of the application
COPY . .

# Build the Next.js app
RUN npm run build

# Step 2: Production stage
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app/package.json /app/package-lock.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/next.config.* ./

# Set environment variables
ENV NODE_ENV=production

# Expose the port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]